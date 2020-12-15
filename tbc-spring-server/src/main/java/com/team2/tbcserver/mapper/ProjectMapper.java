package com.team2.tbcserver.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.team2.tbcserver.vo.ProjectVO;

@Mapper
public interface ProjectMapper {
	List<ProjectVO> fetch(); // projectMapper.xml 에서 <select>의 id 값이 메서드 이름이다.
	ProjectVO fetchBy(Long id);
	void insert(ProjectVO item);
	void update(ProjectVO item);
	void deleteBy(Long id);
	List<Map<String, Object>> fetchColumn(String columnName);
	Map<String, Object> fetchColumnBy(@Param("columnName") String columnName, @Param("id") Long id);
}


