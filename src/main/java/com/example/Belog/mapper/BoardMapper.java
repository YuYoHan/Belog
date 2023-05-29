package com.example.Belog.mapper;

import com.example.Belog.domain.BoardDTO;
import com.example.Belog.domain.BoardImageDTO;
import com.example.Belog.domain.Criteria;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface BoardMapper {
    void writeBoard(BoardDTO boardDTO);
    
    void deleteBoard(Long boardNum);

    void deleteBoardImage(Long boardNum);

    void updateBoard(BoardDTO boardDTO);

    List<BoardDTO> findAllBoard(Criteria criteria);

    List<BoardImageDTO> findBoardImagesByBoardNum(Long boardNum);

    int getBoardCount();

    BoardDTO findBoardByBoardNum(Long boardNum);

    int getBoardCountByBoardNum(Long boardNum);

    List<BoardDTO> findBoardByUserId(Long userId);

    Long findUserIdByUserEmail(String userEmail);

    Long getLastBoardNum();

    void insertBoardImage(@Param("boardNum") Long boardNum, @Param("boardImages")List<String> boardImages);

    String findUserEmailByUserId(Long userId);
}
