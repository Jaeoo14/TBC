import React, { Component } from 'react';
import { Button, Container, Row, Form } from 'react-bootstrap';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

class TextArea extends Component {
	state = {
		remain: this.props.maxlen,
		text: this.props.value,
	};
	
	render() {
		const { title, desc, placeholder, minlen, cols, rows } = this.props;
        const { remain, text } = this.state;

		return (
			<Container>
				<Row style={{ justifyContent: 'flex-end'}}>
				<Form.Control as='textarea' placeholder={placeholder} cols={cols} rows={rows} value={text} />
					<Button variant='secondary mr-1' size='sm'>
						<CloseIcon />
						취소하기
					</Button>
					<Button variant='primary' size='sm'>
						<CheckIcon />
						저장하기
					</Button>
				</Row>
			</Container>
		);
	}
}

TextArea.defaultProps = {
	value: '',
	minlen: 0,
	title: '',
	desc: '',
	cols: 200,
	rows: 3,
};

export default TextArea;