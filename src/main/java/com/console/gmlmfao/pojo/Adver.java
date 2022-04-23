package com.console.gmlmfao.pojo;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import lombok.Data;

@Data
public class Adver {
    @TableId(value = "id",type = IdType.AUTO)
    private Integer id;
    private String adimage;
    private String adtext;
    private String link;
}
