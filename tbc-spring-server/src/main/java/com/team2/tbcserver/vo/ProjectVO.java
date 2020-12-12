package com.team2.tbcserver.vo;

import java.time.LocalDateTime;

import lombok.Data;

@Data
public class ProjectVO {
	int id;
	int userId;
	String longTitle;
	String shortTitle;
	byte[] mainImg;
	String content;
	int category;
	String url;
	String tags;
	int fundingGoalAmount;
	LocalDateTime fundingStart;
	LocalDateTime fundingEnd;
	String rewards;
	int favoriteCount;
	int fundedAmount;
	int sponsor;
	LocalDateTime createdDate;
	LocalDateTime updatedDate;
}
