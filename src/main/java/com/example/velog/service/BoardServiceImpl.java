package com.example.velog.service;

import com.example.velog.domain.BoardDTO;
import com.example.velog.domain.Criteria;
import com.example.velog.mapper.BoardMapper;
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
    public boolean writeBoard(BoardDTO boardDTO) {
        return boardMapper.writeBoard(boardDTO) == 1;
    }

    @Override
    public boolean deleteBoard(Long boardNum) {
        return boardMapper.deleteBoard(boardNum) == 1;
    }

    @Override
    public boolean updateBoard(BoardDTO boardDTO) {
        return boardMapper.updateBoard(boardDTO) == 1;
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
