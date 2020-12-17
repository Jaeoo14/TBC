import React, { Component } from 'react';

import { Button, Container, Row } from 'react-bootstrap';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import CustomInput from './CustomInput';

class SetProjectURL extends Component {
	state = {
		url: this.props.value,
	};

	componentDidMount() {
		this.setState({
			url: this.props.value,
		});
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.value !== this.props.value)
			this.setState({
				url: this.props.value,
			});
	}

	handleChange = url => {
		this.setState({
			url: url,
		});
	};

	handleSave = () => this.props.handleProject('url', this.state.url);

	render() {
		const { minlen, maxlen } = this.props;

		return (
			<Container>
				<Row>
					<CustomInput
						header='http://localhost:3000/'
						title='프로젝트 페이지 주소'
						desc='프로젝트 페이지로 접속할 수 있는 주소(URL)를 설정해주세요.'
						minlen={minlen}
						maxlen={maxlen}
						width='50%'
						handleText={this.handleChange}
            value={this.state.url}
					/>
				</Row>
				<Row style={{ justifyContent: 'flex-end' }}>
					<Button variant='secondary mr-1' size='sm' onClick={this.props.handleClose}>
						<CloseIcon />취소하기</Button>
					<Button variant='primary' size='sm' disabled={this.state.url.length < minlen} onClick={this.handleSave}>
						<CheckIcon />
						저장하기
					</Button>
				</Row>
			</Container>
		);
	}
}

SetProjectURL.defaultProps = {
    value:'',
}

export default SetProjectURL;
