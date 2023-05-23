package com.example.Belog.controller;

import com.example.Belog.domain.BoardDTO;
import com.example.Belog.domain.CommentDTO;
import com.example.Belog.service.CommentService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;

@Tag(name = "Comment check", description = "API 상태 체크")
@RestController
@Log4j2
@AllArgsConstructor
@RequestMapping("/v1/board")
public class CommentController {

    private CommentService commentService;

    // 댓글작성
    @Tag(name = "Comment check")  //API 그룹설정
    @Operation(summary = "추가 API", description = "댓글을 추가하는 API입니다.") // API 설명
    @PostMapping("/{boardNum}/comment")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "댓글 등록 성공"),
            @ApiResponse(responseCode = "404", description = "댓글 등록 실패")}) //API 호출결과에 대해서 설명
    public ResponseEntity<?> addComment( @PathVariable("boardNum") Long boardNum,
                                         @RequestParam("comment") String comment,
                                         HttpSession session) {

        Long userId = (Long)session.getAttribute("userId");

        CommentDTO commentDTO = CommentDTO.builder()
                .userId(userId)
                .boardNum(boardNum)
                .comment(comment)
                .build();

        commentService.addComment(commentDTO);
        log.info("Add success");
        return new ResponseEntity<>(commentDTO, HttpStatus.CREATED);
    }// addComment


    // 댓글수정
    @Tag(name = "Comment check")
    @Operation(summary = "수정 API", description = "댓글을 수정하는 API입니다.")
    @PutMapping("/{boardNum}/comment/{commentNum}")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "댓글 수정 성공"),
            @ApiResponse(responseCode = "404", description = "댓글 수정 실패") })
    public ResponseEntity<?> editComment( @PathVariable("commentNum") Long commentNum,
                                          @RequestBody CommentDTO commentDTO,
                                          HttpSession session) {

        commentService.editComment(commentDTO);
        log.info("edit");
        return new ResponseEntity<>(commentDTO, HttpStatus.OK);
    }//editComment


    // 댓글삭제
    @Tag(name = "Comment check")
    @Operation(summary = "삭제 API", description = "댓글을 삭제하는 API입니다.")
    @DeleteMapping("/{boardNum}/comment/{commentNum}")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "댓글 삭제 성공"),
            @ApiResponse(responseCode = "404", description = "댓글 삭제 실패")})
    public ResponseEntity<?> deleteComment(@PathVariable("boardNum") Long boardNum,
                                           @PathVariable("commentNum") Long commentNum) {
        commentService.deleteComment(commentNum);
        log.info("delete");
        return new ResponseEntity<>(HttpStatus.OK);
    }//deleteComment

    // 전체 댓글보여주기
    @Tag(name = "Comment check")
    @Operation(summary = "전체 조회 API", description = "댓글을 모두 조회하는 API입니다.")
    @GetMapping("/{boardNum}/comment/list")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "전체 댓글 조회 성공"),
            @ApiResponse(responseCode = "404", description = "전체 댓글 조회 실패")
    })
    public List<CommentDTO> findAllComment(@PathVariable("boardNum") Long boardNum) {
        log.info("find " + boardNum +" comment list");
        return commentService.findAllComment(boardNum);
    }//findAllComment


    //댓글 수
    @Tag(name = "Comment check")
    @Operation(summary = "댓글 갯 수 API", description = "댓글수에 관련된 API입니다.")
    @GetMapping("/{boardNum}/comment/count")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "전체 댓글 수 조회 성공"),
            @ApiResponse(responseCode = "404", description = "전체 댓글 수 조회 실패")
    })
    public int count(@PathVariable("boardNum") Long boardNum) {
        log.info("count board "+boardNum);
        log.info(commentService.countComment(boardNum));
        return commentService.countComment(boardNum);
    }


}
