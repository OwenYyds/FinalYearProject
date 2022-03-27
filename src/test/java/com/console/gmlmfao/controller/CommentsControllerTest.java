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
    private ICommentsService commentsService;

    @Test
    void getAlLTest(){
        commentsService.list();
    }

    @Test
    void getGameComments(){
        commentsService.selectJoinList(Comments.class,
                new MPJQueryWrapper<>()
                        .select("comments")
                        .innerJoin("game g on g.gameid = t.gid")
        );
    }

    @Test
    void add(){
        Comments comments = new Comments();
        comments.setUid(23);
        comments.setGid(321);
        comments.setComments("impressive!");

             commentsService.save(comments);

            ;

    }
}
