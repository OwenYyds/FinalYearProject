package com.console.gmlmfao.config;

import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

//设置登陆拦截器 只要继承HandlerInterceptor 则为拦截器
public class FunctionHandlerInterceptor implements HandlerInterceptor {

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        //登陆之后 应该有用户的session
        Object loginUser = request.getSession().getAttribute("userwho");

        if (loginUser!=null){
            return true;
        }else {
            request.setAttribute("msg","没有权限,请先登陆");
            request.getRequestDispatcher("/index.html").forward(request,response);
            return false;
        }

    }
}
