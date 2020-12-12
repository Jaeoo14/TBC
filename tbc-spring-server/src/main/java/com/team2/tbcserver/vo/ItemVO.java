package com.team2.tbcserver.vo;

public class ItemVO {
	int id;
	String name;
	int option; // 0 조건 없음, 1 조건 설명 있음, 2 선택할 수 있는 추가 옵션들이 있음.
	String option1Message;
	String option2Message;
}
