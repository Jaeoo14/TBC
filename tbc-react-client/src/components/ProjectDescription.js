import React, { Component } from 'react';

import { Badge, Container, ListGroup } from 'react-bootstrap';

import InputProjectTitle from './InputProjectTitle';
import UploadProjectImage from './UploadProjectImage';
import CustomTextArea from './CustomTextArea';
import SelectProjectCategory from './SelectProjectCategory';
import SetProjectURL from './SetProjectURL';
import InputTags from './InputTags';

import EditIcon from '@material-ui/icons/Edit';

import Pas from '../ProjectApiService';
import DisplayImage from './DisplayImage';

class ProjectDescription extends Component {
	state = {
		project: undefined,

		editTitle: false,
		editMainImg: false,
	};

	componentDidMount() {
		const { pId, cId } = this.props;

		Pas.fetchBy(pId)
			.then(res =>
				this.setState({ project: res.data }, () => {
					this.props.showTitle(this.state.project.longTitle);
					console.log('ProjectDescription.componentDidMount', this.state, this.props);
				}),
			)
			.catch(err => console.log(err));
	}

	componentDidUpdate(prevProps, prevState) {}

	handleClose = () => {
		this.setState({ editTitle: false, editMainImg: false });
	};

	handleSaveMainImg = mainImg => {
		this.setState({ project: { ...this.state.project, mainImg: mainImg}, editTitle: false, editMainImg: false },
			this.updateProject);
	};

	startEditTitle = e => {
		e.preventDefault();
		this.setState({ editTitle: true });
	};

	startEditMainImg = e => {
		e.preventDefault();
		this.setState({ editMainImg: true });
	};

	handleTitles = (longTitle, shortTitle) => {
		let temp = { ...this.state.project };
		temp.longTitle = longTitle;
		temp.shortTitle = shortTitle;
		this.setState({ project: temp, editTitle: false }, () => this.updateTitles());
	};

	updateTitles = () => {
		Pas.update(this.state.project)
			.then(res => {
				console.log('Update project title to DB.', res.data);
				this.props.showTitle(this.state.project.longTitle);
			})
			.catch(err => console.log(err));
	};

	handleProject = (column, value) => {
		let temp = { ...this.state.project };
		temp[column] = value;
		this.setState({ project: temp }, () => this.updateProject());
	};

	updateProject = () => {
		Pas.update(this.state.project)
			.then(res => {
				console.log('Update project content to DB.', res.data);
			})
			.catch(err => console.log(err));
	};

	render() {
		if (this.state.project === undefined) return null;

		console.log('ProjectDescription.render project=', this.state.project);
		const { longTitle, shortTitle } = this.state.project;

		return (
			<Container fluid='md' style={{ textAlign: 'left' }}>
				<h6>프로젝트 개요</h6>
				<ListGroup>
					<ListGroup.Item as='div' action>
						{this.state.editTitle ? (
							<div>
								<InputProjectTitle longTitle={longTitle} shortTitle={shortTitle} handleTitles={this.handleTitles} handleClose={this.handleClose} />{' '}
							</div>
						) : (
							<div onClick={this.startEditTitle}>
								<div>
									<h6>프로젝트 제목</h6>
									<h6>
										{longTitle} <Badge variant='danger'>{shortTitle}</Badge>
									</h6>
								</div>
								<div style={{ textAlign: 'right', color: 'tomato' }}>
									<EditIcon fontSize='small' />
									입력하기
								</div>
							</div>
						)}
					</ListGroup.Item>
					<ListGroup.Item as='div' action>
						{this.state.editMainImg ? (
							<UploadProjectImage
								title='프로젝트 대표 이미지'
								desc='대표 이미지는 프로젝트의 가장 중요한 시각적 요소입니다. 후원자들이 프로젝트의 내용을 쉽게 파악하고 좋은 인상을 받을 수 있게 하기 위해 다음 가이드라인에 따라 디자인해 주세요.'
								mainImg={this.state.project.mainImg}
								handleClose={this.handleClose}
								handleSaveMainImg={this.handleSaveMainImg}
							/>
						) : (
							<div onClick={this.startEditMainImg}>
								<div>
									<h6>프로젝트 대표 이미지</h6>
									<DisplayImage pId={this.state.project.id} width={100} height={100} />
								</div>
								<div style={{ textAlign: 'right', color: 'tomato' }}>
									<EditIcon fontSize='small' />
									입력하기
								</div>
							</div>
						)}
					</ListGroup.Item>
					<ListGroup.Item as='div' action>
						<CustomTextArea
							title='프로젝트 요약'
							desc='후원자 분들에게 본 프로젝트를 간략하게 소개해 봅시다'
							placeholder='프로젝트 요약을 입력해주세요'
							minlen='10'
							maxlen='100'
							value={this.state.project.content}
							handleText={this.handleProject}
							columnName='content'
						/>
					</ListGroup.Item>
					<ListGroup.Item as='div' action>
						<SelectProjectCategory
							title='프로젝트 카테고리'
							desc='프로젝트의 성격에 맞는 카테고리를 선택해 주세요. (프로젝트 성격과 맞지 않는 카테고리를 선택하실 시 후원자가 해당 프로젝트를 찾기 어려워지기에 에디터에 의해 조정될 수 있습니다.)'
							placeholder='프로젝트 카테고리를 정해주세요.'
							value={this.state.project.category}
							handleProject={this.handleProject}
						/>
					</ListGroup.Item>
					<ListGroup.Item as='div' action>
						<SetProjectURL value={this.state.project.url} minlen='3' maxlen='28' handleProject={this.handleProject} />
					</ListGroup.Item>
					<ListGroup.Item as='div' action>
						<InputTags value={this.state.project.tags} minlen='2' maxlen='125' handleProject={this.handleProject} />
					</ListGroup.Item>
				</ListGroup>
				<h6>창작자 정보</h6>
				<ListGroup>
					<ListGroup.Item as='div' action>
						테스트 1
					</ListGroup.Item>
					<ListGroup.Item as='div' action>
						테스트 2
					</ListGroup.Item>
					{/*<ListGroup.Item as='div' action>
						<UploadImage
							title='프로필 이미지'
							desc='창작자님 개인이나 팀의 사진을 올려주세요. 얼굴이 나온 사진을 넣으면 프로젝트의 신뢰성 향상에 도움이 됩니다.
							파일 형식은 jpg, png 또는 gif로, 사이즈는 가로 200px, 세로 200px 이상으로 올려주세요.'
							cId={this.state.project.creatorId}
						/>
					</ListGroup.Item>
					 	<ListGroup.Item  as='div' action>
						<InputCreatorName />
					</ListGroup.Item>
					<ListGroup.Item  as='div' action>
						<CustomTextArea
							title='창작자 소개'
							desc='창작자님의 이력과 간단한 소개를 써 주세요.'
							placeholder='창작자 소개를 입력해주세요.'
							minlen='10'
							maxlen='300'
							columnName='intro'
							 />
					</ListGroup.Item>
					<ListGroup.Item  as='div' action>
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
										changeText={this.handleCreatorRegion}
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
					</ListGroup.Item> */}
				</ListGroup>
				<p></p>
			</Container>
		);
	}
}

export default ProjectDescription;
