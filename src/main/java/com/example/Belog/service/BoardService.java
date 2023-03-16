package com.example.Belog.service;

import com.example.Belog.domain.BoardDTO;
import com.example.Belog.domain.Criteria;

import java.util.List;

public interface BoardService {
    boolean writeBoard(BoardDTO boardDTO);

    boolean deleteBoard(Long boardNum);

    boolean updateBoard(BoardDTO boardDTO);

    List<BoardDTO> findAllBoard(Criteria criteria);

    BoardDTO findBoardByBoardNum(Long boardNum);

    int getBoardCount();
}
