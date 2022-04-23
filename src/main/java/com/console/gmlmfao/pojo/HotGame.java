package com.console.gmlmfao.pojo;


import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import lombok.Data;

@Data
public class HotGame {
    @TableId(value = "hotgameid",type = IdType.AUTO)
    private Integer hotgameid;
}
