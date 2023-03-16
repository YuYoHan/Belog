package com.example.Belog.mapper;

import com.example.Belog.domain.BoardDTO;
import com.example.Belog.domain.Criteria;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface BoardMapper {
    int writeBoard(BoardDTO boardDTO);
    
    int deleteBoard(Long boardNum);

    int updateBoard(BoardDTO boardDTO);

    List<BoardDTO> findAllBoard(Criteria criteria);

    int getBoardCount();

    BoardDTO findBoardByBoardNum(Long boardNum);

    int getBoardCountByBoardNum(Long boardNum);
}
