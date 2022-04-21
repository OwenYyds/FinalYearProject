package com.console.gmlmfao.pojo;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import lombok.Data;

@Data
public class Post {
    @TableId(value = "aid",type = IdType.AUTO)
    private Integer aid;
    private String title;
    private String content;
    private String time;
    private Integer uid;
    private Integer liked;
}
