import React, { Component } from 'react';
import { Button, Container, ListGroup, Modal, Row, Table } from 'react-bootstrap';

import Pas from '../ProjectApiService';

import CheckIcon from '@material-ui/icons/Check';
// import CloseIcon from '@material-ui/icons/Close';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
// import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

import MakeItem from './MakeItem';

import './ItemManager.css';

class ItemManager extends Component {
	state = {
		show: false,
		items: [],
		newItem: {},
		temp1: '',
		temp2: '',
		showMakeItem: false,
	};

	readItemList = () => {
		Pas.getItems()
			.then(res => {
				this.setState({ items: res.data }, () => console.log('ItemManager.readItemList items=', this.state.items));
			})
			.catch(err => console.log(err));
	};

	handleClose = () => {
		console.log('ImageManager:handleClose', this.state);
		this.setState({ show: false });
	};

	handleShow = () => {
		console.log('ImageManager:handleShow', this.state);
		this.setState({ show: true });
		this.readItemList();
	};

	handleAddItem = () => {
		this.setState({showMakeItem : true});
	};

	handleMakeItemClose = () => {
		this.setState({showMakeItem : false});
		this.readItemList();
	}

	componentDidMount() {
		// console.log('ImageManager:componentDidMount', this.state);
		// if (this.state.show)
		// 	this.readImageList();
	}

	componentDidUpdate(prevProps, prevState) {
		// console.log('ImageManager:componentDidUpdate', this.state, prevState);
		// if (this.state.show && this.state.items !== prevState.items)
		// 	this.readImageList();
	}

	handleTemp1 = text => this.setState({ temp1: text });
	handleTemp2 = text => this.setState({ temp2: text });

	handleNewItem = (name, value) => {
		this.setState({ newItem: { ...this.state.newItem, [name]: value } }, () => console.log(this.state.newItem));
	};

	handleItemName = name => {
		this.handleNewItem('name', name);
	};

	handleItemOption = e => {
		this.handleNewItem('opt', e.target.value);
	};

	handleDeleteItem = id =>
		Pas.deleteItem(id)
			.then(res => Pas.getItems())
			.then(res => this.setState({ items: res.data, newItem: {}, temp1: '', temp2: '' }, () => console.log(this.state)))
			.catch(err => console.log(err));

	handleUpdateItem = item =>
		Pas.putItem(item)
			.then(res => Pas.getItems())
			.then(res => this.setState({ items: res.data, newItem: {}, temp1: '', temp2: '' }, () => console.log(this.state)))
			.catch(err => console.log(err));

	handleSave = () => {
		let msg = '';
		if (this.state.newItem.opt === '1') msg = this.state.temp1;
		else if (this.state.newItem.opt === '2') msg = this.state.temp2;

		this.handleNewItem('message', msg);

		Pas.postItem(this.state.newItem)
			.then(res => Pas.getItems())
			.then(res => this.setState({ items: res.data, newItem: {}, temp1: '', temp2: '' }, () => console.log(this.state)))
			.catch(err => console.log(err));
	};

	render() {
		return (
			<Container>
				<Button variant='primary' onClick={this.handleShow} size='sm'>
					아이템 관리하기
				</Button>

				<Modal show={this.state.show} onHide={this.handleClose} backdrop='static' keyboard={false} dialogClassName='modal-90w'>
					<Modal.Header closeButton>
						<Modal.Title>아이템 관리하기</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						{!this.state.showMakeItem && <ListGroup id='addItem-1'>
							<ListGroup.Item as='div' action>
								<Row>
									<strong>아이템 만들기</strong>
									<sub>선물 구성에 추가할 아이템을 만듭니다.</sub>
								</Row>
								<Row className='mt-1'>
									<Button variant='outline-danger' size='sm' onClick={this.handleAddItem}>
										<AddCircleOutlineIcon />
										아이템 추가하기
									</Button>
								</Row>
							</ListGroup.Item>
						</ListGroup>}
						{this.state.showMakeItem && <ListGroup id='addItem-2'>
							<ListGroup.Item as='div' action>
								<MakeItem handleClose={this.handleMakeItemClose} />
							</ListGroup.Item>
						</ListGroup>}
						<hr></hr>
						<div>아이템 목록</div>
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
								{this.state.items.map(item => (
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
								))}
							</tbody>
						</Table>
					</Modal.Body>
					<Modal.Footer>
						<Button variant='primary' size='sm' onClick={this.handleClose}>
							<CheckIcon />
							닫기
						</Button>
					</Modal.Footer>
				</Modal>
			</Container>
		);
	}
}

export default ItemManager;
