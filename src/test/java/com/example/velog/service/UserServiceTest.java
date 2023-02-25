package com.example.velog.service;

import com.example.velog.domain.UserDTO;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;

@SpringBootTest
// H2 데이터베이스 사용하기 위해서 설정
@TestPropertySource(locations = "classpath:application-test.properties")
class UserServiceTest {

    @Test
    @DisplayName("회원가입 테스트")
    void signUp() {
        String email = "zxzz45@naver.com";
        String password = "Dbekdms147!";
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

        Assertions.assertThat(p1.getUserEmail()).isEqualTo(email);
        Assertions.assertThat(p1.getUserPw()).isEqualTo(password);
        Assertions.assertThat(p1.getUserName()).isEqualTo(name);
        Assertions.assertThat(p1.getUserAddr()).isEqualTo(addr);

    }

    @Test
    @DisplayName("로그인 테스트")
    public void  login() {
        UserDTO p2 = UserDTO.builder()
                .userEmail("zxzz45@naver.com")
                .userPw("Dbekdms147!")
                .build();

        Assertions.assertThat(p2.getUserEmail()).isEqualTo("zxzz45@naver.com");
        Assertions.assertThat(p2.getUserPw()).isEqualTo("Dbekdms147!");

    }
}