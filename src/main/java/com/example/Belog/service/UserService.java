package com.example.Belog.service;

import com.example.Belog.domain.UserDTO;
import org.springframework.validation.Errors;

import java.util.List;
import java.util.Map;

public interface UserService {
    boolean signUp(UserDTO userDTO);

    // 유효성 검사
    // controller에서도 가능하지만
    // 가독성을 위해서 service에서 구현
    Map<String,String> validateHandling(Errors errors);

    UserDTO login(String userId, String userPw);

    int emailCheck(String userEmail);

    List<UserDTO> getAllUser();

    UserDTO getUser(String userEmail);


    UserDTO update(UserDTO userDTO);

    void delete(String userEmail, String userPw);
}
