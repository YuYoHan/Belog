package com.example.Belog.controller;

import com.example.Belog.domain.UserDTO;
import com.example.Belog.service.UserService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@SpringBootTest(classes = UserController.class)
@AutoConfigureMockMvc
class UserControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserService userService;

    @Test
    @DisplayName("회원가입 테스트")
    void testSignUp() throws Exception {
        String email = "zxzz49@naver.com";
        String password = "zxzz12";
        String name = "테스터";
        String addr = "서울시 xxxx xxx";
        String addrDetail = "xxxx";
        String addrEtc = "2층";

        UserDTO p1 = UserDTO.builder()
                .userEmail(email)
                .userPw(password)
                .userName(name)
                .userAddr(addr)
                .userAddrDetail(addrDetail)
                .userAddrEtc(addrEtc)
                .build();

        mockMvc.perform(MockMvcRequestBuilders.post("/v1/user/").
                        param("email", email)
                        .param("password", password)
                        .param("name", name)
                        .param("addr", addr)
                        .param("addrDetail", addrDetail)
                        .param("addrEtc", addrEtc)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.email").value(p1.getUserEmail()))
                .andExpect(MockMvcResultMatchers.jsonPath("$.password").value(p1.getUserPw()))
                .andExpect(MockMvcResultMatchers.jsonPath("$.name").value(p1.getUserName()))
                .andExpect(MockMvcResultMatchers.jsonPath("$.addr").value(p1.getUserAddr()))
                .andExpect(MockMvcResultMatchers.jsonPath("$.addrDetail").value(p1.getUserAddrDetail()))
                .andExpect(MockMvcResultMatchers.jsonPath("$.addrEtc").value(p1.getUserAddrEtc()))
                .andDo(print())
                .andReturn();





    }

//    @Test
//    @DisplayName("로그인 폼 테스트")
//    void loginForm() throws Exception {
//        mockMvc.perform(MockMvcRequestBuilders.get("/login"))
//                .andExpect(status().isOk())
//                .andDo(print())
//                .andReturn();
//    }
//
//    @Test
//    @DisplayName("로그인 테스트")
//    void login() throws Exception {
//        mockMvc.perform(MockMvcRequestBuilders.post("/login")
//                        .param("email", "zxzz45@navcer.com")
//                        .param("password", "Dbekdms147!")
//                        .contentType(MediaType.APPLICATION_JSON))
//                .andExpect(status().isOk())
//                .andExpect(MockMvcResultMatchers.jsonPath("$.email").value("zxzz45@naver.com"))
//                .andExpect(MockMvcResultMatchers.jsonPath("$.password").value("Dbekdms147!"))
//                .andDo(print())
//                .andReturn();
//    }
//
//    @Test
//    @DisplayName("로그아웃 테스트")
//    void logOut() throws Exception {
//        mockMvc.perform(MockMvcRequestBuilders.post("/logOut"))
//                .andExpect(redirectedUrl("/"))
//                .andExpect(status().isOk())
//                .andExpect(unauthen);
//
//    }
//
//    @Test
//    @DisplayName("회원탈퇴 폼 테스트")
//    void remove() throws Exception {
//        mockMvc.perform(MockMvcRequestBuilders.get("/remove"))
//                .andExpect(status().isOk())
//                .andDo(print())
//                .andReturn();
//    }
//
//    @Test
//    @DisplayName("회원탈퇴 테스트")
//    void testRemove() throws Exception {
//
//    }
}