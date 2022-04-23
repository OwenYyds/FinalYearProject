package com.console.gmlmfao.pojo;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import lombok.Data;

@Data
public class Comments {
    @TableId(value = "cid",type = IdType.AUTO)
    private Integer cid;
    private Integer uid;
    private Integer gid;
    private String comments;
    private String time;
}
