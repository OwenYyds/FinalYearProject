package com.console.gmlmfao.service.impl;

import com.console.gmlmfao.mapper.GameMapper;
import com.console.gmlmfao.pojo.Game;
import com.console.gmlmfao.service.IGameService;
import com.github.yulichang.base.MPJBaseServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class GameServiceImpl extends MPJBaseServiceImpl<GameMapper, Game> implements IGameService {


//    @Autowired
//    private GameMapper gameMapper;
//
//    @Override
//    public boolean deleteGameById(Integer id) {
//        return gameMapper.deleteById(id);
//    }
}
