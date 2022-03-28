package com.console.gmlmfao.controller;


import com.console.gmlmfao.pojo.Post;
import com.console.gmlmfao.service.IPostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/post")
public class PostController {

    @Autowired
    private IPostService postService;

    @GetMapping("/getAllPost")
    public List<Post> getAlLPost(){
       return postService.list();
    }

    @PostMapping("/newPost")
    public boolean newPost(){
        return false;
    }

    @PostMapping("/removePost")
    public boolean removePostByAid(){
        return false;
    }

    @PostMapping("/userRemovePost")
    public boolean removePostByUid(){
        return false;
    }
}
