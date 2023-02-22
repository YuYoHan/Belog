package com.example.velog.mapper;

import com.example.velog.domain.BoardDTO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface BoardMapper {
    int writeBoard(BoardDTO boardDTO);
}
