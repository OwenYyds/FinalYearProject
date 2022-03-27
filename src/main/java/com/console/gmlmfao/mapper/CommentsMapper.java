package com.console.gmlmfao.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.console.gmlmfao.pojo.Comments;
import com.github.yulichang.base.MPJBaseMapper;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface CommentsMapper extends BaseMapper<Comments>, MPJBaseMapper<Comments> {
}
