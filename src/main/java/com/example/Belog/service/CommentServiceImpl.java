package com.example.Belog.service;

import com.example.Belog.domain.CommentDTO;
import com.example.Belog.mapper.CommentMapper;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class CommentServiceImpl implements CommentService {

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
    public void deleteComment(Long commentNum) { commentMapper.delete(commentNum);  }

    // 댓글 조회
    @Override
    public List<CommentDTO> findAllComment(Long boardNum) {
        return commentMapper.findAll(boardNum);
    }

    @Override
    public int countComment(Long boardNum) {
        return commentMapper.count(boardNum);
    }


}