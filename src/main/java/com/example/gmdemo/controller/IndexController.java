package com.example.gmdemo.controller;


import com.example.gmdemo.pojo.Ad;
import com.example.gmdemo.pojo.Game;
import com.example.gmdemo.service.IAdService;
import com.example.gmdemo.service.IGameService;
import com.github.yulichang.query.MPJQueryWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/index")
public class IndexController {

    @Autowired
    private IGameService gameService;
    @Autowired
    private IAdService adService;

    @GetMapping("hotgames")
    @ResponseBody
    public List<Game> getHotGame(){
//        List<Game> hotList = new ArrayList<>();
//        Game game = null;
        List<Game> list = gameService.selectJoinList(Game.class,
                new MPJQueryWrapper<>()
                        .select("gameid", "cname", "gameimage")
                        .innerJoin("hot_game h on h.hotgameid = t.gameid"));

//        for (Game hotGame : list) {
//            hotList.add(hotGame);
//        }
    return list ;
    }


    @GetMapping("ad")
    @ResponseBody
    public List<Ad> getAd(){
        return adService.list();
    }
}
