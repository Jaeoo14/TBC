import React, { Component } from 'react';

import { Form, Button, Container, Row } from 'react-bootstrap';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

import Pas from '../ProjectApiService';

export default class UploadProfileImage extends Component {
	state = {
    user: undefined,
    
		file: undefined,
		info: undefined,
	};

	getImage(id) {
		Pas.getFile(id)
			.then(res => this.setState({ info: res.data }, ()=>console.log('UploadProfileImage.getImage', this.state, this.props)))
			.catch(err => console.log(err));
	}

	componentDidMount() {
		Pas.getUser(this.props.creatorId)
			.then(res => this.setState({ user: res.data }, ()=>this.getImage(this.state.user.profileImg)))
			.catch(console.log);
	}

	componentDidUpdate(prevProps, prevState) {
    if (prevProps.creatorId === this.props.creatorId) return;
    
		Pas.getUser(this.props.creatorId)
			.then(res => this.setState({ user: res.data }, this.getImage(this.state.user.profileImg)))
			.catch(console.log);
	}

	selectFile = e => {
		this.setState({ file: e.target.files[0] }, () => console.log('UploadProfileImage.selectFile:', this.state));
	};

	uploadFile = () => {
		console.log('UploadProfileImage.uploadFile', this.state, this.props);

		if (this.state.user.profileImg === 0) {
			Pas.upload(this.state.file)
				.then(res => Pas.getFile(res.data))
				.then(res => this.setState({ info: res.data, user: { ...this.state.user, profileImg: res.data.id } }, this.updateObserver))
				.catch(err => console.log(err));
		} else {
			Pas.updateFile(this.state.file, this.state.user.profileImg)
				.then(res => Pas.getFile(this.state.user.profileImg))
				.then(res => this.setState({ info: res.data }, this.props.handleClose))
				.catch(err => console.log(err));
		}
	};

	updateObserver = () => {
		Pas.updateUser(this.state.user).then(this.props.handleClose).catch(console.log);
	};

	render() {
		console.log('UploadProfileImage.render', this.state);
		const imgSrc = typeof this.state.info !== 'undefined' ? `data:${this.state.info.type};base64,${this.state.info.data}` : '';
		return (
			<Container>
				<Row>
					<Form.Group>
						<Form.Label column='sm' style={{ fontWeight: 'bolder', color: 'black' }}>
							{this.props.title}
						</Form.Label>
						<Form.Text className='text-muted'>{this.props.desc}</Form.Text>
						<Form.File id='profile-image' label='' onChange={this.selectFile} />
						<p>
							현재 이미지 {this.state.info && this.state.info.id}:{this.state.info && this.state.info.name}
						</p>
						<img src={imgSrc} alt='' width='25%' />
					</Form.Group>
				</Row>
				<Row style={{ justifyContent: 'flex-end' }}>
					<Button variant='secondary' size='sm' onClick={this.props.handleClose}>
						<CloseIcon />
						취소하기
					</Button>
					<Button variant='primary' size='sm' onClick={this.uploadFile} disabled={typeof this.state.file === 'undefined'}>
						<CheckIcon />
						저장하기
					</Button>
				</Row>
			</Container>
		);
	}
}
