package com.example.gmdemo;

import com.example.gmdemo.service.IUserService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class GMdemoApplicationTests {

    @Autowired
    private IUserService userService;
    @Test
    void contextLoads() {
        userService.getById(1);
    }

}
