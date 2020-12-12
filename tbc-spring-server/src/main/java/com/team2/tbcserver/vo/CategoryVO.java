package com.team2.tbcserver.vo;

import lombok.Data;

@Data
public class CategoryVO {
	private Long id;
	private String name; // 영어 이름
	private String text; // 한글 이름
}
