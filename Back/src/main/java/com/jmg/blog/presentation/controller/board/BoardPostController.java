package com.jmg.blog.presentation.controller.board;

import com.jmg.blog.application.board.service.BoardPostService;
import com.jmg.blog.domain.board.model.BoardPost;
import com.jmg.blog.infrastructure.mapper.BoardPostMapper;
import com.jmg.blog.presentation.controller.board.response.BoardPostResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/public/board/post")
public class BoardPostController {
    private final BoardPostService boardPostService;
    private final BoardPostMapper boardPostMapper;

    @GetMapping(value = {"/{boardName}", "/"})
    public ResponseEntity<PageImpl<BoardPostResponse>> getBoardInfoAllByCategory(@PathVariable(required = false) String boardName, Pageable pageable) {
        if (boardName.equals("All")) boardName = null;
        PageImpl<BoardPostResponse> boardCategoryInfoResponseList = boardPostService.findBoardPostListByBoardName(boardName, pageable);
        return ResponseEntity.ok().body(boardCategoryInfoResponseList);
    }

    @GetMapping("/view/{postId}")
    public ResponseEntity<BoardPostResponse> getBoardPost(@PathVariable Long postId) {
        BoardPost boardPost =  boardPostService.findBoardPostByPostId(postId);

        return ResponseEntity.ok(boardPostMapper.toBoardPostResponse(boardPost));
    }
}
