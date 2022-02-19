package com.example.gmdemo.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.gmdemo.mapper.GameMapper;
import com.example.gmdemo.pojo.Game;
import com.example.gmdemo.service.IGameService;
import com.github.yulichang.base.MPJBaseServiceImpl;
import org.springframework.stereotype.Service;


@Service
public class GameServiceImpl extends MPJBaseServiceImpl<GameMapper, Game> implements IGameService {
}
