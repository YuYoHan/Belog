package com.example.velog.service;

import com.example.velog.domain.BoardDTO;
import com.example.velog.mapper.BoardMapper;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class BoardServiceImpl implements BoardService{
    private BoardMapper boardMapper;

    @Override
    public boolean writeBoard(BoardDTO boardDTO) {
        return boardMapper.writeBoard(boardDTO) == 1;
    }

    @Override
    public boolean deleteBoard(Long boardNum) {
        return boardMapper.deleteBoard(boardNum) == 1;
    }
}
