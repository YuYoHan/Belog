package com.example.velog.service;

import com.example.velog.domain.UserDTO;
import com.example.velog.mapper.UserMapper;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService{

    private UserMapper userMapper;

    @Override
    public boolean signUp(UserDTO userDTO) {
        // 있으면 true
        return userMapper.signUp(userDTO) == 1;
    }
}
