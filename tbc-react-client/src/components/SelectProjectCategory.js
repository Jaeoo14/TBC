import React, { Component } from 'react';

import { Form, Row, Button, Container } from 'react-bootstrap';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

import Pas from '../ProjectApiService';

class SelectProjectCategory extends Component {
	state = {
		categories: [],
		selected: this.props.value,
	};

	componentDidMount() {
		this.setState({ selected: this.props.value });
		Pas.getCategories()
			.then(
				res =>
					this.setState({
						categories: res.data,
					}),
				() => console.log(this.state.categories),
			)
			.catch(err => console.log(err));
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.value !== this.props.value) this.setState({ selected: this.props.value });
	}

	handleChange = e => {
		this.setState(
			{
				selected: e.target.value,
			},
			() => console.log('selected category=', this.state.selected),
		);
	};

	handleSave = () => {
		this.props.handleChange(this.state.selected);
	};

	render() {
		const { title, desc, placeholder } = this.props;
		return (
			<Container>
				<Row>
					<Form.Group controlId='select-project-category'>
						<Form.Label column='sm' style={{ fontWeight: 'bolder', color: 'black' }}>
							{title}
						</Form.Label>
						<Form.Label column='sm'>{desc}</Form.Label>
						<Form.Control as='select' value={this.state.selected} size='sm' style={{ width: '30%' }} custom onChange={this.handleChange}>
							<option value='0' disabled>
								{placeholder}
							</option>
							{this.state.categories.map(category => (
								<option value={category.id}>{category.text}</option>
							))}
						</Form.Control>
					</Form.Group>
				</Row>
				<Row style={{ justifyContent: 'flex-end' }}>
					<Button variant='secondary mr-1' size='sm'>
						<CloseIcon />
						취소하기
					</Button>
					<Button variant='primary' size='sm' disabled={this.state.selected === 0} onClick={this.handleSave}>
						<CheckIcon />
						저장하기
					</Button>
				</Row>
			</Container>
		);
	}
}

export default SelectProjectCategory;
