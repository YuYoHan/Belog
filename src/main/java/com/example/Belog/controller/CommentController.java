package com.example.Belog.controller;

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
@RequestMapping("/board/{boradNum}")
public class CommentController {

    private CommentService commentService;

    // 댓글작성
    @PostMapping("/comment")
    public void addComment(@RequestBody CommentDTO commentDTO) {
        commentService.addComment(commentDTO);
        log.info("Add success");
    }// addComment

    // 댓글수정
    @PutMapping("/{commentNum}")
    public CommentDTO editComment(@PathVariable("commentNum") Long commentNum, @RequestBody CommentDTO commentDTO) {
        commentService.editComment(commentDTO);
        log.info("edit");
        return commentDTO;
    }//editComment

    // 댓글삭제
    @DeleteMapping("/{commentNum}")
    public CommentDTO deleteComment(@PathVariable("commentNum") Long commentNum, @RequestBody CommentDTO commentDTO) {
        commentService.deleteComment(commentDTO);
        log.info("delete");
        return commentDTO;
    }//deleteComment

    // 전체 댓글보여주기
    @GetMapping("/commentList")
    public List<CommentDTO> findAllComment(@PathVariable("boardNum") Long boardNum) {
        List<CommentDTO> commentList = commentService.findAllComment(boardNum);
        log.info("find");
        return commentList;
    }//findAllComment

    //댓글 수
    @GetMapping("/countComment")
    public int count(@PathVariable("boardNum") int boardNum) {
        return commentService.countComment(boardNum);
    }
}
