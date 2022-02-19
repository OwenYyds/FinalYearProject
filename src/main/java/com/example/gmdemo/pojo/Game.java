package com.example.gmdemo.pojo;


import lombok.Data;

@Data
public class Game {
    private Integer gameid;
    private String gameimage;
    private String cname;
    private String ename;
    private Integer score;
    private String developer;
    private String date;
    private String profile;
    private String category;
}
