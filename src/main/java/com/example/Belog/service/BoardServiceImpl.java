package com.example.Belog.service;

import com.example.Belog.domain.BoardDTO;
import com.example.Belog.domain.Criteria;
import com.example.Belog.mapper.BoardMapper;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
@AllArgsConstructor
@Slf4j
public class  BoardServiceImpl implements BoardService{
    private BoardMapper boardMapper;

    @Override
    public void writeBoard(BoardDTO boardDTO) {
        boardMapper.writeBoard(boardDTO);
    }

    @Override
    public void deleteBoard(Long boardNum) {
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

        if(boardCount != 1) {
            log.error("[ERROR] : 게시글 없음");
        }
        return boardMapper.findBoardByBoardNum(boardNum);
    }

    @Override
    public int getBoardCount() {
        return boardMapper.getBoardCount();
    }
}
