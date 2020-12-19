package com.team2.tbcserver.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.web.bind.annotation.PathVariable;

import com.team2.tbcserver.vo.MemberVO;

@Mapper
public interface MemberMapper {

	List<MemberVO> fetch();
	MemberVO fetchBy(Long id);
	MemberVO login(String userId);
	void join(MemberVO member);
	void updateUser(MemberVO member);
	void update(MemberVO member);
	void deleteBy(Long id);
}
