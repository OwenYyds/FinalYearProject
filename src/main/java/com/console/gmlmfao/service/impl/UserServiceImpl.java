package com.console.gmlmfao.service.impl;


import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.console.gmlmfao.mapper.UserMapper;
import com.console.gmlmfao.pojo.User;
import com.console.gmlmfao.service.IUserService;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements IUserService {


}
