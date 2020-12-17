import React, { Component } from 'react';
import { Jumbotron, Container, Button } from 'react-bootstrap';
import Pas from '../ProjectApiService';

import './Start.css';

class Start extends Component {
	// login 한 사용자만 프로젝트를 만들 수 있다.
	state = {
		id: undefined,	// project.id 실제 빈 프로젝트를 DB에 저장한 후 알 수 있는 값이다.
		creatorId: 999, // login 한 사용자의 id. 임시로 999로 설정한다.
	};

	componentDidMount() {}

	makeNewProject = () => {
		Pas.insert(this.state) // 빈 프로젝트를 DB에 추가
			.then(res => this.setState({ id: res.data }, this.gotoEditProject))
			.catch(err => console.log(err));
	};

	gotoEditProject = () => {
		console.log('New Project', this.state);

		this.props.history.push({
			pathname: '/editproject',
			state: this.state,
		});
	};

	render() {
		return (
			<Jumbotron fluid>
				<Container>
					<h1 className='shadowText' style={{ color: 'white' }}>
						마음 속 프로젝트 아이디어,
						<br />
						텀블벅에서 현실로.
					</h1>
					<h6 className='shadowText' style={{ color: 'white' }}>
						크라우드펀딩으로 프로젝트를 위한 자금도 모으고, 든든한 후원자 네트워크도 확보할 수 있습니다.
					</h6>
					<p>
						<Button variant='warning' onClick={this.makeNewProject}>
							<strong>지금 시작하기</strong>
						</Button>
					</p>
				</Container>
			</Jumbotron>
		);
	}
}

export default Start;
