package com.example.Belog.domain;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@ToString
@NoArgsConstructor
public class BoardDTO {

    @Schema(description = "게시판 번호", example = "1", required = true)
    private Long boardNum;

    @Schema(description = "게시판을 작성한 유저번호", example = "1", required = true)
    private Long userId;

    @Schema(description = "게시판 제목", required = true)
    private String boardTitle;


    // private Date writeTime;
    @Schema(description = "게시판 본문")
    private String boardContents;

    @Schema(description = "해쉬태그", nullable = true)
    private String hashTag;

    @Builder
    public BoardDTO(
            Long boardNum,
            Long userId,
            String boardTitle,
            // Date writeTime,
            String boardContents,
            String hashTag
    ) {
        this.boardNum = boardNum;
        this.userId = userId;
        this.boardTitle = boardTitle;
        // this.writeTime = writeTime;
        this.boardContents = boardContents;
        this.hashTag = hashTag;
    }
}
