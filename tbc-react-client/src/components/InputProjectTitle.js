import React, { Component } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import CustomInput from './CustomInput';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

class InputProjectTitle extends Component {
	constructor(props) {
		// console.log('InputProjectTitle.constructor');
		super(props);

		this.state = {
			longTitle: this.props.longTitle,
			shortTitle: this.props.shortTitle,
		}
	}

	componentDidMount() {
		// console.log('InputProjectTitle:componentDidMount', 'props:', this.props, 'state:', this.state);
		this.setState({
			longTitle: this.props.longTitle,
			shortTitle: this.props.shortTitle,
		});
	}

	componentDidUpdate(prevProps, prevState) {
		// console.log('InputProjectTitle.componentDidUpdate prev', prevProps, prevState);
		// console.log('InputProjectTitle.componentDidUpdate now', this.props, this.state);

		if (prevProps.longTitle !== this.props.longTitle)
			this.setState({longTitle: this.props.longTitle});
			
		if (prevProps.shortTitle !== this.props.shortTitle)
			this.setState({shortTitle: this.props.shortTitle});
	}

	handleSave = () => {
		// console.log('save:', this.state.longTitle, this.state.shortTitle);
		this.props.handleSave(this.state.longTitle, this.state.shortTitle)
	};

	handleProjectLongTitle = text => this.setState({ longTitle: text });
	handleProjectShortTitle = text => this.setState({ shortTitle: text });

	render() {
		// console.log('InputProjectTitle:render', 'props:', this.props, 'state:', this.state);

		return (
			<Container>
				<h6>프로젝트 제목</h6>
				<Form.Group>
					<Form.Text className='text-muted'>
						프로젝트에 멋진 제목을 붙여주세요. 감정에 호소하는 제목보다는 만드시려는 창작물, 작품명, 혹은 프로젝트의 주제가 드러나게 써주시는 것이
						좋습니다. 공간이 부족한 곳에 쓰일 7자 이내의 짧은 제목도 정해주세요.
					</Form.Text>
				</Form.Group>
				<Row>
					<Col xs={8}>
						<CustomInput
							header=''
							title='프로젝트 제목'
							desc=''
							placeholder='제목을 입력해 주세요.'
							maxlen='32'
							handleText={this.handleProjectLongTitle}
							value={this.state.longTitle}
						/>
					</Col>
					<Col>
						<CustomInput
							header=''
							title='프로젝트 짧은 제목'
							desc=''
							placeholder='짧은 제목을 입력해 주세요.'
							maxlen='7'
							handleText={this.handleProjectShortTitle}
							value={this.state.shortTitle}
						/>
					</Col>
				</Row>
				<Row style={{ justifyContent: 'flex-end' }}>
					<Button variant='secondary mr-1' size='sm'>
						<CloseIcon />
						취소하기
					</Button>
					<Button variant='primary' size='sm' onClick={this.handleSave}>
						<CheckIcon />
						저장하기
					</Button>
				</Row>
			</Container>
		);
	}
}

export default InputProjectTitle;
