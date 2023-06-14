package com.example.Belog.service;

import com.example.Belog.domain.BoardDTO;
import com.example.Belog.domain.BoardImageDTO;
import com.example.Belog.domain.Criteria;
import com.example.Belog.mapper.BoardMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class  BoardServiceImpl implements BoardService{
    private final BoardMapper boardMapper;

    @Override
    public void writeBoard(BoardDTO boardDTO) throws IOException{
        List<String> boardImages = boardDTO.getBoardImages();

        boardMapper.writeBoard(boardDTO);

        if(boardImages.size() != 0) {
            Long lastBoardNum = boardMapper.getLastBoardNum();

            boardMapper.insertBoardImage(lastBoardNum, boardImages);
        }
    }

    @Override
    public void deleteBoard(Long boardNum) {
        boardMapper.deleteBoardImage(boardNum);
        boardMapper.deleteBoard(boardNum);
    }

    @Override
    public void updateBoard(BoardDTO boardDTO) {
        boardMapper.updateBoard(boardDTO);

        Long boardNum =  boardDTO.getBoardNum();
        boardMapper.deleteBoardImage(boardNum);

        if(boardDTO.getBoardImages().size() != 0) {
            List<String> boardImages = boardDTO.getBoardImages();
            boardMapper.insertBoardImage(boardNum, boardImages);
        }
    }

    @Override
    public List<BoardDTO> findAllBoard(Criteria criteria) {
        List<BoardDTO> boardList = new ArrayList<>();
        List<BoardDTO> returnBoardList = new ArrayList<>();

        int boardCount = boardMapper.getBoardCount();

        if(boardCount > 0) {
            boardList = boardMapper.findAllBoard(criteria);
        }

        for (BoardDTO boardDTO : boardList) {
            Long boardNum = boardDTO.getBoardNum();
            List<String> boardImages = findBoardImagesByBoardNum(boardNum);
            Long userId = boardDTO.getUserId();
            String userEmail = boardMapper.findUserEmailByUserId(userId);

            BoardDTO returnBoardDTO = boardDTO.builder()
                    .writeTime(boardDTO.getWriteTime())
                    .boardNum(boardNum)
                    .userId(userId)
                    .userEmail(userEmail)
                    .boardImages(boardImages)
                    .boardTitle(boardDTO.getBoardTitle())
                    .boardContents(boardDTO.getBoardContents())
                    .hashTag(boardDTO.getHashTag())
                    .build();

            returnBoardList.add(returnBoardDTO);
        }

        log.info("returnBoardList", returnBoardList);

        return returnBoardList;
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
    public List<BoardDTO> findBoardByUserId(Long userId) {
        List<BoardDTO> boardListByUserId = boardMapper.findBoardByUserId(userId);

        return boardListByUserId;
    }

    @Override
    public Long findUserIdByUserEmail(String userEmail) {
        Long userId = boardMapper.findUserIdByUserEmail(userEmail);

        return userId;
    }

    @Override
    public int getBoardCount() {
        return boardMapper.getBoardCount();
    }
}
