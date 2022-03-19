package com.console.gmlmfao.controller;

import com.console.gmlmfao.mapper.GameMapper;
import com.console.gmlmfao.pojo.Carousel;
import com.console.gmlmfao.pojo.Game;
import com.console.gmlmfao.service.ICarouselService;
import com.console.gmlmfao.service.IGameService;
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
    private ICarouselService adService;

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


        List<Carousel> list1 = adService.list();
    }


}
