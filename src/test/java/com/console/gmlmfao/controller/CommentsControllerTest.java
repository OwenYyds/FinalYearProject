package com.console.gmlmfao.controller;


import com.console.gmlmfao.service.ICommentsLikedService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class CommentsControllerTest {

    @Autowired
    private ICommentsLikedService commentsLikedService;

    @Test
    void getAll(){
        commentsLikedService.list();
    }
}
