import React, { Component } from 'react';
import { Container, Row, Button } from 'react-bootstrap';

import CustomInput from './CustomInput';

import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

class FundDateTime extends Component {
	state = {
		datetime: this.props.value,
	};

	componentDidMount() {
		this.setState({
			datetime: this.props.value,
		});
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.value !== this.props.value)
			this.setState({
				datetime: this.props.value,
			});
	}

	handleChange = (datetime) => {
		this.setState({
			datetime: datetime,
		});
	};

	handleSave = () => {
		this.props.handleProject(this.props.columnName, this.state.datetime);
	};

	render() {
    console.log('datetime=', this.state.datetime);
		return (
			<Container>
				<Row>
					<CustomInput
						header=''
						width='50%'
						title={this.props.title}
						desc={this.props.desc}
            handleText={this.handleChange}
            min={this.state.min}
						value={this.state.datetime}
						type='datetime-local'
					/>
				</Row>
				<Row style={{ justifyContent: 'flex-end' }}>
					<Button variant='secondary mr-1' size='sm' onClick={this.props.handleClose}>
						<CloseIcon />취소하기</Button>
					<Button variant='primary' size='sm' disabled={false} onClick={this.handleSave}>
						<CheckIcon />저장하기</Button>
				</Row>
			</Container>
		);
	}
}

export default FundDateTime;
