package com.example.velog.service;

import com.example.velog.domain.UserDTO;
import org.springframework.validation.Errors;

import java.util.Map;

public interface UserService {
    boolean signUp(UserDTO userDTO);

    // 유효성 검사
    // controller에서도 가능하지만
    // 가독성을 위해서 service에서 구현
    Map<String,String> validateHandling(Errors errors);

    UserDTO login(String userId, String userPw);

    UserDTO remove(String userEmail, String userPw);

    int emailCheck(String userEmail);
}
