package com.console.gmlmfao.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.console.gmlmfao.mapper.NewsMapper;
import com.console.gmlmfao.pojo.News;
import com.console.gmlmfao.service.INewsService;
import org.springframework.stereotype.Service;


@Service
public class NewsServiceImpl extends ServiceImpl<NewsMapper, News> implements INewsService {
}
