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
@RequestMapping("/api/v1")
public class BoardController {

    private BoardService boardService;

    // 전체 게시판 조회
    @Tag(name = "Board check")
    @Operation(summary = "모든 게시판 찾기 API", description = "게시판을 10개씩 조회하는 API입니다.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "회원 조회 성공"),
            @ApiResponse(responseCode = "404", description = "회원 조회 실패")
    })
    @GetMapping("/board/{page}")
    public ResponseEntity<?> findAllBoard(@PathVariable("page") int page) {

        // page를 PathVariable로 받아오면 그것을 page에 넣어줍니다.
        // Criteria 클래스로 page를 넘겨줍니다.
        Criteria criteria = new Criteria(page);

        // 페이지를 끊어서 보여주기 위해서 전체 보여주는 메소드에 page를 넘겨줍니다.
        // 10개만 보여주기로 했으면 10개만 나옵니다.
        List<BoardDTO> boardList = boardService.findAllBoard(criteria);
        // PageDTO에 SQL에서 count로 나온 int, 즉 total과 cri를 보내준다.
        PageDTO pageDTO = new PageDTO(boardService.getBoardCount(), criteria);

        Map<String, Object> map = new HashMap<>();

        map.put("boardList", boardList);
        map.put("pageDTO", pageDTO);

        log.info("모든 게시글 보기: {}", boardList);
        return new ResponseEntity<>(map, HttpStatus.OK);
    }

    // 게시글 작성 API
    @Tag(name = "Board check")
    @Operation(summary = "입력 API", description = "게시판을 입력하는 API입니다.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "게시판 쓰기 성공"),
            @ApiResponse(responseCode = "500", description = "게시판 쓰기 실패")
    })
    @PostMapping(value = "/board")
    public ResponseEntity<?> insertBoard(@RequestBody BoardDTO boardDTO) {

        // Long userId = (Long)session.getAttribute("userId");
        // 원래는 ↑와 같은 방법으로 세션에 담군 것을 가져왔지만
        // React에서 제대로 세션이 오고 가고 하는 것이 안되서
        // 프론트 측에서 로그인시 받은 userId를 게시글을 작성할 때 넘겨준다.
        // 그리고 받은 userId를 넣어준다.

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

    // 게시글 삭제 API
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

    // 게시글 수정 API
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

    // 게시글 상세 조회
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