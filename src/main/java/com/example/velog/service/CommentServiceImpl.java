package com.example.velog.service;

import com.example.velog.domain.CommentDTO;
import com.example.velog.mapper.CommentMapper;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class CommentServiceImpl implements CommentService {

    @Autowired
    private CommentMapper commentMapper;

    // 댓글 추가
    @Override
    public void addComment(CommentDTO commentDTO) {
        commentMapper.add(commentDTO);
    }

    // 댓글 수정
    @Override
    public void editComment(CommentDTO commentDTO) {
        commentMapper.edit(commentDTO);
    }

    // 댓글 삭제
    @Override
    public void deleteComment(CommentDTO commentDTO) {
        commentMapper.delete(commentDTO);
    }

    // 댓글 조회
    @Override
    public List<CommentDTO> findAllComment() {
        return commentMapper.findAll();
    }

    @Override
    public int countComment(int boardNum) {
        return commentMapper.count(boardNum);
    }
}