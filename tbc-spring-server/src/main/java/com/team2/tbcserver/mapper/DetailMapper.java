package com.team2.tbcserver.mapper;
import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import com.team2.tbcserver.vo.DetailVO;
import com.team2.tbcserver.vo.ProjectVO;

@Mapper
public interface DetailMapper {
	
	List<DetailVO> fetch(); // rewardMapper.xml 에서 <select>의 id 값이 메서드 이름이다.
	DetailVO fetchBy(Long id);
	void insert(DetailVO item);
	void update(DetailVO item);
	void deleteBy(Long id);
	
	
}
