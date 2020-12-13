import React, { Component } from 'react';

import { Form, Button, Container, Row } from 'react-bootstrap';
import CheckIcon from '@material-ui/icons/Check';
// import CloseIcon from '@material-ui/icons/Close';

import Pas from '../ProjectApiService';

export default class UploadProjectImage extends Component {
	state = {
		file: undefined,
		info: undefined,
	};

	componentDidMount() {}

	componentDidUpdate(prevProps, prevState) {}

	selectFile = e => {
		this.setState({ file: e.target.files[0] }, () => console.log(this.state));
	};

	uploadFile = () => {
		Pas.upload(this.state.file)
			.then(res => Pas.getFile(res.data))
			.then(res => this.setState({ info: res.data }, ()=>console.log('UploadProjectImage', this.state)))
			.catch(err => console.log(err));
	};

	render() {
		return (
			<Container>
				<Row>
					<Form.Group>
						<Form.Label column='sm' style={{ fontWeight: 'bolder', color: 'black' }}>
							프로젝트 대표 이미지
						</Form.Label>
						<Form.File id='project-image' label='' onChange={this.selectFile} />
					</Form.Group>
				</Row>
				<Row style={{ justifyContent: 'flex-end' }}>
					<Button variant='primary' size='sm' onClick={this.uploadFile}>
						<CheckIcon />
						저장하기
					</Button>
				</Row>
			</Container>
		);
	}
}
