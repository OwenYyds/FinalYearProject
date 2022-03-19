package com.console.gmlmfao.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.console.gmlmfao.mapper.GameMapper;
import com.console.gmlmfao.mapper.UserMapper;
import com.console.gmlmfao.pojo.User;
import com.console.gmlmfao.service.IGameService;
import com.console.gmlmfao.service.IUserService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

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
