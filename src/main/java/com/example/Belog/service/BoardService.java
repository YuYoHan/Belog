package com.example.Belog.service;

import com.example.Belog.domain.BoardDTO;
import com.example.Belog.domain.BoardImageDTO;
import com.example.Belog.domain.Criteria;

import java.io.IOException;
import java.util.List;

public interface BoardService {
    void writeBoard(BoardDTO boardDTO) throws IOException;

    void deleteBoard(Long boardNum);

    void updateBoard(BoardDTO boardDTO);

    List<BoardDTO> findAllBoard(Criteria criteria);

    BoardDTO findBoardByBoardNum(Long boardNum);

    List<String> findBoardImagesByBoardNum(Long boardNum);

    int getBoardCount();
}
