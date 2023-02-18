package com.example.velog.service;

import com.example.velog.domain.UserDTO;
import org.springframework.validation.Errors;

import java.util.Map;

public interface UserService {
    boolean signUp(UserDTO userDTO);

    Map<String,String> validateHandling(Errors errors);

    UserDTO login(String userId, String userPw);
}
