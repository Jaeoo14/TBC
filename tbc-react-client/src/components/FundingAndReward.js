import React, { Component } from 'react';
import { Container, ListGroup } from 'react-bootstrap';

import Pas from '../ProjectApiService';
import FundingGoalAmount from './FundingGoalAmount';
import FundDateTime from './FundDateTime';

export default class FundingAndReward extends Component {
	state = {
		project: {},
	};

	componentDidMount = () => {
    console.log('FundingAndReward.componentDidMount pId=', this.props.pId);

		Pas.fetchBy(this.props.pId)
			.then(res => {
				this.setState({ project: res.data }, ()=>console.log('FundingAndReward.componentDidMount project=', this.state.project));
			})
			.catch(err => console.log(err));
	}

  componentDidUpdate = (prevProps, prevState) => {
    console.log('FundingAndReward.componentDidUpdate props', prevProps, this.props);
    console.log('FundingAndReward.componentDidUpdate state', prevState, this.state);
  }
  
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

  getToday = ()=>{

  }

	render() {

		return (
			<Container fluid='md' style={{ textAlign: 'left' }}>
				<ListGroup>
					<ListGroup.Item as='div' action variant='light'>
            <FundingGoalAmount value={this.state.project.fundingGoalAmount} handleProject={this.handleProject} />
					</ListGroup.Item>
					<ListGroup.Item as='div' action variant='light'>
            <FundDateTime 
              title='프로젝트 공개일시' 
              desc='심사 승인 후, 설정하신 일시에 프로젝트가 자동으로 공개됩니다.'
              columnName='fundingStart'
              value={this.state.project.fundingStart} 
              handleProject={this.handleProject}
              />
					</ListGroup.Item>
					<ListGroup.Item as='div' action variant='light'>
            <FundDateTime 
              title='프로젝트 마감일' 
              desc='프로젝트는 공개일시 부터 최대 60일 동안 진행하실 수 있고 마감일 자정에 종료됩니다.'
              columnName='fundingEnd'
              value={this.state.project.fundingEnd} 
              min={this.state.project.fundStart}
              handleProject={this.handleProject}
              />
					</ListGroup.Item>
				</ListGroup>
			</Container>
		);
	}
}
