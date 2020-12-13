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

import com.team2.tbcserver.mapper.ProjectMapper;
import com.team2.tbcserver.vo.ProjectVO;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/project")
public class ProjectController {

	@Autowired
	ProjectMapper mapper;

	@GetMapping
	public List<ProjectVO> fetch() {
		System.out.println(mapper.fetch());
		return mapper.fetch();
	}
	
	@GetMapping("/{id}")
	public ProjectVO fetchBy(@PathVariable Long id) {
		System.out.println(id + " : " + mapper.fetchBy(id));
		return mapper.fetchBy(id);
	}
	
	@PostMapping
	public Long insert(@RequestBody ProjectVO project) {
		System.out.println("insert");
		System.out.println(project);
		mapper.insert(project);
		System.out.println(project);
		return project.getId();
	}
	
	@PutMapping("/{id}")
	public void update(@RequestBody ProjectVO project, @PathVariable Long id) {
		mapper.update(project);
	}
	
	@DeleteMapping("/{id}")
	public void deleteBy(@PathVariable Long id) {
		mapper.deleteBy(id);
		System.out.println("id: " + id + " removeUser OK!");
	}

}
