package com.team2.tbcserver.vo;

import java.time.LocalDateTime;

import lombok.Data;

@Data
public class RewardVO {
	private Long id;
	private Long minFundAmount; // 이 보상을 받기 위한 최소 후원금액
	private String items;
	private String description;
	private Long order; // 선물 카드 정렬 순서
	private LocalDateTime deliveryDate;
	private boolean isLimited; // 선물 개수 제한 여부
	private Long quantity; // 선물 제한 개수
	private Long stock; // 남은 선물 개수
}
