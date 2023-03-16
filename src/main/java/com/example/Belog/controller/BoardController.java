package com.example.Belog.controller;

import com.example.Belog.domain.BoardDTO;
import com.example.Belog.domain.Criteria;
import com.example.Belog.domain.PageDTO;
import com.example.Belog.service.BoardService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;

@Controller
@AllArgsConstructor
@Slf4j
public class BoardController {

    private BoardService boardService;

    @PostMapping ("/board/write")
    public String insertBoard(HttpServletRequest request) {
        HttpSession session = request.getSession();
        Long userId = (Long)session.getAttribute("userId");

        // Timestamp currentTimeStamp = new Timestamp(System.currentTimeMillis());

        BoardDTO boardDTO = BoardDTO.builder()
                .boardTitle(request.getParameter("boardTitle"))
                .boardContents(request.getParameter("boardContents"))
                .hashTag(request.getParameter("hashTag"))
                .userId(userId)
                // .writeTime(currentTimeStamp)
                .build();

        if(!boardService.writeBoard(boardDTO)) {
            // 실패 했을 시 예외처리
            // 추가한 컬럼 개수가 1이 아닐때 걸림
            log.error("[ERROR] : 게시글 추가 오류");
        }
        return "redirect:/board?page=1";
    }

    @PostMapping("/board/delete")
    public String deleteBoard(HttpServletRequest request) {
        Long deleteBoardNum = Long.parseLong(request.getParameter("boardNum"));

        if(!boardService.deleteBoard(deleteBoardNum)) {
            // 삭제한 컬럼 개수가 1이 아닐 때 걸림
            log.error("[ERROR] : 게시글 삭제 오류");
        }
        return "redirect:/board?page=1";
    }

    @PostMapping("/board/update")
    public String updateBoard(HttpServletRequest request) {
        Long boardNum = Long.parseLong(request.getParameter("boardNum"));
        String boardTitle = request.getParameter("boardTitle");
        String hashTag = request.getParameter("hashTag");
        String boardContents = request.getParameter("boardContents");

        BoardDTO boardDTO = BoardDTO.builder()
                .boardNum(boardNum)
                .boardContents(boardContents)
                .boardTitle(boardTitle)
                .hashTag(hashTag)
                .build();

        if(!boardService.updateBoard(boardDTO)) {
            // 업데이트한 컬럼 개수가 1이 아닐 때 걸림
            log.error("[ERROR] : 게시글 수정 오류");
        }
        return "redirect:/board?page=1";
    }

    @GetMapping("/board")
    public String findAllBoard(@RequestParam("page") int page, Model model) {

        Criteria criteria = new Criteria(page);

        List<BoardDTO> boardList = boardService.findAllBoard(criteria);
        model.addAttribute("boardList", boardList);
        model.addAttribute("pageMaker", new PageDTO(boardService.getBoardCount(), criteria));

        log.info("모든 게시글 보기: {}", boardList);
        return "/borad_list";
    }

    @GetMapping("/board/{boardNum}")
    public String boardDetail(@PathVariable Long boardNum, Model model) {
        BoardDTO boardDetail = boardService.findBoardByBoardNum(boardNum);
        model.addAttribute("boardDetail", boardDetail);

        log.info("{}번 게시글 보기: {}", boardNum, boardDetail);
        return "/board_detail";
    }
}
