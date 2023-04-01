package com.example.Belog.controller;

import com.example.Belog.domain.BoardDTO;
import com.example.Belog.domain.CommentDTO;
import com.example.Belog.service.CommentService;
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

@RestController
@Log4j2
@AllArgsConstructor
@RequestMapping("/board")
public class CommentController {

    private CommentService commentService;

    // 댓글작성
    @PostMapping("/{boardNum}/comment")
    public ResponseEntity<?> addComment(@RequestBody CommentDTO commentDTO) {
        commentService.addComment(commentDTO);
        log.info("Add success");
        return new ResponseEntity<>(commentDTO, HttpStatus.CREATED);
    }// addComment

    // 댓글수정
    @PutMapping("/{boardNum}/edit-comment")
    public ResponseEntity<?> editComment(@PathVariable("commentNum") Long commentNum, @RequestBody CommentDTO commentDTO) {
        commentService.editComment(commentDTO);
        log.info("edit");
        return new ResponseEntity<>(commentDTO, HttpStatus.OK);
    }//editComment

    // 댓글삭제
    @DeleteMapping("/{boardNum}/{commentNum}")
    public ResponseEntity<?> deleteComment(@PathVariable Long boardNum, @PathVariable("commentNum") Long commentNum) {
        commentService.deleteComment(commentNum);
        log.info("delete");
        return new ResponseEntity<>(HttpStatus.OK);
    }//deleteComment

    // 전체 댓글보여주기
    @GetMapping("/{boardNum}/commentList")
    public List<CommentDTO> findAllComment(@PathVariable Long boardNum) {
        log.info("find");
        return commentService.findAllComment(boardNum);
    }//findAllComment

    //댓글 수
    @GetMapping("/{boardNum}/countComment")
    public int count(@PathVariable Long boardNum) {
        return commentService.countComment(boardNum);
    }
}
