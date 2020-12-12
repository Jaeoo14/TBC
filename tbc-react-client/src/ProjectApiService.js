import Axios from 'axios';
import { Component } from 'react';

// front-end : port 3000
// back-end : port 8090 로 설정.

// spring boot back-end url.
const URL = 'http://localhost:8090/project'; // https는 따로 알아보자.

class ProjectApiService extends Component {
  // http://localhost:8090/project
  // 전체 프로젝트들 가져오기
  fetch() {
    return Axios.get(URL);
  }

  // http://localhost:8090/project/1
  // id인 프로젝트 가져오기
  fetchBy(id) {
    return Axios.get(URL + '/' + id);
  }

  // 프로젝트 추가
  insert(project) {
    return Axios.post(URL, project);
  }
  
  // 프로젝트 갱신
  update(project) {
    return Axios.put(URL + '/' + project.id, project);
  }

  // id인 프로젝트 삭제.
  delete(id) {
    return Axios.delete(URL + '/' + id);
  }
}

export default new ProjectApiService();
