package com.team2.tbcserver.mapper;

import org.apache.ibatis.annotations.Mapper;
import java.util.List;
import com.team2.tbcserver.vo.ProjectVO;

@Mapper
public interface ProjectMapper {
	List<ProjectVO> fetch(); // projectMapper.xml 에서 <select>의 id 값이 메서드 이름이다.
	ProjectVO fecthBy(Long id);
	void insert(ProjectVO project);
	void update(ProjectVO project);
	void deleteBy(Long id);
}
