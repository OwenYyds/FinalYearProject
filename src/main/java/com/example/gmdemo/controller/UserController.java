package com.example.gmdemo.controller;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.example.gmdemo.pojo.User;
import com.example.gmdemo.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;


@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private IUserService userService;

    //登录
    @PostMapping("login")
    @ResponseBody
    public String findUserByUsernameAndPassword(HttpServletRequest req) {
        String username = req.getParameter("username");
        String password = req.getParameter("password");

        QueryWrapper<User> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("username", username);
        queryWrapper.eq("password", password);


        User user = new User();
        user.setUsername(username);
        user.setPassword(password);

        HttpSession session = req.getSession();
        if (username == "") {
            return "用户名不能为空";
        } else if (password == "") {
            return "密码不能为空";
        } else if (userService.count(queryWrapper) < 1) {
            //登录失败
            return "用户名或密码错误";
        } else {
            //登录成功
            User LoginUser = userService.getOne(queryWrapper);
            session.setAttribute("user",LoginUser);
            return "登录成功";
        }
    }

    //注册
    @PostMapping("register")
    @ResponseBody
    public String insertUsr(User user, HttpServletRequest request) {
        String Cusername = request.getParameter("Cusername");
        String Cpassword = request.getParameter("Cpassword");
        String Cpassword2 = request.getParameter("Cpassword2");
        boolean flag = false;
        String result1 = Pusername(Cusername);
        String result2 = Ppassword(Cpassword);
        System.out.println(result1);
        if (Cusername == "") {
            return "用户名不能为空";
        } else if (Cpassword == "") {
            return "密码不能为空";
        } else if (result1 != "") {
            return result1;
        } else if (result2 != "") {
            return result2;
        } else if (!Cpassword.equals(Cpassword2)) {
            return "两次输入的密码不一致";
        } else {
            user.setUsername(Cusername);
            user.setPassword(Cpassword);
            flag = userService.save(user);
            if (flag) {
                return "注册成功";

            } else {
                return "注册失败";
            }
        }
    }

    //注册用户名校验规则
    public String Pusername(String username) {
        boolean bool = false;
        if (username.length() >= 6 && username.length() <= 10) {
            for (int i = 0; i < username.length(); i++) {

                char ch = username.charAt(i);
                //获取每一个字符
                if (ch >= '0' && ch <= '9') {
                    //判断字符是否为0到9的数字
                    bool = true;

                } else {
                    bool = false;
                    return "用户名需要0~9的数字组成,长度为6~10位";
                }
            }
            if (bool == true) {
                return "";
            }
        }
        return "用户名长度需要为长度为6~10位";
    }

    //注册密码校验规则
    public String Ppassword(String password) {
        //用户名格式正确，判断密码长度
        if (password.length() >= 6 && password.length() <= 12) {
            return "";
        } else {
            return "密码长度需为6~12位";
        }
    }

    //获取用户信息
    @GetMapping("getUser")
    @ResponseBody
    public User getUserInfo(HttpServletRequest request) {
        HttpSession session = request.getSession();
        User user = (User) session.getAttribute("user");
        System.out.println(user);
        return user;
    }

    //用户自行修改信息
    @PostMapping("edit")
    @ResponseBody
    public String updateUser(HttpServletRequest request) {
        HttpSession session = request.getSession();
        User user = (User) session.getAttribute("user");

        String nickname = request.getParameter("nickname");
        String gender = request.getParameter("gender");
        String birthday = request.getParameter("birthday");
        String profile = request.getParameter("profile");
        String head = request.getParameter("head");

        if (nickname != null) {
            user.setNickname(nickname);
            user.setGender(gender);
            user.setBirthday(birthday);
            user.setProfile(profile);
            userService.updateById(user);
        } else {
            user.setHead(head);
            userService.updateById(user);
        }
        return "修改成功";
    }
}
