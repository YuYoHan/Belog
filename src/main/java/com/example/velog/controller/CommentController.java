package com.example.velog.controller;

import com.example.velog.domain.CommentDTO;
import com.example.velog.service.CommentService;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;

@Controller
@Log4j2
@RequestMapping("/comment")
public class CommentController {

    @Autowired
    private CommentService commentService;

    @GetMapping("/hello")
    public String hello() {
        log.info("hello");
        return "redirect:/";
    }

    // 댓글 작성
    @PostMapping("/add")
    public String addComment(@ModelAttribute CommentDTO commentDTO, HttpServletRequest request, @RequestParam(value = "comment")String comment) {
        log.info("add Comment");
        HttpSession session = request.getSession();
        // userId를 세션에서 값 얻어오기
        Long userId = (Long) session.getAttribute("userId");

        //boardNum을 얻어오는 값  client에서 처리해야하는건가 board에서 처리하는건가
        Long boardNum = Long.parseLong(request.getParameter("boardNum"));

        // 댓글작성자로 출력될 값
        //String userEmail = (String) session.getAttribute("userEmail");
        //String[] userEmailName= userEmail.split("@"); //userEmailName[0]

        try {
            // userid가 없는 경우 댓글작성 못함
            if (userId != null) {
                commentDTO = CommentDTO.builder()
                        .userId(userId)
                        .boardNum(boardNum)    //임시값
                        .comment(comment)
                        .build();

                commentService.addComment(commentDTO);
                log.info("Add succes");
            }
        }catch (Exception e){
            e.printStackTrace();
        }

        return "redirect:/";
    }//addComment

    // 댓글 수정
    @PutMapping("/edit")
    public String editComment(CommentDTO commentDTO) {
        commentService.editComment(commentDTO);
        log.info("edit");
        return "redirect:/";
    }

    // 댓글 삭제, 삭제되면 내용과 아이디, 삭제되었습니다 내용 띄우기
    @DeleteMapping("/delete")
    public String deleteComment(CommentDTO commentDTO){
        commentService.deleteComment(commentDTO);
        log.info("delete");
        return "redirect:/";
    }

    @GetMapping("/findAll")
    public List<CommentDTO> findAllComment(){
        log.info("find");
        return commentService.findAllComment();
    }

    @GetMapping("/count")
    public int count(int boardNum){
        return commentService.countComment(boardNum);
    }
}
