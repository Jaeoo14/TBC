import React, { Component } from 'react';
import { Container, ListGroup, Row, Col, Button, Table } from 'react-bootstrap';

import Pas from '../ProjectApiService';
import FundingGoalAmount from './FundingGoalAmount';
import FundDateTime from './FundDateTime';

import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import EditIcon from '@material-ui/icons/Edit';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

export default class FundingAndReward extends Component {
	clearState = {
		editFundingGoalAmount: false,
		editFundingStart: false,
		editFundingEnd: false,
	};

	state = {
		project: undefined,
		...this.clearState,
	};

	handleClose = () => this.setState({ ...this.clearState });

	startEdit = (e, target) => {
		e.preventDefault();
		this.setState({ ...this.clearState }, () => this.setState({ [target]: true }));
	};

	componentDidMount = () => {
		Pas.fetchBy(this.props.pId)
			.then(res =>
				this.setState({ project: res.data }, () => {
					console.log('FR.componentDidMount', this.state, this.props);
				}),
			)
			.catch(console.log);
	};

	componentDidUpdate = (prevProps, prevState) => {
		console.log('FR.componentDidUpdate props', prevProps, this.props);
		console.log('FR.componentDidUpdate state', prevState, this.state);
	};

	handleProject = (column, value) => {
		let _project = { ...this.state.project };
		_project[column] = value;
		this.setState({ project: _project }, () => this.updateProject());
	};

	updateProject = () => {
		Pas.update(this.state.project)
			.then(res => {
				console.log('Update project content to DB.', res.data);
				this.handleClose();
			})
			.catch(console.log);
	};

	render() {
		if (this.state.project === undefined) return null;
		return (
			<Container fluid='md' style={{ textAlign: 'left' }}>
				<h6>펀딩 목표 설정</h6>
				<ListGroup>
					<ListGroup.Item as='div' action>
						{this.state.editFundingGoalAmount ? (
							<div>
								<FundingGoalAmount
									minGoal={5000}
									value={this.state.project.fundingGoalAmount}
									handleProject={this.handleProject}
									handleClose={this.handleClose}
								/>
							</div>
						) : (
							<div onClick={e => this.startEdit(e, 'editFundingGoalAmount')}>
								<div>
									<h6>목표 금액</h6>
									{this.state.project.fundingGoalAmount === 0 ? (
										<div style={{ color: 'tomato' }}>
											<ArrowRightIcon fontSize='small' />
											목표 금액을 입력해주세요.
										</div>
									) : (
										<h6>{Number(this.state.project.fundingGoalAmount).toLocaleString()}원</h6>
									)}
								</div>
								<div style={{ textAlign: 'right', color: 'tomato' }}>
									<EditIcon fontSize='small' />
									{this.state.project.fundingGoalAmount === 0 ? '입력하기' : '수정하기'}
								</div>
							</div>
						)}
					</ListGroup.Item>
				</ListGroup>
				<h6>펀딩 기간 설정</h6>
				<ListGroup>
					<ListGroup.Item as='div' action>
						{this.state.editFundingStart ? (
							<div>
								<FundDateTime
									title='프로젝트 공개일시'
									desc='심사 승인 후, 설정하신 일시에 프로젝트가 자동으로 공개됩니다.'
									columnName='fundingStart'
									value={this.state.project.fundingStart}
									handleProject={this.handleProject}
									handleClose={this.handleClose}
								/>
							</div>
						) : (
							<div onClick={e => this.startEdit(e, 'editFundingStart')}>
								<div>
									<h6>프로젝트 공개일시</h6>
									{this.state.project.fundingStart === '' ? (
										<div style={{ color: 'tomato' }}>
											<ArrowRightIcon fontSize='small' />
											프로젝트 공개일시를 입력해주세요.
										</div>
									) : (
										<h6>{new Date(this.state.project.fundingStart).toLocaleString()}</h6>
									)}
								</div>
								<div style={{ textAlign: 'right', color: 'tomato' }}>
									<EditIcon fontSize='small' />
									{this.state.project.fundingStart === '' ? '입력하기' : '수정하기'}
								</div>
							</div>
						)}
					</ListGroup.Item>
					<ListGroup.Item as='div' action>
						{this.state.editFundingEnd ? (
							<div>
								<FundDateTime
									title='프로젝트 마감일'
									desc='프로젝트는 공개일시 부터 최대 30일 동안 진행하실 수 있고 마감일 자정에 종료됩니다.'
									columnName='editFundingEnd'
									value={this.state.project.fundingEnd}
									min={this.state.project.fundStart}
									handleProject={this.handleProject}
									handleClose={this.handleClose}
								/>
							</div>
						) : (
							<div onClick={e => this.startEdit(e, 'editFundingEnd')}>
								<div>
									<h6>프로젝트 마감일</h6>
									{this.state.project.fundingEnd === '' ? (
										<div style={{ color: 'tomato' }}>
											<ArrowRightIcon fontSize='small' />
											프로젝트 마감일을 입력해주세요.
										</div>
									) : (
										<h6>{new Date(this.state.project.fundingEnd).toLocaleString()}</h6>
									)}
								</div>
								<div style={{ textAlign: 'right', color: 'tomato' }}>
									<EditIcon fontSize='small' />
									{this.state.project.fundingEnd === '' ? '입력하기' : '수정하기'}
								</div>
							</div>
						)}
					</ListGroup.Item>
				</ListGroup>
				<h6>선물 구성</h6>
				<ListGroup>
					<ListGroup.Item as='div' action>
						없습니다.
					</ListGroup.Item>
				</ListGroup>
			</Container>
		);
	}
}
