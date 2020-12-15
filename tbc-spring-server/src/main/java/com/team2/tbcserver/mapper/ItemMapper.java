package com.team2.tbcserver.mapper;

import org.apache.ibatis.annotations.Mapper;
import java.util.List;
import com.team2.tbcserver.vo.ItemVO;

@Mapper
public interface ItemMapper {
	List<ItemVO> fetch(); // itemMapper.xml 에서 <select>의 id 값이 메서드 이름이다.
	ItemVO fetchBy(Long id);
	void insert(ItemVO item);
	void update(ItemVO item);
	void deleteBy(Long id);
}
