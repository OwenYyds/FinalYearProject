package com.console.gmlmfao.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.console.gmlmfao.pojo.Game;
import com.console.gmlmfao.service.IGameService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class GameControllerTest {

    @Autowired
    private IGameService gameService;

    @Test
    void gameTest(int a) {

//        String category = "休闲";
//        String searchText = "";
//
//        QueryWrapper<Game> queryWrapper = new QueryWrapper<>();
//        QueryWrapper<Game> category1 = queryWrapper.eq("category", category);
//        QueryWrapper<Game> queryWrapper1 = new QueryWrapper<>();
//        QueryWrapper<Game> searchText1 = queryWrapper1.eq("searchText", searchText);
//
//
//        if (category != null) {
//            gameService.list(category1);
//        } else if (searchText != "") {
//             gameService.list(searchText1);
//        }
//
//        System.out.println("```````````````````````````````");
//
//        gameService.list();

        System.out.println(a);
    }

    @Test
    void ttt() {
        Game game = new Game();
        game.setGameid(1);
        game.setLiked(22);
        gameService.updateById(game);
    }

    @Test
    void ttt1(){
        IPage page = new Page(2,5);

        gameService.page(page);
    }

}
