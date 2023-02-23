package com.example.velog.service;

import com.example.velog.domain.BoardDTO;

public interface BoardService {
    boolean writeBoard(BoardDTO boardDTO);

    boolean deleteBoard(Long boardNum);
}
