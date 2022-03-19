package com.console.gmlmfao.service.impl;


import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.console.gmlmfao.mapper.CarouselMapper;
import com.console.gmlmfao.pojo.Carousel;
import com.console.gmlmfao.service.ICarouselService;
import org.springframework.stereotype.Service;

@Service
public class CarouselServiceImpl extends ServiceImpl<CarouselMapper, Carousel> implements ICarouselService {
}
