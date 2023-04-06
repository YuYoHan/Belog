package com.example.Belog.domain;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

@Getter
@ToString
@NoArgsConstructor
public class UserDTO {

    @Schema(description = "유저 번호", example = "1", required = true)
    private Long userId;

    @Schema(description = "이메일", example = "abc@gmail.com", required = true)
    @NotBlank(message = "이메일은 필수 입력사항 입니다.")
    // 이메일 형식이여야 함
    @Pattern(regexp = "^(?:\\w+\\.?)*\\w+@(?:\\w+\\.)+\\w+$", message = "이메일 형식이 올바르지 않습니다.")
    @Email(message = "이메일 형식에 맞지 않습니다.")
    private String userEmail;

    @Schema(description = "비밀번호", required = true)
    @NotBlank(message = "비밀번호는 필수 입력 값입니다.")
//    @Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\\\d)(?=.*[~!@#$%^&*()+|=])[A-Za-z\\\\d~!@#$%^&*()+|=]{8,16}$\\n",
//            message = "비밀번호는 영문 대,소문자와 숫자, 특수기호가 적어도 1개 이상씩 포함된 8자 ~ 16자의 비밀번호여야 합니다.")
    private String userPw;

    @Schema(description = "이름", required = true)
    @NotBlank(message = "이름은 필수 입력사항 입니다.")
    private String userName;

    @Schema(description = "주소", required = true)
    @NotBlank(message = "주소는 필수 입력사항 입니다.")
    private String userAddr;

    @Schema(description = "상세 주소", required = true)
    @NotBlank
    private  String userAddrDetail;

    @Schema(description = "그 외 주소", required = true)
    @NotBlank
    private String userAddrEtc;


    @Builder
    public UserDTO(
            String userEmail,
            String userPw,
            String userName,
            String userAddr,
            String userAddrDetail,
            String userAddrEtc
            ) {
        this.userEmail = userEmail;
        this.userPw = userPw;
        this.userName = userName;
        this.userAddr = userAddr;
        this.userAddrDetail = userAddrDetail;
        this.userAddrEtc = userAddrEtc;
    }

}
