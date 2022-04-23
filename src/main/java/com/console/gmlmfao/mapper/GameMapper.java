package com.console.gmlmfao.mapper;

import com.console.gmlmfao.pojo.Game;
import com.github.yulichang.base.MPJBaseMapper;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;


@Mapper
public interface GameMapper extends MPJBaseMapper<Game> {

//    @Select("DELETE FROM game WHERE gameid = #{gameId}")
//    boolean deleteById(Integer gameId);
}
