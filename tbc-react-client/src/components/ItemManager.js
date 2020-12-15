import React, { Component } from 'react';
import { Button, Container, Modal } from 'react-bootstrap';

import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

import './ItemManager.css'

class ItemManager extends Component {
	state = {
		show: false,
	};

	handleClose = () => this.setState({ show: false });
	handleShow = () => this.setState({ show: true });

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
          </Modal.Body>
					<Modal.Footer>
						<Button variant='primary' size='sm' onClick={this.handleClose}><CheckIcon/>닫기</Button>
					</Modal.Footer>
				</Modal>
      </Container>
		);
	}
}

export default ItemManager;
