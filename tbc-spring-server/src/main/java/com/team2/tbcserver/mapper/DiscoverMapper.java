package com.team2.tbcserver.mapper;
import org.apache.ibatis.annotations.Mapper;
import java.util.List;
import com.team2.tbcserver.vo.ProjectVO;

@Mapper
public interface DiscoverMapper {
	
	List<ProjectVO> projectList();
	Long countProject();
	
	//상태별 분류
	List<ProjectVO> stateIng();
	List<ProjectVO> stateEnd();
	
	
	//달성률별 분류
	List<ProjectVO> goalUnder75();
	List<ProjectVO> goalUnder75to100();
	List<ProjectVO> goalOver100();
	
	//모인 금액별 분류
	List<ProjectVO> amountUnder100();
	List<ProjectVO> amount100to1000();
	List<ProjectVO> amount1000to5000();
	List<ProjectVO> amount5000toMillion();
	List<ProjectVO> amountOverMillion();
	
	
}



