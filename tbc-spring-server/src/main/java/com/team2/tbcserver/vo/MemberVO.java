package com.team2.tbcserver.vo;

import java.time.LocalDateTime;

import lombok.Data;

@Data
public class MemberVO {
	private Long id;
	private String userId; // email
	private String pwd;
	private String name;
	private String nickname;
	private LocalDateTime signUpDate;
	private String intro;
	private byte[] profileImg;
	private String tel;
	private String address;
	private String myProjects; // 내가 만든 프로젝트 목록
	private String likeProjects; // 내가 좋아요한 프로젝트 목록
	private String fundProjects; // 내가 후원한 프로젝트 목록
	private String fundLog;
	private String payment;
	private Long role; // 0 user, 1 manager, 2 admin
	private Long status; // 0 inactive, 1 active, 2 delete
}
