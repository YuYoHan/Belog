package com.example.velog.controller;

import com.example.velog.domain.UserDTO;
import com.example.velog.service.UserService;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
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
        if(errors.hasErrors()) {
            // 회원 가입 실패시, 입력 데이터를 유지
            model.addAttribute("userDTO", userDTO);

            // 유효성 통과 못한 필드와 메시지를 핸들링
            Map<String, String> validatorResult = userService.validateHandling(errors);
            for (String key: validatorResult.keySet()
                 ) {
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




}
