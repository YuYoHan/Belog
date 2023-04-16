package com.example.Belog.service;

import com.example.Belog.domain.UserDTO;
import com.example.Belog.mapper.UserMapper;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.validation.Errors;
import org.springframework.validation.FieldError;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService{

    private UserMapper userMapper;

    @Override
    public boolean signUp(UserDTO userDTO) {
        // 있으면 true
        return userMapper.signUp(userDTO) == 1;
    }

    @Override
    public Map<String, String> validateHandling(Errors errors) {
        Map<String, String> validatorResult = new HashMap<>();
        // 유효성 검사에 실패한 필드 목록을 가져옵니다.
        for (FieldError error: errors.getFieldErrors()
             ) {
            // 유효성 검사에 실패한 필드명을 가져옵니다.
            String validKeyName = String.format("valid_%s", error.getField());
            // 유효성 검사에 실패한 필드에 정의된 메시지를 가져옵니다.
            validatorResult.put(validKeyName, error.getDefaultMessage());
        }
        return  validatorResult;
    }

    @Override
    public UserDTO login(String userId, String userPw) {
        UserDTO user = userMapper.login(userId, userPw);
        return user;
    }

    @Override
    public List<UserDTO> getAllUser() {
        return userMapper.getAllUser();
    }

    @Override
    public UserDTO getUser(String userEmail) {
        return userMapper.getUser(userEmail);
    }

    @Override
    public void update(UserDTO userDTO) {
         userMapper.update(userDTO);
    }

    @Override
    public void delete(Long userId) {
        userMapper.deleteUser(userId);
    }

    @Override
    public int emailCheck(String userEmail) {
        return userMapper.emailCheck(userEmail);
    }


}
