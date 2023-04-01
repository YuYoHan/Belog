package com.example.Belog.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@ToString
@NoArgsConstructor
public class BoardDTO {
    private Long boardNum;
    private Long userId;
    private String boardTitle;
    // private Date writeTime;
    private String boardContents;
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
