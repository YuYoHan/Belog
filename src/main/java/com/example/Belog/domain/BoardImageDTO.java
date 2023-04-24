package com.example.Belog.domain;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@ToString
@NoArgsConstructor
public class BoardImageDTO {
    @Schema(description = "게시글 번호")
    private Long boardNum;
    @Schema(description = "게시글 이미지 번호")
    private Long boardImgNum;
    @Schema(description = "게시글 정보")
    private String boardImg;

    @Builder
    public BoardImageDTO(Long boardNum, Long boardImgNum, String boardImg) {
        this.boardNum = boardNum;
        this.boardImgNum = boardImgNum;
        this.boardImg = boardImg;
    }
}
