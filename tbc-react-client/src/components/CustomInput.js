import React, { Component } from 'react';
import { Form, InputGroup } from 'react-bootstrap';

class CustomInput extends Component {
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
		if (this.props.maxlen - e.target.value.length < 0) return;

		this.setState({
			remain: this.props.maxlen - e.target.value.length,
			text: e.target.value,
		});

		this.props.handleText(e.target.value);
	};

	render() {
		const { title, desc, placeholder, minlen, maxlen, width, header } = this.props;

		return (
			<Form.Group>
				<Form.Label column='sm' style={{ fontWeight: 'bolder', color: 'black' }}>
					{title}
				</Form.Label>
				{desc !== '' && <Form.Label column='sm'>{desc}</Form.Label>}
				{header !== '' ? (
					<InputGroup size='sm'>
						<InputGroup.Prepend>
							<InputGroup.Text id='basic-addon3' style={{ backgroundColor: 'skyblue' }}>
								{header}
							</InputGroup.Text>
						</InputGroup.Prepend>
						<Form.Control
							style={{ width: width }}
							type={this.props.type}
							placeholder={placeholder}
							size='sm'
							onChange={this.handleChange}
							value={this.state.text}
						/>
					</InputGroup>
				) : (
					<Form.Control
						style={{ width: width }}
						type={this.props.type}
						placeholder={placeholder}
						size='sm'
						onChange={this.handleChange}
						value={this.state.text}
					/>
				)}
				{minlen && maxlen && 
				<Form.Text className='text-muted'>
					<span style={{color:'tomato'}}>{minlen !== '' && this.state.text.length < minlen && `최소${minlen} / `}</span> {this.state.remain}자 남았습니다.
				</Form.Text>}
			</Form.Group>
		);
	}
}

CustomInput.defaultProps = {
	value: '',
	type:'text',
};

export default CustomInput;
