package com.console.gmlmfao.controller;


import com.console.gmlmfao.pojo.Adver;
import com.console.gmlmfao.service.IAdverService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/adver")
public class AdverController {

    @Autowired
    private IAdverService adverService;

    @RequestMapping("getAll")
    public List<Adver> getAll(){
        return adverService.list();
    }
}
