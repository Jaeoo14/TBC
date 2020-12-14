import React, { Component } from 'react';
import { Button, Container, Row, Form } from 'react-bootstrap';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

class CustomTextArea extends Component {
	state = {
		remain: this.props.maxlen,
		text: this.props.value,
    };
    
	componentDidMount() {
		this.setState({
			remain: this.props.maxlen - this.props.value.length,
			text: this.props.value,
		});
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.value !== this.props.value)
			this.setState({
				remain: this.props.maxlen - this.props.value.length,
				text: this.props.value,
			});
	}

	handleChange = e => {
		if (this.props.maxlen - e.target.value.length < 0)
			return;

		this.setState({
			remain: this.props.maxlen - e.target.value.length,
			text: e.target.value,
		});
	};

	handleSave = () => {
		this.props.handleProject(this.props.columnName, this.state.text);
	};

	render() {
        const { title, desc, placeholder, minlen } = this.props;
        const { remain, text } = this.state;

		return (
			<Container>
				<Row>
					<Form.Group controlId='project-description'>
						<Form.Label column='sm' style={{ fontWeight: 'bolder', color: 'black' }}>
							{title}
						</Form.Label>
						<Form.Label column='sm'>{desc}</Form.Label>
						<Form.Control as='textarea' placeholder={placeholder} cols={200} rows={3} value={text} onChange={this.handleChange} />
						<Form.Text className='text-muted'>
							{text.length < minlen && `최소${minlen} / `} {remain}자 남았습니다.
						</Form.Text>
					</Form.Group>
				</Row>
				<Row style={{ justifyContent: 'flex-end' }}>
					<Button variant='secondary mr-1' size='sm'>
						<CloseIcon />
						취소하기
					</Button>
					<Button variant='primary' size='sm' disabled={text.length < minlen} onClick={this.handleSave}>
						<CheckIcon />
						저장하기
					</Button>
				</Row>
			</Container>
		);
	}
}

CustomTextArea.defaultProps = {
	value: '',
};

export default CustomTextArea;
