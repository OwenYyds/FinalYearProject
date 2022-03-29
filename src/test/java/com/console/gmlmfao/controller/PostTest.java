package com.console.gmlmfao.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.console.gmlmfao.pojo.Post;
import com.console.gmlmfao.service.IPostService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class PostTest {
    @Autowired
    private IPostService postService;


    @Test
    void up(){
        Post post = new Post();
        post.setTitle("6666");
        post.setContent("7777");
        QueryWrapper<Post> aid = new QueryWrapper<Post>().eq("aid", 1);
        postService.update(post,aid);
    }
}
