package com.console.gmlmfao.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.console.gmlmfao.mapper.FeedMapper;
import com.console.gmlmfao.pojo.Feed;
import com.console.gmlmfao.service.IFeedService;
import org.springframework.stereotype.Service;


@Service
public class FeedServiceImpl extends ServiceImpl<FeedMapper, Feed> implements IFeedService {
}
