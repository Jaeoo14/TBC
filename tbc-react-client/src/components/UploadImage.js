import React, { Component } from 'react';

import { Form, Button, Container, Row } from 'react-bootstrap';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

import Pas from '../ProjectApiService';

export default class UploadImage extends Component {
	state = {
		file: undefined,
    info: undefined,

    projectId: this.props.projectId, // set project main image or
    creatorId: this.props.creatorId,    // set user profile image.
	};

	componentDidMount() {
    console.log('UploadImage.componentDidMount', this.state);
    if (typeof this.props.mainImg !== 'undefined')
      this.getImage(this.props.mainImg);
	}

	componentDidUpdate(prevProps, prevState) {
    if (prevProps.mainImg !== this.props.mainImg) 
      this.getImage(this.props.mainImg);
  }
  
  getImage(id) {
		Pas.getFile(id)
			.then(res => this.setState({ info: res.data }))
			.catch(err => console.log(err));
  }

	selectFile = e => {
		this.setState({ file: e.target.files[0] }, () => console.log('select image file:', this.state));
	};

	uploadFile = () => {
    console.log('UploadImage.uploadFile', this.state, this.props);

		if (typeof this.state.info !== 'undefined') {
			Pas.updateFile(this.state.file, this.state.info.id)
				.then(res => Pas.getFile(this.state.info.id))
				.then(res => this.setState({ info: res.data }, this.updateObserver))
				.catch(err => console.log(err));
		} else {
			Pas.upload(this.state.file)
				.then(res => Pas.getFile(res.data))
				.then(res => this.setState({ info: res.data }, this.updateObserver))
				.catch(err => console.log(err));
		}
  };
  
  updateObserver = ()=>{
    if (this.state.projectId !== undefined) {
      Pas.fetch(this.state.projectId)
        .then(res=>{
          res.data.mainImg = this.state.info.id;
          Pas.update(res.data);
        })
        .then(this.props.handleClose)
        .catch(console.log)
    }

    if (this.state.creatorId !== undefined) {
      Pas.getUser(this.state.creatorId)
        .then(res=>{
          res.data.profileImg = this.state.info.id;
          Pas.updateUser(res.data);
        })
        .then(this.props.handleClose)
        .catch(console.log)
    }
  }

	render() {
		const imgSrc = typeof this.state.info !== 'undefined' ? `data:${this.state.info.type};base64,${this.state.info.data}` : '';
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
