package com.example.Belog.domain;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

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
    private List<MultipartFile> boardImages;

    @Builder
    public BoardDTO(
            String boardTitle,
            String boardContents,
            String hashTag,
            List<MultipartFile> boardImages
    ) {
        this.boardTitle = boardTitle;
        this.boardContents = boardContents;
        this.hashTag = hashTag;
        this.boardImages = boardImages;
    }
}
