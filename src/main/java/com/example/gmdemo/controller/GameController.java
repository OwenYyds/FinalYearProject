package com.example.gmdemo.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.example.gmdemo.pojo.Game;
import com.example.gmdemo.service.IGameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
@RequestMapping("games")
public class GameController {

    @Autowired
    private IGameService gameService;

    @GetMapping("getAll")
    @ResponseBody
    public List<Game> getAllGames() {
        return gameService.list();
    }

    @PostMapping("search")
    @ResponseBody
    public List<Game> searchByCondition(HttpServletRequest request, HttpServletResponse response) {

        String category = request.getParameter("category");
        String searchText = request.getParameter("search");

        QueryWrapper<Game> queryWrapper1 = new QueryWrapper<>();
        QueryWrapper<Game> category1 = queryWrapper1.eq("category", category);

        QueryWrapper<Game> queryWrapper2 = new QueryWrapper<>();
        QueryWrapper<Game> searchText1 = queryWrapper2.eq("cname", searchText);

        if (category != null) {
            return gameService.list(category1);
        } else if (searchText != "") {
            return gameService.list(searchText1);
        }
        return null;
    }

    @PostMapping("addGame")
    @ResponseBody
    public String addGame(HttpServletRequest request, HttpServletResponse response){
        Integer gameid = Integer.valueOf(request.getParameter("gameID1"));
        String gameimage = request.getParameter("gameImage");
        String cname = request.getParameter("cname");
        String ename = request.getParameter("ename");
        String category = request.getParameter("category");
        Integer score = Integer.valueOf(request.getParameter("score"));
        String developer = request.getParameter("developer");
        String date = request.getParameter("date");
        String profile = request.getParameter("profile");
        String deleteGameID = request.getParameter("deleteGameID");

        Game game = new Game();
        game.setGameid(gameid);
        game.setGameimage(gameimage);
        game.setCategory(category);
        game.setCname(cname);
        game.setEname(ename);
        game.setDate(date);
        game.setScore(score);
        game.setDeveloper(developer);
        game.setProfile(profile);

        if (deleteGameID==null){
            gameService.save(game);
            return "added one game";
        }else {
            gameService.removeById(deleteGameID);
        }

        return "Done";

    }
}
