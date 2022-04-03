package com.console.gmlmfao.controller;


import com.console.gmlmfao.pojo.Post;
import com.console.gmlmfao.service.IPostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
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
    public boolean newPost(HttpServletRequest request){
        Integer uid = Integer.valueOf(request.getParameter("uid"));
        String time = request.getParameter("time");
        String content = request.getParameter("content");
        String title = request.getParameter("title");

        Post post = new Post();
        post.setTitle(title);
        post.setContent(content);
        post.setTime(time);
        post.setUid(uid);
        return postService.save(post);
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
