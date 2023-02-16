package com.example.velog.controller;

import com.example.velog.domain.UserDTO;
import com.example.velog.service.UserService;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

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
    public String signUp(UserDTO userDTO, HttpServletResponse resp) {
        if(userService.signUp(userDTO)) {
            Cookie cookie = new Cookie("userEmail", userDTO.getUserEmail());
            // 30분
            cookie.setMaxAge(1800);
            resp.addCookie(cookie);
        }
        return "redirect:/";
    }




}
