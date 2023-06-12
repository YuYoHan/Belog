package com.example.Belog.mapper;

import com.example.Belog.domain.UserDTO;
import lombok.extern.slf4j.Slf4j;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@Slf4j
class UserMapperTest {

    @Autowired
    private UserMapper userMapper;

    @Test
    @DisplayName("회원가입 테스트")
    void signUp() {
        String email = "zxzz46@naver.com";
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

        if(userMapper.signUp(p1) == 1) {
            log.info(p1.getUserEmail());
            log.info(p1.getUserPw());
            log.info(p1.getUserName());
            log.info(p1.getUserAddr());
            log.info(p1.getUserAddrDetail());
            log.info(p1.getUserAddrEtc());

            Assertions.assertThat(p1.getUserEmail()).isEqualTo(email);
            Assertions.assertThat(p1.getUserPw()).isEqualTo(password);
            Assertions.assertThat(p1.getUserName()).isEqualTo(name);
            Assertions.assertThat(p1.getUserAddr()).isEqualTo(addr);
            Assertions.assertThat(p1.getUserAddrDetail()).isEqualTo(addrDetail);
            Assertions.assertThat(p1.getUserAddrEtc()).isEqualTo(addrEtc);
        }
    }

    @Test
    @DisplayName("로그인 테스트")
    public void  login() {
        UserDTO p2 = UserDTO.builder()
                .userEmail("zxzz46@naver.com")
                .userPw("zxzz12")
                .build();

        UserDTO loginUser = userMapper.login(p2.getUserEmail(), p2.getUserPw());

        log.info(p2.getUserEmail());
        log.info(p2.getUserPw());
        Assertions.assertThat(p2.getUserEmail()).isEqualTo(loginUser.getUserEmail());
        Assertions.assertThat(p2.getUserPw()).isEqualTo(loginUser.getUserPw());
    }

    @Test
    @DisplayName("이메일 중복 체크 테스트")
    void emailCheck() {
        UserDTO p3 = UserDTO.builder()
                .userEmail("zxzz48@naver.com")
                .build();

        int userCheck = userMapper.emailCheck(p3.getUserEmail());

        if(userCheck == 1) {
            log.error("아이디 중복입니다.");
            Assertions.assertThat(p3.getUserEmail()).isEqualTo("zxzz45@naver.com");
        } else {
            log.info("아이디를 사용할 수 있습니다.");
        }
    }

    @Test
    @DisplayName("회원 조회 테스트")
    void findByUser() {
        String email = "zxzz46@naver.com";

        UserDTO user = userMapper.getUser(email);
        log.info(String.valueOf(user));

        Assertions.assertThat(user.getUserEmail()).isEqualTo(email);
    }


    @Test
    @DisplayName("업데이트 테스트")
    void updateUser() {
        Long userId = 1L;
        String userEmail = "zxzz45@naver.com";
        String password = "Dbekdms147!";
        String name = "테스터";
        String addr = "서울시 xxxx xxx";
        String addrDetail = "xxxx";
        String addrEtc = "2층";

        UserDTO user = UserDTO.builder()
                .userId(userId)
                .userPw(password)
                .userName(name)
                .userAddr(addr)
                .userAddrDetail(addrDetail)
                .userAddrEtc(addrEtc)
                .build();

        userMapper.update(user);
        UserDTO userCheck = userMapper.getUser(userEmail);

        Assertions.assertThat(user.getUserPw()).isEqualTo(password);
        Assertions.assertThat(user.getUserName()).isEqualTo(name);
        Assertions.assertThat(user.getUserAddr()).isEqualTo(addr);
        Assertions.assertThat(user.getUserAddrDetail()).isEqualTo(addrDetail);
        Assertions.assertThat(user.getUserAddrEtc()).isEqualTo(addrEtc);

        log.info(String.valueOf(userCheck));
    }

    @Test
    @DisplayName("삭제 테스트")
    void deleteUser() {
        Long userId = 1L;
        userMapper.deleteUser(userId);
        String userEmail = "zxzz45@naver.com";
        UserDTO userCheck = userMapper.getUser(userEmail);
        log.info(String.valueOf(userCheck));
    }

}