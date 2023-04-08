package com.example.Belog.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@ToString
@NoArgsConstructor
public class BoardImageDTO {
    private Long boardNum;
    private Long boardImgNum;
    private String boardImg;

    @Builder
    public BoardImageDTO(Long boardNum, Long boardImgNum, String boardImg) {
        this.boardNum = boardNum;
        this.boardImgNum = boardImgNum;
        this.boardImg = boardImg;
    }
}
