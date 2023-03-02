package com.example.velog.mapper;

import com.example.velog.domain.CommentDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CommentMapper {

    // 댓글 추가
    void add(CommentDTO commentDTO);

    // 댓글 수정
    void edit(CommentDTO commentDTO);

    // 댓글 삭제 ?
    void delete(CommentDTO commentDTO);

    // 댓글 목록
    List<CommentDTO> findAll();

    // 댓글 개수
    int count(int boardNum);
}