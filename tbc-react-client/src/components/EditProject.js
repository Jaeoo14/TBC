import React, { Component } from 'react';

import { Tabs, Tab, Badge } from 'react-bootstrap';
import ProjectDescription from './ProjectDescription';
import FundingAndReward from './FundingAndReward';

import './EditProject.css';

class EditProject extends Component {
	state = {
		projectTitle: '제목미정',

		id : this.props.location.state.id,
		creatorId : this.props.location.state.creatorId,
	}

	componentDidMount() {
		this.setState({		
			id : this.props.location.state.id,
			creatorId : this.props.location.state.creatorId,
		});
	}

	componentDidUpdate(prevProps) {
		// will be true
		if (this.props.location !== prevProps.location) {
			this.setState({		
				id : this.props.location.state.id,
				creatorId : this.props.location.state.creatorId,
			});
		}

    // INCORRECT, will *always* be false because history is mutable.
    // const locationChanged = this.props.history.location !== prevProps.history.location;
	}

	showTitle = (title) => {
		this.setState({projectTitle: title});
	}

	render() {
		console.log('EditProject.render', this.state);

		return (
			<div>
				<h3 style={{textAlign:'center'}}>
					<Badge variant='secondary'>준비 중</Badge>
					{this.state.projectTitle === '' ? '제목미정' : this.state.projectTitle}
				</h3>
				<Tabs defaultActiveKey='projectDescription' id='uncontrolled-tab-example' >
					<Tab eventKey='projectDescription' title='프로젝트 개요'>
						<ProjectDescription pId={this.state.id} cId={this.state.creatorId} showTitle={this.showTitle}/>
					</Tab>
					<Tab eventKey='FundingAndReward' title='펀딩 및 선물 구성'>
						<FundingAndReward pId={this.state.id} />
					</Tab>
				</Tabs>
			</div>
		);
	}
}

export default EditProject;
