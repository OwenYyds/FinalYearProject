package com.example.gmdemo.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
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
        User user = new User();
        String username = "2352335";
        user.setGender("男");
        user.setNickname("7777777777888888888888888");
        user.setProfile("keep figjhting");

        QueryWrapper<User> objectQueryWrapper = new QueryWrapper<>();
        objectQueryWrapper.eq("username", username);
        userService.getOne(objectQueryWrapper);
        userService.update(user,objectQueryWrapper);
//        userService.updateById(user);


    }
}
