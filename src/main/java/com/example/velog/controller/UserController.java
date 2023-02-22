package com.example.velog.controller;

import com.example.velog.domain.UserDTO;
import com.example.velog.service.UserService;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.Iterator;
import java.util.Map;

@Controller
@Log4j2
@AllArgsConstructor
public class UserController {

    private UserService userService;

    @GetMapping("/signUp")
    public String signUp() {
        return "/signUp";
    }

    @PostMapping("/signUp")
    public String signUp(@Validated UserDTO userDTO, Errors errors, HttpServletResponse resp, Model model) {
        // post요청시 넘어온 user 입력값에서 Validation에 걸리는 경우
        if(errors.hasErrors()) {
            // 회원 가입 실패시, 입력 데이터를 유지
            model.addAttribute("userDTO", userDTO);

            // 유효성 통과 못한 필드와 메시지를 핸들링
            // 회원가입 실패시 message 값들을 모델에 매핑해서 View로 전달
            Map<String, String> validatorResult = userService.validateHandling(errors);


            // map.keySet() -> 모든 key값을 갖고온다.
            // 그 갖고온 키로 반복문을 통해 키와 에러 메세지로 매핑
            for (String key: validatorResult.keySet()
                 ) {
                // ex) model.addAtrribute("valid_id", "아이디는 필수 입력사항 입니다.")
                model.addAttribute(key,validatorResult.get(key));
            }
            return "/signUp";
        }
        if(userService.signUp(userDTO)) {
            Cookie cookie = new Cookie("userEmail", userDTO.getUserEmail());
            // 30분
            cookie.setMaxAge(1800);
            resp.addCookie(cookie);
        }
        return "redirect:/";
    }

    // 중복체크



    @GetMapping("/login")
    public String loginForm(@CookieValue("userEmail") String userEmail, Model model) {
        if(userEmail == null) return "login";

        log.info(userEmail);
        model.addAttribute("loginEmail", userEmail);
        return "login";
    }


    @PostMapping("/login")
    public String login(String userEmail, String userPw, HttpSession session, Model model) {
        UserDTO user =  userService.login(userEmail, userPw);

        if(user != null) {
            session.setAttribute("userId", user.getUserId());
            session.setAttribute("userEmail", user.getUserEmail());
            model.addAttribute("loginEmail", session.getAttribute("userEmail"));
        }
        return "home";
    }

    @GetMapping("/logOut")
    public String logOut(HttpServletRequest req) {
        req.getSession().invalidate();
        return "redirect:/";
    }

    @GetMapping("/remove")
    public String remove() {
        return "/user/remove";
    }

    @PostMapping("/remove")
    public String remove(String userEmail, String userPw) {
        log.info("아이디 : " + userEmail);
        log.info("비밀번호 : " + userPw);

        UserDTO user = userService.remove(userEmail, userPw);
        if(user != null) {
            return "redirect:/";
        } else {
            return "/user/remove";
        }

    }


}
