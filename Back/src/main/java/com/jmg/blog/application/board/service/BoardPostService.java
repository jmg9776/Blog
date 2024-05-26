package com.jmg.blog.application.board.service;

import com.jmg.blog.domain.board.model.BoardPost;
import com.jmg.blog.domain.board.repository.BoardPostRepository;
import com.jmg.blog.domain.board.repository.BoardPostRepositoryCustom;
import com.jmg.blog.presentation.controller.board.response.BoardPostResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class BoardPostService {
    private final BoardPostRepositoryCustom boardPostRepositoryCustom;
    private final BoardPostRepository boardPostRepository;

    public PageImpl<BoardPostResponse> findBoardPostListByBoardName(String boardName, Pageable pageable) {
        return boardPostRepositoryCustom.findBoardPostListByBoardName(boardName, pageable);
    }

    public BoardPost findBoardPostByPostId(Long postId) {
        BoardPost boardPost = boardPostRepository.findById(postId).orElseThrow();
        boardPost.updateView();
        return boardPostRepository.findById(postId).orElseThrow();
    }
}
