import React, { Component } from 'react';

// import { Button, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { Container, ListGroup } from 'react-bootstrap';

import InputProjectTitle from './InputProjectTitle';
import UploadProjectImage from './UploadProjectImage';
import CustomTextArea from './CustomTextArea';
import SelectProjectCategory from './SelectProjectCategory';

// import CustomInput from './CustomInput';
// import InputTags from './InputTags';
// import SetProjectURL from './SetProjectURL';
// import CustomFile from './CustomFile';
// import InputCreatorName from './InputCreatorName';

// import CheckIcon from '@material-ui/icons/Check';
// import CloseIcon from '@material-ui/icons/Close';

import Pas from '../ProjectApiService';

class ProjectDescription extends Component {
	constructor(props) {
		super(props);

		this.state = {
			project: {},
		};
	}

	componentDidMount() {
		const {pId, cId} = this.props;

		if (typeof pId === 'undefined') {
			Pas.insert({ creatorId: cId }) // 빈 프로젝트를 DB에 추가
				.then(res => {
					this.setState({
						project: {
							id: res.data, // 새로 만든 프로젝트 id.
							creatorId: cId,
						},
					}, ()=>console.log('make new project. id=', this.state.project.id));
				})
				.catch(err => console.log(err));
		} else {
			Pas.fetchBy(pId)
				.then(res => {
					this.setState({ project: res.data }, ()=>this.props.showTitle(this.state.project.longTitle));
				})
				.catch(err => console.log(err));
		}
	}

	// componentDidUpdate(prevProps, prevState) {
	// 	console.log('ProjectDescription.componentDidUpdate', prevProps, prevState);
	// }

	handleCreatorRegion(text) {
		console.log(text);
	}

	handleUpdateTitles = (longTitle, shortTitle) => {
		// console.log('ProjectDescription.updateTitles', longTitle, shortTitle, this.state.project);
		let temp = {...this.state.project};
		temp.longTitle = longTitle;
		temp.shortTitle = shortTitle;
		this.setState({project:temp}, ()=>this.updateTitles());
	}

	handleUpdateContent = (text)=>{
		let temp = {...this.state.project};
		temp.content = text;
		this.setState({project:temp}, ()=>this.updateContent());
	}

	updateTitles = ()=>{
		Pas.update(this.state.project)
		.then(res=>{
			console.log('Update project title to DB.', res.data);
			this.props.showTitle(this.state.project.longTitle);
		})
		.catch(err=>console.log(err));
	}

	updateContent = ()=>{
		Pas.update(this.state.project)
		.then(res=>{
			console.log('Update project content to DB.', res.data);
		})
		.catch(err=>console.log(err));
	}

	render() {
		console.log('ProjectDescription.render project=', this.state.project);
		const {longTitle, shortTitle} = this.state.project;
		// const longTitle = this.state.project.longTitle;
		// const shortTitle = this.state.project.shortTitle;
		console.log('long, short', longTitle, shortTitle);

		return (
			<Container fluid='md' style={{ textAlign: 'left' }}>
				<p></p>
				<ListGroup>
					<ListGroup.Item as='div' action variant='light'>
						<InputProjectTitle longTitle={longTitle} shortTitle={shortTitle} handleSave={this.handleUpdateTitles} />
					</ListGroup.Item>
					<ListGroup.Item as='div' action variant='light'>
						<UploadProjectImage mainImg={this.state.project.mainImg} />
					</ListGroup.Item>
					<ListGroup.Item as='div' action variant='light'>
						<CustomTextArea
							title='프로젝트 요약'
							desc='후원자 분들에게 본 프로젝트를 간략하게 소개해 봅시다'
							placeholder='프로젝트 요약을 입력해주세요'
							minlen='10'
							maxlen='100'
							value={this.state.project.content} 
							handleText={this.handleUpdateContent}/>
					</ListGroup.Item>
					<ListGroup.Item as='div' action variant='light'>
						<SelectProjectCategory
							title='프로젝트 카테고리'
							desc='프로젝트의 성격에 맞는 카테고리를 선택해 주세요. (프로젝트 성격과 맞지 않는 카테고리를 선택하실 시 후원자가 해당 프로젝트를 찾기 어려워지기에 에디터에 의해 조정될 수 있습니다.)'
							placeholder='프로젝트 카테고리를 정해주세요.'
						/>
					</ListGroup.Item>
					{/* <ListGroup.Item  as='div' action variant='light'>
						<SetProjectURL />
					</ListGroup.Item>
					<ListGroup.Item  as='div' action variant='light'>
						<InputTags />
					</ListGroup.Item>
				</ListGroup>
				<p></p>
				창작자 정보
				<ListGroup>
					<ListGroup.Item  as='div' action variant='light'>
						<CustomFile
							title='프로필 이미지'
							desc='창작자님 개인이나 팀의 사진을 올려주세요. 얼굴이 나온 사진을 넣으면 프로젝트의 신뢰성 향상에 도움이 됩니다.
							파일 형식은 jpg, png 또는 gif로, 사이즈는 가로 200px, 세로 200px 이상으로 올려주세요.'
						/>
					</ListGroup.Item>
					<ListGroup.Item  as='div' action variant='light'>
						<InputCreatorName />
					</ListGroup.Item>
					<ListGroup.Item  as='div' action variant='light'>
						<CustomTextArea
							title='창작자 소개'
							desc='창작자님의 이력과 간단한 소개를 써 주세요.'
							placeholder='창작자 소개를 입력해주세요.'
							minlen='10'
							maxlen='300' />
					</ListGroup.Item>
					<ListGroup.Item  as='div' action variant='light'>
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
			</Container>
		);
	}
}

export default ProjectDescription;
