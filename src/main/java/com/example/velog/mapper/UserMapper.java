package com.example.velog.mapper;

import com.example.velog.domain.UserDTO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper {
    int signUp(UserDTO userDTO);
}
