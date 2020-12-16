import React, { Component } from 'react';

import { Tabs, Tab, Badge } from 'react-bootstrap';
import ProjectDescription from './ProjectDescription';
import FundingAndReward from './FundingAndReward';

import './EditProject.css';

// pId : project.id
// cId : project.creatorId

class EditProject extends Component {
	state = {
		projectTitle: '제목미정',
	}

	showTitle = (title) => {
		this.setState({projectTitle: title});
	}

	render() {
		const { pId, cId } = this.props;
		console.log('EditProject.render', 'pId=', pId, 'cId=', cId);

		return (
			<div>
				<h3 id='projectTitle'>
					<Badge variant='secondary'>준비 중</Badge>
					{this.state.projectTitle === '' ? '제목미정' : this.state.projectTitle}
				</h3>
				<Tabs defaultActiveKey='projectDescription' id='uncontrolled-tab-example' >
					<Tab eventKey='projectDescription' title='프로젝트 개요'  style={{backgroundColor:'#eee'}}>
						<ProjectDescription pId={pId} cId={cId} showTitle={this.showTitle}/>
					</Tab>
					<Tab eventKey='FundingAndReward' title='펀딩 및 선물 구성'  style={{backgroundColor:'#eee'}}>
						<FundingAndReward pId={pId} />
					</Tab>
				</Tabs>
			</div>
		);
	}
}

export default EditProject;
