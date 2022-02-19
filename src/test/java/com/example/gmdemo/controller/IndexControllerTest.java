package com.example.gmdemo.controller;

import com.example.gmdemo.mapper.GameMapper;
import com.example.gmdemo.pojo.Ad;
import com.example.gmdemo.pojo.Game;
import com.example.gmdemo.service.IAdService;
import com.example.gmdemo.service.IGameService;
import com.github.yulichang.query.MPJQueryWrapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;

@SpringBootTest
public class IndexControllerTest {

    @Autowired
    private GameMapper gameMapper;


    @Autowired
    private IGameService gameService;

    @Autowired
    private IAdService adService;

    @Test
    void gameTest(){
//        List<HotGame> list = hotGameMapper.selectJoinList(HotGame.class,
//                new MPJQueryWrapper<>()
////                        .selectAll(HotGame.class)
//                        .select("gameid", "cname", "gameimage")
//                        .innerJoin("game h on t.hotgameid = h.gameid"));



//        hotGameService.selectJoinList(HotGame.class,
//                new MPJQueryWrapper<>()
//                        .select("gameid", "cname", "gameimage")
//                        .innerJoin("game h on t.hotgameid = h.gameid"));



//            List<Game> list = gameService.selectJoinList(Game.class,
//                    new MPJQueryWrapper<>()
//                            .select("gameid", "cname", "gameimage")
//                            .innerJoin("hot_game h on h.hotgameid = t.gameid"));
        List<Game> hotList = new ArrayList<>();
        Game game = null;
        List<Game> list = gameService.selectJoinList(Game.class,
                new MPJQueryWrapper<>()
                        .select("gameid", "cname", "gameimage")
                        .rightJoin("hot_game h on h.hotgameid = t.gameid"));

//        for (Game hotGame : list) {
//            hotList.add(hotGame);
//        }
        System.out.println(list);


        List<Ad> list1 = adService.list();
    }


}
