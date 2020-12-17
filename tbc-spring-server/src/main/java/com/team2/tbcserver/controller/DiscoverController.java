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
	
	//프로젝트 전체 리스트 보기 
	@GetMapping
	public List<ProjectVO> projectList() {
		System.out.println("프로젝트 리스트" + Dmapper.projectList());
		return Dmapper.projectList();
	}
	
	//프로젝트 갯수
	@GetMapping("/count")
	public Long countProject() {
		System.out.println("프로젝트 갯수" + Dmapper.countProject());
		return Dmapper.countProject();
	}
	
	//모인 금액별 분류
	@GetMapping("/amountunder100")
	public List<ProjectVO> amountUnder100() {
		System.out.println("100만원 이하의 프로젝트 리스트" + Dmapper.amountUnder100());
		return Dmapper.amountUnder100();
	}
	
	@GetMapping("/amount100to1000")
	public List<ProjectVO> amount100to1000() {
		System.out.println("100<모인금액<1000 프로젝트 리스트" + Dmapper.amount100to1000());
		return Dmapper.amount100to1000();
	}
	
	@GetMapping("/amount1000to5000")
	public List<ProjectVO> amount1000to5000() {
		System.out.println("1000<모인금액<5000 프로젝트 리스트" + Dmapper.amount1000to5000());
		return Dmapper.amount1000to5000();
	}
	
	@GetMapping("/amount5000toMillion")
	public List<ProjectVO> amount5000toMillion() {
		System.out.println("5000<모인금액<1억 프로젝트 리스트" + Dmapper.amount5000toMillion());
		return Dmapper.amount5000toMillion();
	}
	
	@GetMapping("/amountOverMillion")
	public List<ProjectVO> amountOverMillion() {
		System.out.println("1억 이상 프로젝트 리스트" + Dmapper.amountOverMillion());
		return Dmapper.amountOverMillion();
	}
	
	
}
