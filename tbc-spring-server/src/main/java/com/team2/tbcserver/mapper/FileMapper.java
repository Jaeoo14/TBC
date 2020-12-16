package com.team2.tbcserver.mapper;

import org.apache.ibatis.annotations.Mapper;
import java.util.List;
import com.team2.tbcserver.vo.FileVO;

@Mapper
public interface FileMapper {
	List<FileVO> fetch(); // fileMapper.xml 에서 <select>의 id 값이 메서드 이름이다.
	FileVO fetchBy(Long id);
	void insert(FileVO item);
	void update(FileVO item);
	void deleteBy(Long id);
	FileVO getFileOfProject(Long projectId);
}
