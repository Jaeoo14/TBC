package com.team2.tbcserver.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.web.servlet.error.ErrorMvcAutoConfiguration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.team2.tbcserver.mapper.MemberMapper;
import com.team2.tbcserver.vo.MemberVO;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/")
public class MemberController {
	
	@Autowired
	MemberMapper Mmapper;
	
	@GetMapping("login/{userId}")
	public MemberVO login(@PathVariable String userId) {
	
		System.out.println("회원 정보" + Mmapper.login(userId));
		return Mmapper.login(userId);
	}
}
