package com.console.gmlmfao.pojo;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import lombok.Data;

import java.util.List;


@Data
public class User {
    @TableId(value = "userid",type = IdType.AUTO)
    private Integer userid;
    private String username;
    private String password;
    private String nickname;
    private String head;
    private String gender;
    private String profile;
    private String loved;
    private String birthday;
    private String token;
    private Integer collect;
}
