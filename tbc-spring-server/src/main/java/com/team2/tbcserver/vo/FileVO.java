package com.team2.tbcserver.vo;

import java.time.LocalDateTime;

import lombok.Data;

@Data
public class FileVO {
	private Long id;
	private String name;
	private String type;
	private byte[] data;
	LocalDateTime createdAt;
	LocalDateTime updatedAt;
	
}
