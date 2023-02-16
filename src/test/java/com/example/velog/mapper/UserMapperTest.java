package com.example.velog.mapper;

import com.example.velog.domain.UserDTO;
import org.apache.commons.logging.Log;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.transaction.annotation.Transactional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
// H2 데이터베이스 사용하기 위해서 설정
class UserMapperTest {

    @Autowired
    private UserMapper userMapper;

    @Test
    @DisplayName("회원가입 테스트")
    @Transactional
    void signUp() {
        String email = "zxzz45@naver.com";
        String password = "Dbekdms147!";
        String name = "테스터";
        String addr = "서울시 xxxx xxx";

        UserDTO p1 = UserDTO.builder()
                .userEmail(email)
                .userPw(password)
                .userName(name)
                .userAddr(addr)
                .build();

        Assertions.assertThat(p1.getUserEmail()).isEqualTo(email);
        Assertions.assertThat(p1.getUserPw()).isEqualTo(password);
        Assertions.assertThat(p1.getUserName()).isEqualTo(name);
        Assertions.assertThat(p1.getUserAddr()).isEqualTo(addr);

    }
}