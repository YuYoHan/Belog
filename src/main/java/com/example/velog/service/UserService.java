package com.example.velog.service;

import com.example.velog.domain.UserDTO;

public interface UserService {
    boolean signUp(UserDTO userDTO);
}
