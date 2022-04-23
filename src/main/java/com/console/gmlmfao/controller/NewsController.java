package com.console.gmlmfao.controller;


import com.console.gmlmfao.pojo.Feed;
import com.console.gmlmfao.service.IFeedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/news")
public class NewsController {

    @Autowired
    private IFeedService newsService;


    @GetMapping("getAllNews")
    public List<Feed> getAll(){
        return newsService.list();
    }
}
