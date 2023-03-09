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
    @NotBlank(message = "로그인된 사용자만 로그인가능")
    private Long userId;
    @NotBlank
    private Long boardNum;
    @NotBlank(message = "댓글을 입력해주세요")
    // length?
    private String comment;
    private LocalDateTime commentTime;

    @Builder
    public CommentDTO(
            Long userId,
            Long boardNum,
            String comment
    ) {
        this.userId = userId;
        this.boardNum = boardNum;
        this.comment = comment;
    }
}