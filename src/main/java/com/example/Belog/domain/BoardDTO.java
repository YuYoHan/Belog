package com.example.Belog.domain;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.web.multipart.MultipartFile;

import java.util.Date;
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

    @Schema(description = "게시글 작성 시간")
    private Date writeTime;

    @Schema(description = "게시판 본문")
    private String boardContents;

    @Schema(description = "해쉬태그", nullable = true)
    private String hashTag;

    @Schema(description = "게시글 이미지 경로")
    private List<String> boardImages;

    @Schema(description = "유저 이메일")
    private String userEmail;
    @Builder
    public BoardDTO(
            Long userId,
            String userEmail,
            Long boardNum,
            String boardTitle,
            String boardContents,
            String hashTag,
            List<String> boardImages,
            Date writeTime
    ) {
        this.userId = userId;
        this.userEmail = userEmail;
        this.boardNum = boardNum;
        this.boardTitle = boardTitle;
        this.boardContents = boardContents;
        this.hashTag = hashTag;
        this.boardImages = boardImages;
        this.writeTime = writeTime;
    }
}
