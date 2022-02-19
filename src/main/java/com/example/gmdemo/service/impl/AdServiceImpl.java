package com.example.gmdemo.service.impl;


import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.gmdemo.mapper.AdMapper;
import com.example.gmdemo.pojo.Ad;
import com.example.gmdemo.service.IAdService;
import org.springframework.stereotype.Service;

@Service
public class AdServiceImpl extends ServiceImpl<AdMapper, Ad> implements IAdService {
}
