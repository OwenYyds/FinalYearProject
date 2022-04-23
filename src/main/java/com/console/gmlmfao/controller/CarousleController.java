package com.console.gmlmfao.controller;


import com.console.gmlmfao.pojo.Carousel;
import com.console.gmlmfao.service.ICarouselService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("banner")
public class CarousleController {

    @Autowired
    private ICarouselService carouselService;

    @GetMapping("getAll")
    public List<Carousel> getAll(){
        return carouselService.list();
    }
}
