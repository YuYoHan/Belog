package com.example.Belog.controller;

import com.example.Belog.domain.BoardDTO;
import com.example.Belog.domain.Criteria;
import com.example.Belog.domain.PageDTO;
import com.example.Belog.service.BoardService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Tag(name = "Board check", description = "API 상태 체크")
@RestController
//@NoArgsConstructor
@AllArgsConstructor
@Slf4j
@RequestMapping("/v1")
public class BoardController {

    private BoardService boardService;

//    @PostMapping ("/board/write")
//    public String insertBoard(HttpServletRequest request) {
//        HttpSession session = request.getSession();
//        Long userId = (Long)session.getAttribute("userId");
//
//        // Timestamp currentTimeStamp = new Timestamp(System.currentTimeMillis());
//
//        BoardDTO boardDTO = BoardDTO.builder()
//                .boardTitle(request.getParameter("boardTitle"))
//                .boardContents(request.getParameter("boardContents"))
//                .hashTag(request.getParameter("hashTag"))
//                .userId(userId)
//                // .writeTime(currentTimeStamp)
//                .build();
//
//        if(!boardService.writeBoard(boardDTO)) {
//            // 실패 했을 시 예외처리
//            // 추가한 컬럼 개수가 1이 아닐때 걸림
//            log.error("[ERROR] : 게시글 추가 오류");
//        }
//        return "redirect:/board?page=1";
//    }


//    @Tag(name = "Board check")
//    @Operation(summary = "입력 API", description = "게시판을 입력하는 API입니다.")
//    @ApiResponses(value = {
//            @ApiResponse(responseCode = "201", description = "게시판 쓰기 성공"),
//            @ApiResponse(responseCode = "500", description = "게시판 쓰기 실패")
//    })
//    @PostMapping(value = "/board")
//    public ResponseEntity<?> insertBoard(
//            @RequestParam("boardTitle") String boardTitle,
//            @RequestParam("boardContents") String boardContents,
//            @RequestParam("hashTag") String hashTag,
//            @RequestParam("boardImages") List<MultipartFile> boardImages,
//            HttpSession session
//    ) {
//
//        Long userId = (Long)session.getAttribute("userId");
//
//        BoardDTO boardDTO = BoardDTO.builder()
//                .userId(userId)
//                .boardTitle(boardTitle)
//                .boardContents(boardContents)
//                .hashTag(hashTag)
//                .boardImages(boardImages)
//                .build();
//
//        try{
//            boardService.writeBoard(boardDTO);
//            return new ResponseEntity<>(HttpStatus.CREATED);
//        } catch (Exception e) {
//            log.error("error", e);
//            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }

