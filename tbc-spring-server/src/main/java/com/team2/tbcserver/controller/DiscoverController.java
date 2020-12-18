package com.team2.tbcserver.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
	
	//카테고리별 분류
	@GetMapping("/category/{category}")
	public List<ProjectVO> categoryBy(@PathVariable Long category) {
		System.out.println("카테고리별 받아오기" + Dmapper.categoryBy(category));
		return Dmapper.categoryBy(category);
	}
	
	//필터별 분류
	@GetMapping("/alignnew")
	public List<ProjectVO> alignNew() {
		System.out.println("최신순으로 프로젝트 나열" + Dmapper.alignNew());
		return Dmapper.alignNew();
	}
	
	@GetMapping("/alignamountpercent")
	public List<ProjectVO> alignAmountPercent() {
		System.out.println("최신순으로 프로젝트 나열" + Dmapper.alignAmountPercent());
		return Dmapper.alignAmountPercent();
	}
	
	@GetMapping("/alignfundamount")
	public List<ProjectVO> alignFundAmount() {
		System.out.println("최신순으로 프로젝트 나열" + Dmapper.alignFundAmount());
		return Dmapper.alignFundAmount();
	}
	
	@GetMapping("/aligndate")
	public List<ProjectVO> alignDate() {
		System.out.println("최신순으로 프로젝트 나열" + Dmapper.alignDate());
		return Dmapper.alignDate();
	}
	
	
	//상태별 분류
	@GetMapping("/stateing")
	public List<ProjectVO> stateIng() {
		System.out.println("진행중인 프로젝트" + Dmapper.stateIng());
		return Dmapper.stateIng();
	}
	
	@GetMapping("/stateend")
	public List<ProjectVO> stateEnd() {
		System.out.println("끝난 프로젝트" + Dmapper.stateEnd());
		return Dmapper.stateEnd();
	}
	
	//달성률별 분류
	@GetMapping("/goalunder75")
	public List<ProjectVO> goalUnder75() {
		System.out.println("100만원 이하의 프로젝트 리스트" + Dmapper.goalUnder75());
		return Dmapper.goalUnder75();
	}

	@GetMapping("/goalunder75to100")
	public List<ProjectVO> goalUnder75to100() {
		System.out.println("100만원 이하의 프로젝트 리스트" + Dmapper.goalUnder75to100());
		return Dmapper.goalUnder75to100();
	}
	
	@GetMapping("/goalover100")
	public List<ProjectVO> goalOver100() {
		System.out.println("100만원 이하의 프로젝트 리스트" + Dmapper.goalOver100());
		return Dmapper.goalOver100();
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
