package com.team2.tbcserver.mapper;

import org.apache.ibatis.annotations.Mapper;
import java.util.List;
import com.team2.tbcserver.vo.RewardVO;

@Mapper
public interface RewardMapper {
	List<RewardVO> fetch(); // rewardMapper.xml 에서 <select>의 id 값이 메서드 이름이다.
	RewardVO fetchBy(Long id);
	void insert(RewardVO item);
	void update(RewardVO item);
	void deleteBy(Long id);
}
