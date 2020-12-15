package com.team2.tbcserver.mapper;
import org.apache.ibatis.annotations.Mapper;

import com.team2.tbcserver.vo.MemberVO;

@Mapper
public interface MemberMapper {
	MemberVO login(String userId);
//	void join(MemberVO item);
//	void update(MemberVO item);
}



