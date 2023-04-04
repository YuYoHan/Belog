package com.example.Belog.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

@Getter
@ToString
@NoArgsConstructor
public class CommentDTO {

    // 댓글 번호 pk
    private Long commentNum;

    // 게시글 번호
    private Long boardNum;

    // 유저 fk
    @NotBlank(message = "로그인된 사용자만 댓글을 쓰실수 있습니다")
    private Long userId;

    @NotBlank(message = "댓글을 입력해주세요")
    private String comment;

    private LocalDateTime commentTime;

    @Builder
    public CommentDTO(Long commentNum, Long boardNum, Long userId, String comment) {
        this.commentNum = commentNum;
        this.boardNum = boardNum;
        this.userId = userId;
        this.comment = comment;
    }

}