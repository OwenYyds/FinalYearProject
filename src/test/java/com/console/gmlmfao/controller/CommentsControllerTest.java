package com.console.gmlmfao.controller;


import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
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
                        .innerJoin("game g on g.gameid = t.gid where g.gameid = 1")
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



    @Test
    void getPage(){
        IPage page =new Page(1,5);
        commentsService.page(page,null);

    }
}
