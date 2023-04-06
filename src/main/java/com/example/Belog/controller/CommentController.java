package com.example.Belog.controller;

import com.example.Belog.domain.BoardDTO;
import com.example.Belog.domain.CommentDTO;
import com.example.Belog.service.CommentService;
import io.swagger.v3.oas.annotations.Operation;
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
@RequestMapping("/board/{boardNum}")
public class CommentController {

    private CommentService commentService;

    @Tag(name = "Comment check")
    @Operation(summary = "추가 API", description = "댓글을 추가하는 API입니다.")
    // 댓글작성
    @PostMapping("/comment")
    public ResponseEntity<?> addComment(CommentDTO commentDTO) {
        commentService.addComment(commentDTO);
        log.info("Add success");
        return new ResponseEntity<>(commentDTO, HttpStatus.CREATED);
    }// addComment

    @Tag(name = "Comment check")
    @Operation(summary = "수정 API", description = "댓글을 수정하는 API입니다.")
    // 댓글수정
    @PutMapping("/comment/{commentNum}")
    public ResponseEntity<?> editComment(CommentDTO commentDTO) {
        commentService.editComment(commentDTO);
        log.info("edit");
        return new ResponseEntity<>(commentDTO, HttpStatus.OK);
    }//editComment

    @Tag(name = "Comment check")
    @Operation(summary = "삭제 API", description = "댓글을 삭제하는 API입니다.")
    // 댓글삭제
    @DeleteMapping("/comment/{commentNum}")
    public ResponseEntity<?> deleteComment(@PathVariable("boardNum") Long boardNum,
                                           @PathVariable("commentNum") Long commentNum) {
        commentService.deleteComment(commentNum);
        log.info("delete");
        return new ResponseEntity<>(HttpStatus.OK);
    }//deleteComment

    // 댓글 불러오기
//    @GetMapping("/comment/{commentNum}")
//    public CommentDTO findComment(@PathVariable("boardNum") Long boardNum,
//                                  @PathVariable("commentNum") Long commentNum) {
//        log.info("find " + commentNum);
//        return commentService.findComment(boardNum, commentNum);
//    }//deleteComment

    @Tag(name = "Comment check")
    @Operation(summary = "전체 조회 API", description = "댓글을 모두 조회하는 API입니다.")
    // 전체 댓글보여주기
    @GetMapping("/comment/list")
    public List<CommentDTO> findAllComment(@PathVariable("boardNum") Long boardNum) {
        log.info("find " + boardNum +" comment list");
        return commentService.findAllComment(boardNum);
    }//findAllComment

    @Tag(name = "Comment check")
    @Operation(summary = "댓글 갯 수 API", description = "댓글수에 관련된 API입니다.")
    //댓글 수
    @GetMapping("/comment/count")
    public int count(@PathVariable Long boardNum) {
        log.info("count board "+boardNum);
        return commentService.countComment(boardNum);
    }
}
