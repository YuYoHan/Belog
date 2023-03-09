package com.example.velog.mapper;

import com.example.velog.domain.BoardDTO;
import com.example.velog.domain.Criteria;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

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
