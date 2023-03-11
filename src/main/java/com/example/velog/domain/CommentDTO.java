package com.example.velog.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

@Getter
@ToString
public class CommentDTO {

    private Long commentNum;

    @NotBlank(message = "로그인된 사용자만 댓글을 쓰실수 있습니다")
    private Long userId;

    private String userEmail;

    private Long boardNum;

    @NotBlank(message = "댓글을 입력해주세요")
    private String comment;

    private LocalDateTime commentTime;

    @Builder
    public CommentDTO(Long commentNum, Long userId, String userEmail, Long boardNum, String comment) {
        this.commentNum = commentNum;
        this.userId = userId;
        this.userEmail = userEmail;
        this.boardNum = boardNum;
        this.comment = comment;
    }
}