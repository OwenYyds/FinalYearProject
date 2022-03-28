package com.console.gmlmfao.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.console.gmlmfao.mapper.PostMapper;
import com.console.gmlmfao.pojo.Post;
import com.console.gmlmfao.service.IPostService;
import org.springframework.stereotype.Service;

@Service
public class PostServiceImpl extends ServiceImpl<PostMapper, Post> implements IPostService {
}
