package com.console.gmlmfao.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.console.gmlmfao.pojo.CommentsLiked;
import com.github.yulichang.base.MPJBaseMapper;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface CommentsLikedMapper extends BaseMapper<CommentsLiked>, MPJBaseMapper<CommentsLiked> {
}
