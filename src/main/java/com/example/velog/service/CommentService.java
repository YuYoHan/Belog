package com.example.velog.service;

import com.example.velog.domain.CommentDTO;

import java.util.List;

public interface CommentService {
    // 트랜잭션 https://velog.io/@kdhyo/JavaTransactional-Annotation-%EC%95%8C%EA%B3%A0-%EC%93%B0%EC%9E%90-26her30h
    // 댓글 추가
    //@Transactional
    void addComment(CommentDTO commentDTO);

    // 댓글 수정
    void editComment(CommentDTO commentDTO);

    // 댓글 삭제
    void deleteComment(CommentDTO commentDTO);

    // 댓글 목록
    List<CommentDTO> findAllComment();

    // 댓글 개수
    public int countComment(int boardNum);
}
