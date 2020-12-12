package com.team2.tbcserver.vo;

import lombok.Data;

@Data
public class ItemVO {
	private Long id;
	private String name;
	private Long option; // 0 조건 없음, 1 조건 설명 있음, 2 선택할 수 있는 추가 옵션들이 있음.
	private String option1Message;
	private String option2Message;
}
