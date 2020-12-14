package com.team2.tbcserver.vo;

import java.time.LocalDateTime;

import lombok.Data;

@Data
public class ProjectVO {
	private Long id;
	private Long creatorId;
	private String longTitle;
	private String shortTitle;
	private Long mainImg;
	private String content;
	private Long category;
	private String url;
	private String tags;
	private Long fundingGoalAmount;
	private LocalDateTime fundingStart;
	private LocalDateTime fundingEnd;
	private String rewards;
	private Long favoriteCount;
	private Long fundedAmount;
	private Long sponsorCount;
	private LocalDateTime createdDate;
	private LocalDateTime updatedDate;
}
