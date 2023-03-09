package com.example.velog.controller;

import com.example.velog.domain.CommentDTO;
import com.example.velog.service.CommentService;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@Log4j2
@AllArgsConstructor
public class CommentController {

    private CommentService commentService;

    // 댓글 작성
    @PostMapping("/comment/add")    //?
    public String addComment(HttpServletRequest request) {
        log.info("add Comment");

        // userId 세션에서 값 얻어오기
        HttpSession session = request.getSession();
        Long userId = (Long) session.getAttribute("userId");

        if (userId != null) {
            //boardNum을 얻어오는 값
            Long boardNum = Long.parseLong(request.getParameter("boardNum"));
            String comment = request.getParameter("comment");

            try {
                if (!comment.equals("") && !comment.isEmpty()) {


                    CommentDTO commentDTO = CommentDTO.builder()
                            .userId(userId)
                            .boardNum(boardNum)
                            .comment(comment)
                            .build();

                    commentService.addComment(commentDTO);
                }
                log.info("Add success");
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        return "redirect:/board/{boardNum}";
    }// addComment

    // 댓글 수정
    @PutMapping("/comment/edit")
    public String editComment(CommentDTO commentDTO, HttpServletRequest request, Model model) {
        // userId를 세션에서 값 얻어오기
        HttpSession session = request.getSession();
        Long userId = (Long) session.getAttribute("userId");
        Long commentNum = Long.parseLong(request.getParameter("commentNum"));
        Long boardNum = Long.parseLong(request.getParameter("boardNum"));

        model.addAttribute("commentNum", commentNum);
        model.addAttribute("boardNum", boardNum);


        commentService.editComment(commentDTO);
        log.info("edit");
        return "redirect:/";
    }

    // 댓글 삭제, 삭제되면 삭제되었습니다 내용 띄우기
    @DeleteMapping("/comment/delete")
    public String deleteComment(CommentDTO commentDTO) {
        commentService.deleteComment(commentDTO);
        log.info("delete");
        return "redirect:/";
    }

    @GetMapping("/comment/{boardnum}")
    public String findAllComment(HttpServletRequest request, Model model) {
        log.info("find");

        //boardNum을 얻어오는 값
        Long boardNum = Long.parseLong(request.getParameter("boardNum"));

        List<CommentDTO> commentList = commentService.findAllComment(boardNum);
        model.addAttribute("commentList", commentList);

        return "redirect:/"; //?
    }

    @GetMapping("/comment/count")
    public int count(int boardNum) {
        return commentService.countComment(boardNum);
    }
}
