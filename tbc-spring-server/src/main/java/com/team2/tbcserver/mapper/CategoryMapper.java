package com.team2.tbcserver.mapper;

import org.apache.ibatis.annotations.Mapper;
import java.util.List;
import com.team2.tbcserver.vo.CategoryVO;

@Mapper
public interface CategoryMapper {
	List<CategoryVO> fetch(); // categoryMapper.xml 에서 <select>의 id 값이 메서드 이름이다.
	CategoryVO fetchBy(Long id);
//	void insert(CategoryVO item);
//	void update(CategoryVO item);
//	void deleteBy(Long id);
}
