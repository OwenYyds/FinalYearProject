package com.console.gmlmfao.pojo;


import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import lombok.Data;


@Data
public class Game {
    @TableId(value = "gameid",type = IdType.AUTO)
    private Integer gameid;
    private String gameimage;
    private String cname;
    private String ename;
    private Integer score;
    private String developer;
    private String date;
    private String profile;
    private String category;
    private Integer liked;
}
