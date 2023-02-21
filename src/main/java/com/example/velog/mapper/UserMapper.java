package com.example.velog.mapper;

import com.example.velog.domain.UserDTO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface UserMapper {
    int signUp(UserDTO userDTO);

    // mybatis는 2개 이상을 보낼 때는 dto로 묶어주던지
    // 아니면 param으로 처리
    UserDTO login(@Param("userId") String userId, @Param("userPw") String userPw);


}