    @Tag(name = "Board check")
    @Operation(summary = "입력 API", description = "게시판을 입력하는 API입니다.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "게시판 쓰기 성공"),
            @ApiResponse(responseCode = "500", description = "게시판 쓰기 실패")
    })
    @PostMapping(value = "/board")
    public ResponseEntity<?> insertBoard(@RequestBody BoardDTO boardDTO) {

        // Long userId = (Long)session.getAttribute("userId");

        BoardDTO insertBoardDTO = new BoardDTO().builder()
                .userId(boardDTO.getUserId())
                .boardTitle(boardDTO.getBoardTitle())
                .boardContents(boardDTO.getBoardContents())
                .hashTag(boardDTO.getHashTag())
                .boardImages(boardDTO.getBoardImages())
                .build();

        // boardDTO = boardDTO.builder().userId(userId).build();

        try{
            boardService.writeBoard(insertBoardDTO);
            return new ResponseEntity<>(HttpStatus.CREATED);
        } catch (Exception e) {
            log.error("error", e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

//    @PostMapping("/board/delete")
//    public String deleteBoard(HttpServletRequest request) {
//        Long deleteBoardNum = Long.parseLong(request.getParameter("boardNum"));
//
//        if(!boardService.deleteBoard(deleteBoardNum)) {
//            // 삭제한 컬럼 개수가 1이 아닐 때 걸림
//            log.error("[ERROR] : 게시글 삭제 오류");
//        }
//        return "redirect:/board?page=1";
//    }

    @Tag(name = "Board check")
    @Operation(summary = "삭제 API", description = "게시판을 삭제하는 API입니다.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "204", description = "회원 삭제 성공"),
            @ApiResponse(responseCode = "404", description = "회원 삭제 실패")
    })
    @DeleteMapping("/board/{boardNum}")
    public ResponseEntity<?> deleteBoard(@PathVariable("boardNum") Long boardNum) {
        boardService.deleteBoard(boardNum);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

//    @PostMapping("/board/update")
//    public String updateBoard(HttpServletRequest request) {
//        Long boardNum = Long.parseLong(request.getParameter("boardNum"));
//        String boardTitle = request.getParameter("boardTitle");
//        String hashTag = request.getParameter("hashTag");
//        String boardContents = request.getParameter("boardContents");
//
//        BoardDTO boardDTO = BoardDTO.builder()
//                .boardNum(boardNum)
//                .boardContents(boardContents)
//                .boardTitle(boardTitle)
//                .hashTag(hashTag)
//                .build();
//
//        if(!boardService.updateBoard(boardDTO)) {
//            // 업데이트한 컬럼 개수가 1이 아닐 때 걸림
//            log.error("[ERROR] : 게시글 수정 오류");
//        }
//        return "redirect:/board?page=1";
//    }

    @Tag(name = "Board check")
    @Operation(summary = "수정 API", description = "게시판을 수정하는 API입니다.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "회원 수정 성공"),
            @ApiResponse(responseCode = "404", description = "회원 수정 실패")
    })
    @PutMapping("/board")
    public ResponseEntity<?> updateBoard(@RequestBody BoardDTO boardDTO) {
        boardService.updateBoard(boardDTO);
        return new ResponseEntity<>(boardDTO, HttpStatus.OK);
    }

//    @GetMapping("/board")
//    public String findAllBoard(@RequestParam("page") int page, Model model) {
//
//        Criteria criteria = new Criteria(page);
//
//        List<BoardDTO> boardList = boardService.findAllBoard(criteria);
//        model.addAttribute("boardList", boardList);
//        model.addAttribute("pageMaker", new PageDTO(boardService.getBoardCount(), criteria));
//
//        log.info("모든 게시글 보기: {}", boardList);
//        return "/borad_list";
//    }

    @Tag(name = "Board check")
    @Operation(summary = "모든 게시판 찾기 API", description = "게시판을 10개씩 조회하는 API입니다.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "회원 조회 성공"),
            @ApiResponse(responseCode = "404", description = "회원 조회 실패")
    })
    @GetMapping("/board/{page}")
    public ResponseEntity<?> findAllBoard(@PathVariable("page") int page) {

        Criteria criteria = new Criteria(page);

        List<BoardDTO> boardList = boardService.findAllBoard(criteria);
        PageDTO pageDTO = new PageDTO(boardService.getBoardCount(), criteria);

        Map<String, Object> map = new HashMap<>();

        map.put("boardList", boardList);
        map.put("pageDTO", pageDTO);

        log.info("모든 게시글 보기: {}", boardList);
        return new ResponseEntity<>(map, HttpStatus.OK);
    }

//    @GetMapping("/board/{boardNum}")
//    public String boardDetail(@PathVariable Long boardNum, Model model) {
//        BoardDTO boardDetail = boardService.findBoardByBoardNum(boardNum);
//        model.addAttribute("board저기 주Detail", boardDetail);
//
//        log.info("{}번 게시글 보기: {}", boardNum, boardDetail);
//        return "/board_detail";
//    }


    @Tag(name = "Board check")
    @Operation(summary = "상세정보 API", description = "게시판을 상세하게 보여주는 API입니다.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "회원 상세조회 성공"),
            @ApiResponse(responseCode = "404", description = "회원 상세조회 실패")
    })
    @GetMapping("/board/boardDetail/{boardNum}")
    public ResponseEntity<?> boardDetail(@PathVariable Long boardNum) {
        BoardDTO boardDetail = boardService.findBoardByBoardNum(boardNum);

        return new ResponseEntity<>(boardDetail, HttpStatus.OK);
    }

    @GetMapping("/board")
    public ResponseEntity<?> getUserBoardByUserEmail(@RequestParam String userEmail) {
        Long userId = boardService.findUserIdByUserEmail(userEmail);

        List<BoardDTO> boardListByUserEmail = boardService.findBoardByUserId(userId);
        return new ResponseEntity<>(boardListByUserEmail, HttpStatus.OK);
    }
}