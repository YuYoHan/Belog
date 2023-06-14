package com.example.Belog.mapper;

import com.example.Belog.domain.BoardDTO;
import com.example.Belog.domain.BoardImageDTO;
import com.example.Belog.domain.Criteria;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface BoardMapper {
    // 게시글 작성
    void writeBoard(BoardDTO boardDTO);

    // 게시글 삭제
    void deleteBoard(Long boardNum);

    // 이미지 삭제
    void deleteBoardImage(Long boardNum);
    // 게시글 수정
    void updateBoard(BoardDTO boardDTO);

    // Criteria에서 정해준 갯수에 맞는 게시글 보여줌
    List<BoardDTO> findAllBoard(Criteria criteria);

    // 이미지 찾기
    List<BoardImageDTO> findBoardImagesByBoardNum(Long boardNum);

    // 게시글 전체 갯수(total) 가져오기 위한 것
    int getBoardCount();

    // 게시글 찾기
    BoardDTO findBoardByBoardNum(Long boardNum);

    int getBoardCountByBoardNum(Long boardNum);

    List<BoardDTO> findBoardByUserId(Long userId);

    Long findUserIdByUserEmail(String userEmail);

    // 마지막 게시글 번호 가져옴
    Long getLastBoardNum();

    // 이미지 넣기
    void insertBoardImage(@Param("boardNum") Long boardNum, @Param("boardImages")List<String> boardImages);

    String findUserEmailByUserId(Long userId);
}
