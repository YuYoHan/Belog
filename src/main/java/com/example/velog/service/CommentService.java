package com.example.velog.service;

import com.example.velog.domain.CommentDTO;
import java.util.List;

public interface CommentService {

    // 댓글 추가
    void addComment(CommentDTO commentDTO);

    // 댓글 수정
    void editComment(CommentDTO commentDTO);

    // 댓글 삭제
    void deleteComment(CommentDTO commentDTO);

    // 댓글 목록
    List<CommentDTO> findAllComment(Long boardNum);

    // 댓글 개수
    int countComment(int boardNum);
}
