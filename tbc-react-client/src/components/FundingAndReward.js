import React, { Component } from 'react';
import { Container, ListGroup, Row, Col, Button, Table } from 'react-bootstrap';

import Pas from '../ProjectApiService';
import FundingGoalAmount from './FundingGoalAmount';
import FundDateTime from './FundDateTime';

import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

export default class FundingAndReward extends Component {
	state = {
		project: {},
	};

	componentDidMount = () => {
		console.log('FundingAndReward.componentDidMount pId=', this.props.pId);

		Pas.fetchBy(this.props.pId)
			.then(res => {
				this.setState({ project: res.data }, () => console.log('FundingAndReward.componentDidMount project=', this.state.project));
			})
			.catch(err => console.log(err));
	};

	componentDidUpdate = (prevProps, prevState) => {
		console.log('FundingAndReward.componentDidUpdate props', prevProps, this.props);
		console.log('FundingAndReward.componentDidUpdate state', prevState, this.state);
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
		return (
			<Container fluid='md' style={{ textAlign: 'left' }}>
				<h6>펀딩 목표 설정</h6>
				<ListGroup>
					<ListGroup.Item className='mt-1' as='div' action variant='light'>
						<FundingGoalAmount value={this.state.project.fundingGoalAmount} handleProject={this.handleProject} />
					</ListGroup.Item>
				</ListGroup>
				<h6>펀딩 기간 설정</h6>
				<ListGroup>
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
				<h6>선물 구성</h6>
				<ListGroup>
					<ListGroup.Item as='div' action >
						<Row style={{ textAlign: 'center' }}>
							<Col>
								<strong>선물 추가하기</strong><br />
								<sup>후원자분들에게 드릴 새로운 선물을 만듭니다.</sup>
							</Col>
						</Row>
						<Row className='mt-1' style={{ textAlign: 'center' }}>
							<Col>
								<Button variant='outline-danger' onClick={this.handleAddReward} size='sm'>
									<AddCircleOutlineIcon />추가하기</Button>
							</Col>
						</Row>
					</ListGroup.Item>
					<ListGroup.Item>
						{!this.state.showMakeItem && (
							<ListGroup id='addItem-1'>
								<ListGroup.Item as='div' action>
									<Row style={{ textAlign: 'center' }}>
										<Col>
											<strong>선물 추가하기</strong>
											<br />
											<sup>후원자 분들에게 드릴 선물 내용을 입력해주세요.</sup>
										</Col>
									</Row>
									<Row className='mt-1' style={{ textAlign: 'center' }}>
										<Col>
											<Button variant='outline-danger' size='sm' onClick={this.handleAddItem}>
												<AddCircleOutlineIcon />
												아이템 추가하기
											</Button>
										</Col>
									</Row>
								</ListGroup.Item>
							</ListGroup>
						)}
						{this.state.showMakeItem && (
							<ListGroup id='addItem-2'>
								<ListGroup.Item as='div' action>
									Make reward
									{/* <MakeItem updateItem={this.state.updateItem} handleClose={this.handleMakeItemClose} /> */}
								</ListGroup.Item>
							</ListGroup>
						)}
						<hr></hr>
						<div>선물에 포함된 아이템</div>
						<Table hover responsive size='sm'>
							<thead style={{ backgroundColor: '#eee' }}>
								<tr>
									<th>ID</th>
									<th>이름</th>
									<th>옵션</th>
									<th></th>
									<th></th>
								</tr>
							</thead>
							<tbody>
								{/* {this.state.items.map(item => (
									<tr key={item.id}>
										<td>{item.id}</td>
										<td>{item.name}</td>
										<td>{item.opt}</td>
										<td style={{ textAlign: 'left' }}>{item.message}</td>
										<td style={{ textAlign: 'right' }}>
											<Button variant='outline-primary mr-1' size='sm' onClick={() => this.handleUpdateItem(item)}>
												수정하기
											</Button>
											<Button variant='outline-danger' size='sm' onClick={() => this.handleDeleteItem(item.id)}>
												삭제하기
											</Button>
										</td>
									</tr>
								))} */}
							</tbody>
						</Table>
					</ListGroup.Item>
				</ListGroup>
			</Container>
		);
	}
}
