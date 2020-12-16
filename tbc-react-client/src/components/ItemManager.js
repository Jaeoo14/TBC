import React, { Component } from 'react';
import { Button, Container, ListGroup, Modal, Row, Col, Table } from 'react-bootstrap';

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

		showMakeItem: false,
		updateItem: undefined,
	};

	readItemList = () => {
		Pas.getItems()
			.then(res => {
				this.setState({ items: res.data }, () => console.log('ItemManager.readItemList items=', this.state.items));
			})
			.catch(err => console.log(err));
	};

	handleClose = () => {
		this.setState({ show: false, showMakeItem:false, updateItem:undefined }, ()=>console.log('ImageManager:handleClose', this.state));
	};

	handleShow = () => {
		console.log('ImageManager:handleShow', this.state);
		this.setState({ show: true });
		this.readItemList();
	};

	handleAddItem = () => {
		this.setState({showMakeItem : true});
	};

	handleUpdateItem = (item)  => {
		this.setState({showMakeItem : true, updateItem:item});
	};

	handleMakeItemClose = () => {
		this.setState({showMakeItem : false, updateItem:undefined});
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

	handleDeleteItem = id => {
		if (!window.confirm('아이템을 삭제하시겠습니까?'))
			return;
		
		Pas.deleteItem(id)
			.then(res => Pas.getItems())
			.then(res => this.setState({ items: res.data, newItem: {}, temp1: '', temp2: '' }, () => console.log(this.state)))
			.catch(err => console.log(err))
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
								<Row style={{textAlign:'center'}}>
									<Col>
									<strong>아이템 만들기</strong><br/>
									<sup>선물 구성에 추가할 아이템을 만듭니다.</sup>
									</Col>
								</Row>
								<Row className='mt-1'  style={{textAlign:'center'}}>
									<Col>
									<Button variant='outline-danger' size='sm' onClick={this.handleAddItem}>
										<AddCircleOutlineIcon />아이템 추가하기</Button>
									</Col>
								</Row>
							</ListGroup.Item>
						</ListGroup>}
						{this.state.showMakeItem && <ListGroup id='addItem-2'>
							<ListGroup.Item as='div' action>
								<MakeItem updateItem={this.state.updateItem} handleClose={this.handleMakeItemClose} />
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
