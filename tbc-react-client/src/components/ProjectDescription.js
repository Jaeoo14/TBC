import React, { useState } from 'react';
import { Button, Col, Container, FormControl, InputGroup, ListGroup, Row } from 'react-bootstrap';

import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import CustomInput from './CustomInput';

const ProjectDescription = () => {
	const [projectTitle, setProjectTitle] = useState('');
	const [projectShortTitle, setProjectShortTitle] = useState('');

	const handleProjectTitle = text => {
		console.log(text);
		setProjectTitle(text);
	};

	const handleProjectShortTitle = text => {
		console.log(text);
		setProjectShortTitle(text);
	};

	const handleCreatorRegion = text => {
		console.log(text);
	};

	return (
		<Container fluid='md' style={{ textAlign: 'left' }}>
			프로젝트 개요
			<ListGroup>
				<ListGroup.Item action variant='light'>
					<Container>
						<Row>
							<Col xs={8}>
								<CustomInput title='프로젝트 제목' placeholder='제목을 입력해 주세요.' maxlen='32' changeText={handleProjectTitle} />
							</Col>
							<Col>
								<CustomInput title='프로젝트 짧은 제목' placeholder='짧은 제목을 입력해 주세요.' maxlen='7' changeText={handleProjectShortTitle} />
							</Col>
						</Row>
						<Row style={{ justifyContent: 'flex-end' }}>
							<Button variant='secondary' size='sm'>
								<CloseIcon />
								취소하기
							</Button>{' '}
							<Button variant='primary' size='sm'>
								<CheckIcon />
								저장하기
							</Button>
						</Row>
					</Container>
				</ListGroup.Item>
				<ListGroup.Item action variant='light'>
					프로젝트 대표 이미지
				</ListGroup.Item>
				<ListGroup.Item action variant='light'>
					프로젝트 요약
				</ListGroup.Item>
				<ListGroup.Item action variant='light'>
					프로젝트 카테고리
				</ListGroup.Item>
				<ListGroup.Item action variant='light'>
					프로젝트 페이지 주소
				</ListGroup.Item>
				<ListGroup.Item action variant='light'>
					검색용 태그
				</ListGroup.Item>
			</ListGroup>
			<p></p>
			창작자 정보
			<ListGroup>
				<ListGroup.Item action variant='light'>
					프로필 이미지
				</ListGroup.Item>
				<ListGroup.Item action variant='light'>
					창작자 이름
				</ListGroup.Item>
				<ListGroup.Item action variant='light'>
					창작자 소개
				</ListGroup.Item>
				<ListGroup.Item action variant='light'>
					<Container>
						<Row>
							<Col>
								<CustomInput
								width='50%'
									desc='창작자님은 주로 어느 지역에서 활동하시나요? 활동 지역을 구체적으로 기입해주시면 프로젝트의 신뢰를 높이는 데 도움이 됩니다.'
									title='창작자 활동 지역'
									placeholder='활동 지역을 입력하세요.'
									maxlen='20'
									changeText={handleCreatorRegion}
								/>
							</Col>
						</Row>
						<Row style={{ justifyContent: 'flex-end' }}>
							<Button variant='secondary' size='sm'>
								<CloseIcon />
								취소하기
							</Button>{' '}
							<Button variant='primary' size='sm'>
								<CheckIcon />
								저장하기
							</Button>
						</Row>
					</Container>
				</ListGroup.Item>
			</ListGroup>
		</Container>
	);
};

export default ProjectDescription;
