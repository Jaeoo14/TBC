import React, { Component } from 'react';
import { Jumbotron, Container, Button } from 'react-bootstrap';

import './Start.css';

class Start extends Component {
	render() {
		return (
			<Jumbotron fluid>
				<Container>
					<h1 className='shadowText' style={{ color: 'white' }}>마음 속 프로젝트 아이디어,<br/>텀블벅에서 현실로.</h1>
					<h6 className='shadowText' style={{ color: 'white' }}>크라우드펀딩으로 프로젝트를 위한 자금도 모으고, 든든한 후원자 네트워크도 확보할 수 있습니다.</h6>
					<p>
						<Button variant='warning' onClick={()=>this.props.history.push('/editproject')}>지금 시작하기</Button>
					</p>
				</Container>
			</Jumbotron>
		);
	}
}

export default Start;
