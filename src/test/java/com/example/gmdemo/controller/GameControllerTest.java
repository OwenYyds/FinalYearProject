package com.example.gmdemo.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.example.gmdemo.pojo.Game;
import com.example.gmdemo.service.IGameService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@SpringBootTest
public class GameControllerTest {

    @Autowired
    private IGameService gameService;

    @Test
    void gameTest() {

        String category = "休闲";
        String searchText = "";

        QueryWrapper<Game> queryWrapper = new QueryWrapper<>();
        QueryWrapper<Game> category1 = queryWrapper.eq("category", category);
        QueryWrapper<Game> queryWrapper1 = new QueryWrapper<>();
        QueryWrapper<Game> searchText1 = queryWrapper1.eq("searchText", searchText);


        if (category != null) {
            gameService.list(category1);
        } else if (searchText != "") {
             gameService.list(searchText1);
        }

        System.out.println("```````````````````````````````");

        gameService.list();
    }
}
