package com.console.gmlmfao.controller;


import com.console.gmlmfao.pojo.Feed;
import com.console.gmlmfao.pojo.News;
import com.console.gmlmfao.service.IFeedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/feed")
public class FeedController {

    @Autowired
    private IFeedService feedService    ;


    @GetMapping("getAllFeed")
    public List<Feed> getAll(){
        return feedService.list();
    }

    @PostMapping("addFeed")
    public boolean addNews(@RequestBody Feed feed){
        return feedService.save(feed);
    }
}
