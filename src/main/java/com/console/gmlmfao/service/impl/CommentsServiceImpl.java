package com.console.gmlmfao.service.impl;

import com.console.gmlmfao.mapper.CommentsMapper;
import com.console.gmlmfao.pojo.Comments;
import com.console.gmlmfao.service.ICommentsService;
import com.github.yulichang.base.MPJBaseServiceImpl;
import org.springframework.stereotype.Service;


@Service
public class CommentsServiceImpl extends MPJBaseServiceImpl<CommentsMapper, Comments> implements ICommentsService {
}
