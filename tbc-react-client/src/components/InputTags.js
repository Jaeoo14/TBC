import React, { Component } from 'react';

import { Button, Container, Row } from 'react-bootstrap';
import CustomInput from './CustomInput';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

class InputTags extends Component {
	state = {
		tags: this.props.value,
	};

	componentDidMount() {
		this.setState({
			tags: this.props.value,
		});
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.value !== this.props.value)
			this.setState({
				tags: this.props.value,
			});
	}

	handleChange = tags => {
		this.setState({
			tags: tags,
		});
	};

	handleSave = () => {
		this.props.handleProject('tags', this.state.tags);
	};

	render() {
		const { minlen, maxlen } = this.props;

		return (
			<Container>
				<Row>
					<CustomInput
						header=''
						width='100%'
						desc='검색에 사용할 프로젝트의 핵심 단어를 입력해주세요. 쉼표(,)를 제외한 특수문자는 입력하실 수 없습니다.'
						title='검색용 태그'
						placeholder='예시: 소설,탐정,추리'
						minlen={minlen}
						maxlen={maxlen}
						handleText={this.handleChange}
						value={this.state.tags}
					/>
				</Row>
				<Row style={{ justifyContent: 'flex-end' }}>
					<Button variant='secondary mr-1' size='sm' onClick={this.props.handleClose}>
						<CloseIcon fontSize='small'/>취소하기</Button>
					<Button variant='primary' size='sm' disabled={this.state.tags.length < minlen} onClick={this.handleSave}>
						<CheckIcon fontSize='small'/>저장하기</Button>
				</Row>
			</Container>
		);
	}
}

InputTags.defaultProps = {
	value: '',
};

export default InputTags;
