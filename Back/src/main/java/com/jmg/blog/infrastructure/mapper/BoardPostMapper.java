package com.jmg.blog.infrastructure.mapper;

import com.jmg.blog.domain.board.model.BoardPost;
import com.jmg.blog.presentation.controller.board.response.BoardPostResponse;
import org.mapstruct.Mapper;

import java.time.LocalDateTime;
import java.util.Optional;

@Mapper(componentModel = "spring")
public interface BoardPostMapper {
    default BoardPostResponse toBoardPostResponse(BoardPost boardPost) {
        String content = Optional.ofNullable(boardPost.getContent()).orElse("No Content");
        Long boardPostId = Optional.ofNullable(boardPost.getId()).orElse(0L);
        String title = Optional.ofNullable(boardPost.getTitle()).orElse("No Title");
        Long view = Optional.ofNullable(boardPost.getView()).orElse(0L);
        LocalDateTime createAt = boardPost.getCreateAt();
        return new BoardPostResponse(boardPostId, title,view, createAt, null, null, content);
    }
}