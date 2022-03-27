package com.console.gmlmfao.controller;

import com.console.gmlmfao.pojo.Comments;
import com.console.gmlmfao.service.ICommentsService;
import com.github.yulichang.query.MPJQueryWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
@RequestMapping("/comments")
public class CommentsController {

    @Autowired
    private ICommentsService commentsLikedService;

    @GetMapping("/getAllComments")
    public void getComments(){
        commentsLikedService.list();
    }

    @GetMapping("/thisGameComment")
    public List<Comments> getGameComments(){
        List<Comments> comments = commentsLikedService.selectJoinList(Comments.class,
                new MPJQueryWrapper<>()
                        .select("comments")
                        .innerJoin("game g on g.gameid = t.gid")
        );
        return comments;
    }

    @PostMapping("/newComments")
    public boolean newComments(HttpServletRequest request, HttpServletResponse response){
        request.getParameter("aid");
        request.getParameter("uid");
        request.getParameter("gid");
        request.getParameter("commetnts");
        return false;
    }

}
