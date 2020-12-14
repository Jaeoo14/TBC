package com.team2.tbcserver.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.team2.tbcserver.mapper.DiscoverMapper;
import com.team2.tbcserver.mapper.ProjectMapper;
import com.team2.tbcserver.vo.ProjectVO;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/Discover")
public class DiscoverController {
	
	@Autowired
	DiscoverMapper Dmapper;
	
	@GetMapping
	public List<ProjectVO> fetch() {
		System.out.println(Dmapper.projectList());
		return Dmapper.projectList();
	}

}
