package com.example.velog.controller;

import com.example.velog.domain.BoardDTO;
import com.example.velog.service.BoardService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.sql.Timestamp;

@Controller
@AllArgsConstructor
@Slf4j
public class BoardController {

    private BoardService boardService;

    @PostMapping ("/board/write")
    public String insertBoard(HttpServletRequest request) {
        HttpSession session = request.getSession();
        Long userId = (Long)session.getAttribute("userId");
        // 세션부분은 로그인부분과 합치고 테스트 후 null 처리 하기

        Timestamp currentTimeStamp = new Timestamp(System.currentTimeMillis());

        BoardDTO boardDTO = BoardDTO.builder()
                .boardTitle(request.getParameter("boardTitle"))
                .boardContents(request.getParameter("boardContents"))
                .hashTag(request.getParameter("hashTag"))
                .userId(userId)
                .writeTime(currentTimeStamp)
                .build();

        if(!boardService.writeBoard(boardDTO)) {
            // 실패 했을 시 예외처리
            // 추가한 컬럼 개수가 1이 아닐때 걸림
            log.error("[ERROR] : 게시글 추가 오류");
        }
        return "redirect:/board";
    }

    @PostMapping("/board/delete")
    public String deleteBoard(HttpServletRequest request) {
        Long deleteBoardNum = Long.parseLong(request.getParameter("boardNum"));

        if(!boardService.deleteBoard(deleteBoardNum)) {
            // 삭제한 컬럼 개수가 1이 아닐 때 걸림
            log.error("[ERROR] : 게시글 삭제 오류");
        }
        return "redirect:/board";
    }

    @PostMapping("/board/update")
    public String updateBoard(HttpServletRequest request) {
        Long updateBoardNum = Long.parseLong(request.getParameter("boardNum"));
        String updateBoardContents = request.getParameter("boardContents");

        BoardDTO boardDTO = BoardDTO.builder()
                .boardNum(updateBoardNum)
                .boardContents(updateBoardContents)
                .build();

        if(!boardService.updateBoard(boardDTO)) {
            // 업데이트한 컬럼 개수가 1이 아닐 때 걸림
            log.error("[ERROR] : 게시글 수정 오류");
        }
        return "redirect:/board";
    }
}
