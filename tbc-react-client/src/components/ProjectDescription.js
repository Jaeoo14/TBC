import React, { useState } from 'react';
import { Button, Col, Container, ListGroup, Row, Form } from 'react-bootstrap';

import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

import CustomInput from './CustomInput';
import CustomTextArea from './CustomTextArea';
import InputProjectTitle from './InputProjectTitle';

const ProjectDescription = () => {

	const handleCreatorRegion = text => {
		console.log(text);
	};

	return (
		<Container fluid='md' style={{ textAlign: 'left' }}>
			프로젝트 개요
			<ListGroup>
				<ListGroup.Item action variant='light'>
					<InputProjectTitle />
				</ListGroup.Item>
				<ListGroup.Item action variant='light'>
					<Container>
						<Row>
							<Form.Group>
								<Form.Label column='sm' style={{ fontWeight: 'bolder', color: 'black' }}>프로젝트 대표 이미지</Form.Label>
								<Form.File id="exampleFormControlFile1" label="" />
							</Form.Group>
						</Row>
						<Row style={{ justifyContent: 'flex-end' }}>
							<Button variant='primary' size='sm'>
								<CheckIcon />
								닫기
							</Button>
						</Row>
					</Container>
				</ListGroup.Item>
				<ListGroup.Item action variant='light'>
					<CustomTextArea 
						title='프로젝트 요약' 
						desc='후원자 분들에게 본 프로젝트를 간략하게 소개해 봅시다' 
						placeholder='프로젝트 요약을 입력해주세요' 
						minlen='10' 
						maxlen='50' />
				</ListGroup.Item>
				<ListGroup.Item action variant='light'>
					프로젝트 카테고리<br></br>
					<select>
						<option value='1'>1</option>
					</select>
				</ListGroup.Item>
				<ListGroup.Item action variant='light'>
					프로젝트 페이지 주소<br></br>
					https://tumblbug.com/ <input type='text' />
				</ListGroup.Item>
				<ListGroup.Item action variant='light'>
					<Container>
						<Row>
							<Col>
								<CustomInput
									width='100%'
									desc='내외부 검색 엔진에서 프로젝트가 잘 검색될 수 있도록, 사람들이 검색할만한 프로젝트의 핵심 단어를 입력해주세요.
									여러 개의 태그를 입력하시는 경우 쉼표(,)로 구분하여 작성하실 수 있습니다.
									프로젝트와 관련 없거나 검색에 불리한 키워드는 운영진에 의해 조정될 수 있습니다.
									쉼표를 제외한 특수문자는 입력하실 수 없습니다.'
									title='검색용 태그'
									placeholder='쉼표(,)로 구분해서 입력해 주세요.'
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
