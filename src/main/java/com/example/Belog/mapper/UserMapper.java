package com.example.Belog.mapper;

import com.example.Belog.domain.UserDTO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Optional;

@Mapper
public interface UserMapper {
    int signUp(UserDTO userDTO);

    // mybatis는 2개 이상을 보낼 때는 dto로 묶어주던지
    // 아니면 param으로 처리
    UserDTO login(@Param("userEmail") String userEmail, @Param("userPw") String userPw);

    UserDTO deleteUser(@Param("userEmail") String userEmail, @Param("userPw") String userPw);

    int emailCheck(String userEmail);

    List<UserDTO> getAllUser();

    Optional<UserDTO> getUser(String userEmail);

    UserDTO update(UserDTO userDTO);
}
