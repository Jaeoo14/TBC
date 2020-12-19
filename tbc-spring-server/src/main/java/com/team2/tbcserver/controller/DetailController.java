package com.team2.tbcserver.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.team2.tbcserver.mapper.DetailMapper;
import com.team2.tbcserver.vo.DetailVO;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/detail")
public class DetailController {

	@Autowired
	DetailMapper mapper;
	
	@GetMapping
	public List<DetailVO> fetch() {
		System.out.println(mapper.fetch());
		return mapper.fetch();
	}
	
	@GetMapping("/{id}")
	public DetailVO fetchBy(@PathVariable Long id) {
		System.out.println(id + " : " + mapper.fetchBy(id));
		return mapper.fetchBy(id);
	}
	
	@PostMapping
	public Long insert(@RequestBody DetailVO item) {
		mapper.insert(item);
		return item.getId();
	}
	
	@PutMapping("/{id}")
	public void update(@RequestBody DetailVO item, @PathVariable Long id) {
		mapper.update(item);
	}
	
}
