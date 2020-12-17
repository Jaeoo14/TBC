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
		}, ()=>{ if (this.props.noButtons) this.handleSave(); });
	};

	handleSave = () => {
		if (this.props.columnName)
			this.props.handleText(this.props.columnName, this.state.text);
		else
			this.props.handleText(this.state.text);
	};

	render() {
        const { title, desc, placeholder, minlen, cols, rows } = this.props;
        const { remain, text } = this.state;

		return (
			<Container>
				<Row>
					<Form.Group controlId='project-description'>
						{title !== '' && 
						<Form.Label column='sm' style={{ fontWeight: 'bolder', color: 'black' }}>
							{title}
						</Form.Label>}
						{desc !== '' && <Form.Label column='sm'>{desc}</Form.Label>}
						<Form.Control as='textarea' placeholder={placeholder} cols={cols} rows={rows} value={text} onChange={this.handleChange} />
						<Form.Text className='text-muted'>
							<span style={{color:'tomato'}}>{minlen !== '' && text.length < minlen && `최소${minlen} / `}</span> {remain}자 남았습니다.
						</Form.Text>
					</Form.Group>
				</Row>
				{ !this.props.noButtons && 
				<Row style={{ justifyContent: 'flex-end' }}>
					<Button variant='secondary mr-1' size='sm' onClick={this.props.handleClose}>
						<CloseIcon fontSize='small'/>취소하기</Button>
					<Button variant='primary' size='sm' disabled={text.length < minlen} onClick={this.handleSave}>
						<CheckIcon fontSize='small'/>저장하기</Button>
				</Row>}
			</Container>
		);
	}
}

CustomTextArea.defaultProps = {
	value: '',
	minlen: 0,
	title: '',
	desc: '',
	cols: 200,
	rows: 3,
	noButtons: false,
};

export default CustomTextArea;
