package com.example.Belog.controller;

import com.example.Belog.service.UserService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.hamcrest.core.Is.is;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(UserController.class)
@ExtendWith(SpringExtension.class)
class UserControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserService userService;

    @Test
    @DisplayName("회원가입폼 테스트")
    void signUp() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/signUp"))
                .andExpect(status().isOk())
                .andDo(print())
                .andReturn();
    }

    @Test
    @DisplayName("회원가입 테스트")
    void testSignUp() throws Exception {
        String email = "zxzz45@naver.com";
        String password = "Dbekdms147!";
        String name = "테스터";
        String addr = "서울시 xxxx xxx";
        String addrDetail = "xxxx";
        String addrEtc = "2층";

        mockMvc.perform(MockMvcRequestBuilders.post("/signUp").
                        param("email", email)
                        .param("password", password)
                        .param("name", name)
                        .param("addr", addr)
                        .param("addrDetail", addrDetail)
                        .param("addrEtc", addrEtc))
                .andExpect(status().isOk())
                .andDo(print())
                .andReturn();

    }

    @Test
    @DisplayName("로그인 폼 테스트")
    void loginForm() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/login"))
                .andExpect(status().isOk())
                .andDo(print())
                .andReturn();
    }

    @Test
    @DisplayName("로그인 테스트")
    void login() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.post("/login")
                        .param("email", "zxzz45@navcer.com")
                        .param("password", "Dbekdms147!"))
                .andExpect(status().isOk())
                .andDo(print())
                .andReturn();
    }

    @Test
    @DisplayName("로그아웃 테스트")
    void logOut() throws Exception {

    }

    @Test
    @DisplayName("회원탈퇴 폼 테스트")
    void remove() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/remove"))
                .andExpect(status().isOk())
                .andDo(print())
                .andReturn();
    }

    @Test
    @DisplayName("회원탈퇴 테스트")
    void testRemove() throws Exception {

    }
}