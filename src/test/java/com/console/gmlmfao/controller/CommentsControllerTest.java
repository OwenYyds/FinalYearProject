package com.console.gmlmfao.controller;


import com.console.gmlmfao.pojo.Comments;
import com.console.gmlmfao.service.ICommentsService;
import com.github.yulichang.query.MPJQueryWrapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class CommentsControllerTest {

    @Autowired
    private ICommentsService commentsLikedService;

    @Test
    void getAlLTest(){
        commentsLikedService.list();
    }

    @Test
    void getGameComments(){
        commentsLikedService.selectJoinList(Comments.class,
                new MPJQueryWrapper<>()
                        .select("comments")
                        .innerJoin("game g on g.gameid = t.gid")
        );
    }
}
