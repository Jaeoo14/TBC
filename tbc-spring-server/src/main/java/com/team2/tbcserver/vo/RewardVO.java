package com.team2.tbcserver.vo;

import java.time.LocalDateTime;

public class RewardVO {
	int id;
	int minFundAmount; // 이 보상을 받기 위한 최소 후원금액
	String items;
	String description;
	int order; // 선물 카드 정렬 순서
	LocalDateTime deliveryDate;
	boolean isLimited; // 선물 개수 제한 여부
	int quantity; // 선물 제한 개수
	int stock; // 남은 선물 개수
}
