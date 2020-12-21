import React, { Component } from 'react';
import { Jumbotron, Container, Button } from 'react-bootstrap';
import Pas from '../ProjectApiService';

import './Start.css';

class Start extends Component {
  // login 한 사용자만 프로젝트를 만들 수 있다.
  // project table 컬럼과 같은 이름이다.
	state = {
		id: undefined, // 실제 빈 프로젝트를 DB에 저장한 후 알 수 있는 값이다.
		creatorId: 0, // login 한 사용자의 id.
	};

	componentDidMount() {
		let _creatorId = 0;
		const member = JSON.parse(localStorage.getItem('myStorage'));
		if (member !== null) _creatorId = member.id;

		this.setState({ creatorId: _creatorId });
	}

	makeNewProject = () => {
		Pas.insert(this.state) // 빈 프로젝트를 DB에 추가
			.then(res => this.setState({ id: res.data }, this.gotoEditProject))
			.catch(console.log);
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
						<Button variant='warning' onClick={this.makeNewProject} disabled={this.state.creatorId === 0}>
							<strong>지금 시작하기</strong>
						</Button>
					</p>
				</Container>
			</Jumbotron>
		);
	}
}

export default Start;
