package com.example.velog.domain;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.web.multipart.MultipartFile;

@Getter
@Setter
@ToString
public class UserDTO {
    private Long userId;
    private String userEmail;
    private String userPw;
    private String userName;
    private String userAddr;
}
