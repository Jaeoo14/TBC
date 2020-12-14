package com.team2.tbcserver.mapper;
import org.apache.ibatis.annotations.Mapper;
import java.util.List;
import com.team2.tbcserver.vo.ProjectVO;

@Mapper
public interface DiscoverMapper {
	List<ProjectVO> projectList();


}



