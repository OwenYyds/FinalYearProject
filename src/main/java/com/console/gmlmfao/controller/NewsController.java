package com.console.gmlmfao.controller;


import com.console.gmlmfao.pojo.News;
import com.console.gmlmfao.service.INewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/news")
public class NewsController {

    @Autowired
    private INewsService newsService;


    @GetMapping("getAll")
    public List<News> getAll(){
        return newsService.list();
    }

    @PostMapping("addNews")
    public boolean addNews(@RequestBody News news){
        return newsService.save(news);
    }
}
