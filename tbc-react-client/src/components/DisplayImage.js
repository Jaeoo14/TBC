import React, { Component } from 'react';
import Pas from '../ProjectApiService';

// props
//  pId : 프로젝트 id.
//  width : 화면에 그릴 이미지의 너비.
class DisplayImage extends Component {
	state = {
		file: {}, // 이미지 파일 데이타. file 테이블 참조.
	};

	componentDidMount = () => {
		Pas.getFileOfProject(this.props.pId)
			.then(res => this.setState({ file: res.data }, () => console.log(this.state.file)))
			.catch(err => console.log(err));
  }

  componentDidUpdate(prevProps, prevState) {
		if (prevProps.pId === this.props.pId) return;

		Pas.getFileOfProject(this.props.pId)
			.then(res => this.setState({ file: res.data }, () => console.log(this.state.file)))
			.catch(err => console.log(err));
	}

	render() {
    return (<img src={`data:image/png;base64,${this.state.file.data}`} alt='' width={this.props.width} />);
	}
}

export default DisplayImage;
