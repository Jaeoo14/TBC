package com.team2.tbcserver.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.team2.tbcserver.mapper.ItemMapper;
import com.team2.tbcserver.vo.ItemVO;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/item")
public class ItemController {

	@Autowired
	ItemMapper mapper;

	@GetMapping
	public List<ItemVO> fetch() {
		System.out.println(mapper.fetch());
		return mapper.fetch();
	}
	
	@GetMapping("/{id}")
	public ItemVO fetchBy(@PathVariable Long id) {
		System.out.println(id + " : " + mapper.fetchBy(id));
		return mapper.fetchBy(id);
	}
	
	@PostMapping
	public Long insert(@RequestBody ItemVO item) {
		mapper.insert(item);
		return item.getId();
	}
	
	@PutMapping("/{id}")
	public void update(@RequestBody ItemVO item, @PathVariable Long id) {
		mapper.update(item);
	}
	
	@DeleteMapping("/{id}")
	public void deleteBy(@PathVariable Long id) {
		mapper.deleteBy(id);
		System.out.println("id: " + id + " removeUser OK!");
	}

}
