package com.console.gmlmfao.controller;

import com.console.gmlmfao.service.ICommentsLikedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/comments")
public class CommentsController {

    @Autowired
    private ICommentsLikedService commentsLikedService;

    @GetMapping("/getComments")
    public void getComments(){
        commentsLikedService.list();
    }

}
