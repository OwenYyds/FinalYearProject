package com.console.gmlmfao.controller;

import com.console.gmlmfao.pojo.Comments;
import com.console.gmlmfao.service.ICommentsService;
import com.console.gmlmfao.service.IUserService;
import com.github.yulichang.query.MPJQueryWrapper;
import com.github.yulichang.wrapper.MPJLambdaWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/comments")
public class CommentsController {

    @Autowired
    private ICommentsService commentsService;

    @Autowired
    private IUserService userService;

    @GetMapping("/getAllComments")
    public void getComments() {
        commentsService.list();
    }

    @GetMapping("/getCommentOfThisGame")
    public List getGameComments(HttpServletRequest request) {
        String gameid = request.getParameter("gameid");
        List<Comments> comments = commentsService.selectJoinList(Comments.class,
                new MPJQueryWrapper<>()
                        .select("cid", "gid", "uid", "comments", "time")
                        .leftJoin("game g on g.gameid = t.gid where gameid = " + gameid)
        );
        if (comments.isEmpty()) {
            /*System.out.println(comments.size() + "kong");
            ArrayList<Comments> comments1 = new ArrayList<>();
            System.out.println(comments1);
            return comments1;*/
            return null;
        } else {
            System.out.println(comments.size() + "youshuju");
            return comments;
        }
    }

    @PostMapping("/addComments")
    public boolean newComments(HttpServletRequest request, HttpServletResponse response) {
        Integer uid = Integer.valueOf(request.getParameter("uid"));
        Integer gid = Integer.valueOf(request.getParameter("gid"));
        String getComments = request.getParameter("comments");
        String time = request.getParameter("time");

        Comments comments = new Comments();
        comments.setUid(uid);
        comments.setGid(gid);
        comments.setTime(time);
        comments.setComments(getComments);

        if (uid != null || gid != null) {
            return commentsService.save(comments);
        } else {
            return false;
        }
    }
}
