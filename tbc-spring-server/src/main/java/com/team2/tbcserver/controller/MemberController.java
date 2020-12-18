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

import com.team2.tbcserver.mapper.MemberMapper;
import com.team2.tbcserver.vo.MemberVO;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/member")
public class MemberController {
	@Autowired
	MemberMapper mapper;
	
	@GetMapping
	public List<MemberVO> fetch() {
		System.out.println("회원 정보" + mapper.fetch());
		return mapper.fetch();
	}
	
	@GetMapping("/{id}")
	public MemberVO fetchBy(@PathVariable Long id) {
		System.out.println("회원 정보" + mapper.fetchBy(id));
		return mapper.fetchBy(id);
	}
	
	@GetMapping("/login/{userId}")
	public MemberVO login(@PathVariable String userId) {
		System.out.println("회원 정보" + mapper.login(userId));
		return mapper.login(userId);
	}
	
	@PostMapping("/join")
	public void join(@RequestBody MemberVO Member) {
		mapper.join(Member);
		System.out.println("유저 데이터 저장");
	}
	
	@PutMapping("/{id}")
	public void update(@RequestBody MemberVO Member, @PathVariable Long id) {
		mapper.update(Member);
	}
	
	@DeleteMapping("/{id}")
	public void deleteBy(@PathVariable Long id) {
		mapper.deleteBy(id);
		System.out.println("id: " + id + " removeUser OK!");
	}	
	
}
