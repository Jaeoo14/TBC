import React, { Component } from 'react';

import { Form, Button, Container, Row } from 'react-bootstrap';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

import Pas from '../ProjectApiService';

export default class UploadProjectImage extends Component {
	state = {
		file: undefined,
		info: undefined,
	};

	componentDidMount() {
		console.log('UploadProjectImage.componentDidMount', this.props.mainImg);
		if (typeof this.props.mainImg === 'undefined') return;
		Pas.getFile(this.props.mainImg)
			.then(res => this.setState({ info: res.data }, () => console.log('UploadProjectImage', this.state)))
			.catch(err => console.log(err));
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.mainImg === this.props.mainImg) return;

		Pas.getFile(this.props.mainImg)
			.then(res => this.setState({ info: res.data }, () => console.log('UploadProjectImage', this.state)))
			.catch(err => console.log(err));
	}

	selectFile = e => {
		this.setState({ file: e.target.files[0] }, () => console.log(this.state));
	};

	uploadFile = () => {
		if (typeof this.state.info !== 'undefined') {
			Pas.updateFile(this.state.file, this.state.info.id)
				.then(res => Pas.getFile(this.state.info.id))
				.then(res => this.setState({ info: res.data }, () => console.log('UploadProjectImage', this.state)))
				.catch(err => console.log(err));
		} else {
			Pas.upload(this.state.file)
				.then(res => Pas.getFile(res.data))
				.then(res => this.setState({ info: res.data }, () => console.log('UploadProjectImage', this.state)))
				.catch(err => console.log(err));
		}
	};

	render() {
		const imgSrc = typeof this.state.info !== 'undefined' ? `data:image/png;base64,${this.state.info.data}` : '';
		return (
			<Container>
				<Row>
					<Form.Group>
						<Form.Label column='sm' style={{ fontWeight: 'bolder', color: 'black' }}>
							{this.props.title}
						</Form.Label>
						<Form.Text className='text-muted'>{this.props.desc}</Form.Text>
						<Form.File id='project-image' label='' onChange={this.selectFile} />
						<p>
							현재 이미지 {this.state.info && this.state.info.id}:{this.state.info && this.state.info.name}
						</p>
						<img src={imgSrc} alt='' width='100px' />
					</Form.Group>
				</Row>
				<Row style={{ justifyContent: 'flex-end' }}>
					<Button variant='secondary' size='sm'>
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
