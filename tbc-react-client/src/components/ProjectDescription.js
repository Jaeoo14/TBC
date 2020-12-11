import React, { useState } from 'react';
import { Button, Col, Container, ListGroup, Row, Form } from 'react-bootstrap';

import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

import CustomInput from './CustomInput';
import CustomTextArea from './CustomTextArea';
import InputProjectTitle from './InputProjectTitle';
import SelectProjectCategory from './SelectProjectCategory';
import InputTags from './InputTags';
import SetProjectURL from './SetProjectURL';
import UploadProjectImage from './UploadProjectImage';

const ProjectDescription = () => {

	const handleCreatorRegion = text => {
		console.log(text);
	};

	return (
		<Container fluid='md' style={{ textAlign: 'left' }}>
			<p></p>
			<ListGroup>
				<ListGroup.Item action variant='light'>
					<InputProjectTitle />
				</ListGroup.Item>
				<ListGroup.Item action variant='light'>
					<UploadProjectImage />
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
					<SelectProjectCategory
						title='프로젝트 카테고리'
						desc='프로젝트의 성격에 맞는 카테고리를 선택해 주세요.
						(프로젝트 성격과 맞지 않는 카테고리를 선택하실 시 후원자가 해당 프로젝트를 찾기 어려워지기에 에디터에 의해 조정될 수 있습니다.)'
						placeholder='프로젝트 카테고리를 정해주세요.'
					/>
				</ListGroup.Item>
				<ListGroup.Item action variant='light'>
					<SetProjectURL />
				</ListGroup.Item>
				<ListGroup.Item action variant='light'>
					<InputTags />
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
									header=''
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
