import React, { Component } from 'react';
import { Jumbotron, Container, Button } from 'react-bootstrap';
import Pas from '../ProjectApiService';

import './Start.css';

class Start extends Component {
	// login 한 사용자만 프로젝트를 만들 수 있다.
	state = {
		projectId: undefined, // 실제 빈 프로젝트를 DB에 저장한 후 알 수 있는 값이다.
		userId: 0, // login 한 사용자의 id.
	};

	componentDidMount() {
		let _userId = 0;
		const member = JSON.parse(localStorage.getItem('myStorage'));
		if (member !== null) _userId = member.id;

		this.setState({ userId: _userId });
	}

	makeNewProject = () => {
		Pas.insert(this.state) // 빈 프로젝트를 DB에 추가
			.then(res => this.setState({ projectId: res.data }, this.gotoEditProject))
			.catch(err => console.log(err));
	};

	gotoEditProject = () => {
		console.log('New Project (id, user)=', this.state);

		this.props.history.push({
			pathname: '/editproject',
			state: this.state,
		});
	};

	render() {
		console.log('Start.render state=', this.state);
		return (
			<Jumbotron fluid>
				<Container style={{ textAlign:'left', color: 'white' }}>
					<h1 className='shadowText' >
						마음 속 프로젝트 아이디어,
						<br />
						텀블벅에서 현실로.
					</h1>
					<h6 className='shadowText'>
						크라우드펀딩으로 프로젝트를 위한 자금도 모으고, 든든한 후원자 네트워크도 확보할 수 있습니다.
					</h6>
					<p>
						<Button variant='warning' onClick={this.makeNewProject} disabled={this.state.userId === 0}>
							<strong>지금 시작하기</strong>
						</Button>
					</p>
				</Container>
			</Jumbotron>
		);
	}
}

export default Start;
