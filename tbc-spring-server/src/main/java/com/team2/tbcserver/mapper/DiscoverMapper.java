package com.team2.tbcserver.mapper;
import org.apache.ibatis.annotations.Mapper;
import java.util.List;
import com.team2.tbcserver.vo.ProjectVO;

@Mapper
public interface DiscoverMapper {
	
	List<ProjectVO> projectList();
	Long countProject();
	
	//카테고리별 분류
	List<ProjectVO> categoryBy(Long category);
	
	//필터별 분류
	List<ProjectVO> alignNew();
	List<ProjectVO> alignAmountPercent();
	List<ProjectVO> alignFundAmount();
	List<ProjectVO> alignDate();
	
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



