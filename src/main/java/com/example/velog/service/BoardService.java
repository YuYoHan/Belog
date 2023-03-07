package com.example.velog.service;

import com.example.velog.domain.BoardDTO;
import com.example.velog.domain.Criteria;

import java.util.List;

public interface BoardService {
    boolean writeBoard(BoardDTO boardDTO);

    boolean deleteBoard(Long boardNum);

    boolean updateBoard(BoardDTO boardDTO);

    List<BoardDTO> findAllBoard(Criteria criteria);

    BoardDTO findBoardByBoardNum(Long boardNum);
}
