package com.example.Belog.domain;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.format.annotation.DateTimeFormat;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;
import java.util.Date;

@Getter
@ToString
@NoArgsConstructor
public class CommentDTO {

    @Schema(description = "댓글 번호", example = "1", required = true)
    // 댓글 번호 pk
    private Long commentNum;

    @Schema(description = "게시판 번호", example = "1", required = true)
    // 게시글 번호
    private Long boardNum;

    @Schema(description = "유저 번호", example = "1", required = true)
    // 유저 fk
    @NotBlank(message = "로그인된 사용자만 댓글을 쓰실수 있습니다")
    private Long userId;

    @Schema(description = "댓글 입력", nullable = true)
    @NotBlank(message = "댓글을 입력해주세요")
    private String comment;

    @Schema(description = "댓글 작성 시간")
    private Date commentTime;

    @Builder
    public CommentDTO(Long boardNum,
                      Long userId,
                      String comment,
                      Date commentTime) {
        this.boardNum = boardNum;
        this.userId = userId;
        this.comment = comment;
        this.commentTime = commentTime;
    }

}