package com.team2.tbcserver.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.web.servlet.error.ErrorMvcAutoConfiguration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.team2.tbcserver.mapper.DiscoverMapper;
import com.team2.tbcserver.vo.ProjectVO;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/discover")
public class DiscoverController {
	
	@Autowired
	DiscoverMapper Dmapper;
	
	@GetMapping
	public List<ProjectVO> projectList() {
		System.out.println("프로젝트 리스트" + Dmapper.projectList());
		return Dmapper.projectList();
	}
	
	@GetMapping("/count")
	public Long countProject() {
		System.out.println("프로젝트 갯수" + Dmapper.countProject());
		return Dmapper.countProject();
	}
	
	@GetMapping("/remain")
	public Long remainDate() {
		System.out.println("남은 날짜" + Dmapper.remainDate());
		return Dmapper.remainDate();
	}

}
