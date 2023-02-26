package com.example.velog.service;

import com.example.velog.domain.BoardDTO;

import java.util.List;

public interface BoardService {
    boolean writeBoard(BoardDTO boardDTO);

    boolean deleteBoard(Long boardNum);

    boolean updateBoard(BoardDTO boardDTO);

    List<BoardDTO> findAllBoard();

    BoardDTO findBoardByBoardNum(Long boardNum);
}
