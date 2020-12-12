package com.team2.tbcserver.vo;

import java.time.LocalDateTime;

import lombok.Data;

@Data
public class MemberVO {
	int id;
	String userId; // email
	String pwd;
	String name;
	String nickname;
	LocalDateTime signUpDate;
	String intro;
	byte[] profileImg;
	String tel;
	String address;
	String myProjects; // 내가 만든 프로젝트 목록
	String likeProjects; // 내가 좋아요한 프로젝트 목록
	String fundProjects; // 내가 후원한 프로젝트 목록
	String fundLog;
	String payment;
	int role; // 0 user, 1 manager, 2 admin
	int status; // 0 inactive, 1 active, 2 delete
}
