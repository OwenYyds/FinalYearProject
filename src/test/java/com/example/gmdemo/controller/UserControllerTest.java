package com.example.gmdemo.controller;

import com.example.gmdemo.mapper.GameMapper;
import com.example.gmdemo.mapper.UserMapper;
import com.example.gmdemo.pojo.Game;
import com.example.gmdemo.pojo.HotGame;
import com.example.gmdemo.pojo.User;
import com.example.gmdemo.service.IGameService;
import com.example.gmdemo.service.IUserService;
import com.github.yulichang.wrapper.MPJLambdaWrapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;

@SpringBootTest
public class UserControllerTest {

    @Autowired
    private IUserService userService;

    @Autowired
    private IGameService gameService;

    @Autowired
    private UserMapper userMapper;

    @Autowired
    private GameMapper gameMapper;

    @Test
    void getAllUsers() {
//        userService.list();
//        userMapper.selectById(1);

//        gameService.list();





    }
}
