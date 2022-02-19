package com.example.gmdemo.service.impl;


import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.gmdemo.mapper.UserMapper;
import com.example.gmdemo.pojo.User;
import com.example.gmdemo.service.IUserService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements IUserService {


}
