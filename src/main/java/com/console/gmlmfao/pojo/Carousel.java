package com.console.gmlmfao.pojo;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import lombok.Data;

@Data
public class Carousel {
    @TableId(value = "gameid",type = IdType.AUTO)
    private Integer gameid;
    private String adtext;
    private String adimage;
}
