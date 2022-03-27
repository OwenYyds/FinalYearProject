package com.console.gmlmfao.controller;

import com.console.gmlmfao.pojo.Comments;
import com.console.gmlmfao.service.ICommentsService;
import com.github.yulichang.query.MPJQueryWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.yaml.snakeyaml.events.Event;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
@RequestMapping("/comments")
public class CommentsController {

    @Autowired
    private ICommentsService commentsService;

    @GetMapping("/getAllComments")
    public void getComments() {
        commentsService.list();
    }

    @GetMapping("/getCommentOfThisGame")
    public List<Comments> getGameComments(HttpServletRequest request) {
        String gameid = request.getParameter("gameid");
        List<Comments> comments = commentsService.selectJoinList(Comments.class,
                new MPJQueryWrapper<>()
                        .select("cid","gid","uid","comments")
                        .innerJoin("game g on g.gameid = t.gid where gameid = " + gameid )
        );
        return comments;
    }

    @PostMapping("/addComments")
    public boolean newComments(HttpServletRequest request, HttpServletResponse response) {
        Integer uid = Integer.valueOf(request.getParameter("uid"));
        Integer gid = Integer.valueOf(request.getParameter("gid"));
        String commetnts = request.getParameter("commetnts");

        Comments comments = new Comments();
        comments.setUid(uid);
        comments.setGid(gid);
        comments.setComments(commetnts);

        if (uid != null || gid != null) {
            return commentsService.save(comments);
        } else {
            return false;
        }
    }
}
