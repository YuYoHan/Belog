package com.example.velog.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

@Getter
@ToString
public class UserDTO {
    private Long userId;
    @NotBlank(message = "이메일은 필수 입력사항 입니다.")
    // 이메일 형식이여야 함
    @Email(message = "이메일 형식에 맞지 않습니다.")
    private String userEmail;
    @NotBlank(message = "비밀번호는 필수 입력 값입니다.")
    @Pattern(regexp = "(?=.*[0-9])(?=.*[a-zA-Z])(?=.*\\\\W)(?=\\\\S+$).{8,20}",
        message = "비밀번호는 영문 대,소문자와 숫자, 특수기호가 적어도 1개 이상씩 포함된 8자 ~ 20자의 비밀번호여야 합니다.")
    private String userPw;
    @NotBlank(message = "이름은 필수 입력사항 입니다.")
    private String userName;
    @NotBlank(message = "우편번호는 필수 입력사항 입니다.")
    private String userAddr;

    private String userAddrDetail;
    private String userAddrEtc;

    private MultipartFile userImg;

    @Builder
    public UserDTO(String userEmail, String userPw, String userName, String userAddr, String userAddrDetail, String userAddrEtc, MultipartFile userImg) {
        this.userEmail = userEmail;
        this.userPw = userPw;
        this.userName = userName;
        this.userAddr = userAddr;
        this.userAddrDetail = userAddrDetail;
        this.userAddrEtc = userAddrEtc;
        this.userImg = userImg;
    }

}
