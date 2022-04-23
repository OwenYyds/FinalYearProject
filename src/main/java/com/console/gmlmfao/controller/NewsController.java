package com.console.gmlmfao.controller;


import com.console.gmlmfao.pojo.News;
import com.console.gmlmfao.service.INewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/news")
public class NewsController {

    @Autowired
    private INewsService newsService;


    @GetMapping("getAllNews")
    public List<News> getAll(){
        return newsService.list();
    }
}