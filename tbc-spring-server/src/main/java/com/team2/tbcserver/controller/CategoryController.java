package com.team2.tbcserver.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
//import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.team2.tbcserver.mapper.CategoryMapper;
import com.team2.tbcserver.vo.CategoryVO;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/category")
public class CategoryController {

	@Autowired
	CategoryMapper mapper;

	@GetMapping
	public List<CategoryVO> fetch() {
		System.out.println(mapper.fetch());
		return mapper.fetch();
	}

	@GetMapping("/{id}")
	public CategoryVO fetchBy(@PathVariable Long id) {
		System.out.println(id + " : " + mapper.fetchBy(id));
		return mapper.fetchBy(id);
	}
	
}
