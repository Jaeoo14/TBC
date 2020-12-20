import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

import Pas from '../ProjectApiService';

class MainItem extends Component {
	state = {
		file: {}, // 이미지 파일 데이타. file 테이블 참조.
	};

	componentDidMount = () => {
		Pas.getFileOfProject(this.props.pId)
			.then(res => this.setState({ file: res.data }, () => console.log(this.state.file)))
			.catch(err => console.log(err));
	};

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.pId === this.props.pId) return;

		Pas.getFileOfProject(this.props.pId)
			.then(res => this.setState({ file: res.data }, () => console.log(this.state.file)))
			.catch(err => console.log(err));
	}

	render() {
		return (
			<>
				<img
					className='d-block w-100'
					src={`data:${this.state.file.type};base64,${this.state.file.data}`}
					alt={this.props.shortTitle}
					style={{ height: 400, width: 1500 }}
				/>
				<Carousel.Caption>
					<h3 style={{ backgroundColor: 'black', color: 'yellow' }}>{this.props.longTitle}</h3>
					<p style={{ backgroundColor: 'black', color: 'yellow' }}>{this.props.content}</p>
				</Carousel.Caption>
			</>
		);
	}
}

export default MainItem;
