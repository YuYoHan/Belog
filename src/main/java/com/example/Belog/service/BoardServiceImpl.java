package com.example.Belog.service;

import com.example.Belog.domain.BoardDTO;
import com.example.Belog.domain.BoardImageDTO;
import com.example.Belog.domain.Criteria;
import com.example.Belog.mapper.BoardMapper;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class  BoardServiceImpl implements BoardService{
    private final BoardMapper boardMapper;
//    @Value("${file.dir}")
//    private String fileDir;

//    @Override
//    public void writeBoard(BoardDTO boardDTO) throws IOException{
//        List<File> imageFiles = new ArrayList<>();
//
//        for (MultipartFile image : boardDTO.getBoardImages()) {
//            String fileName = image.getOriginalFilename();
//            String filePath = fileDir + fileName;
//            File dest = new File(filePath);
//            image.transferTo(dest);
//            imageFiles.add(dest);
//        }
//
//        boardMapper.writeBoard(boardDTO);
//
//        Long lastBoardNum = boardMapper.getLastBoardNum();
//
//        boardMapper.insertBoardImage(lastBoardNum, imageFiles);
//
//        for (File file : imageFiles) {
//            file.delete();
//        }
//    }

    @Override
    public void writeBoard(BoardDTO boardDTO) throws IOException{
        List<String> boardImages = boardDTO.getBoardImages();

        boardMapper.writeBoard(boardDTO);

        Long lastBoardNum = boardMapper.getLastBoardNum();

        boardMapper.insertBoardImage(lastBoardNum, boardImages);
    }

    @Override
    public void deleteBoard(Long boardNum) {
        boardMapper.deleteBoardImage(boardNum);
        boardMapper.deleteBoard(boardNum);
    }

    @Override
    public void updateBoard(BoardDTO boardDTO) {
        boardMapper.updateBoard(boardDTO);
    }

    @Override
    public List<BoardDTO> findAllBoard(Criteria criteria) {
        List<BoardDTO> boardList = Collections.emptyList();

        int boardCount = boardMapper.getBoardCount();

        if(boardCount > 0) {
            boardList = boardMapper.findAllBoard(criteria);
        }

        return boardList;
    }

    @Override
    public BoardDTO findBoardByBoardNum(Long boardNum) {

        int boardCount = boardMapper.getBoardCountByBoardNum(boardNum);
        BoardDTO boardDTO = boardMapper.findBoardByBoardNum(boardNum);

        List<String> boardImages = findBoardImagesByBoardNum(boardNum);

        boardDTO = boardDTO.builder()
                .writeTime(boardDTO.getWriteTime())
                .boardNum(boardNum)
                .userId(boardDTO.getUserId())
                .boardImages(boardImages)
                .boardTitle(boardDTO.getBoardTitle())
                .boardContents(boardDTO.getBoardContents())
                .hashTag(boardDTO.getHashTag())
                .build();

        if(boardCount != 1) {
            log.error("[ERROR] : 게시글 없음");
        }
        return boardDTO;
    }

    @Override
    public List<String> findBoardImagesByBoardNum(Long boardNum) {
        List<String> boardImages = new ArrayList<>();
        List<BoardImageDTO> boardImagesList = boardMapper.findBoardImagesByBoardNum(boardNum);

        for (BoardImageDTO boardImage : boardImagesList) {
            // log.info(boardImage.getBoardImg());
            boardImages.add(boardImage.getBoardImg());
        }

        return boardImages;
    }

    @Override
    public int getBoardCount() {
        return boardMapper.getBoardCount();
    }
}
