package com.example.Belog.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "통신 API",description = "연결 테스트용")
@RestController
public class HomeController {

    @Tag(name = "통신 API")
    @Operation(summary = "연결 확인 API", description = "제대로 연결이 되어 있는지 확인하는 API")
    @GetMapping("/")
    public String home() {
        return "home";
    }
}
