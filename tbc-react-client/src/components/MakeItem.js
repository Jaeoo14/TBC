import React, { Component } from 'react';
import { Button, Form, Row } from 'react-bootstrap';
import CustomInput from './CustomInput';
import CustomTextArea from './CustomTextArea';

import Pas from '../ProjectApiService';

import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

class MakeItem extends Component {
	state = {
		name: '',
		opt: '0',
		opt1Msg: '',
		opt2Msg: '',
	};

	componentDidMount = () => {
		console.log('MakeItem.componentDidMount item=', this.props);
		const item = this.props.updateItem;
		if (item === undefined)
			return;

		this.setState(
			{
				name: item.name,
				opt: String(item.opt),
			},
			() => {
				console.log(this.state, item);
				if (String(item.opt) === '1') this.setState({ opt1Msg: item.message }, ()=>console.log(this.state));
				else if (String(item.opt) === '2') this.setState({ opt2Msg: item.message }, ()=>console.log(this.state));
			},
		);
	};

	componentDidUpdate(prevProps, prevState) {
		if (this.props !== prevProps) {
			this.componentDidMount();
		}
	}

	handleClose = () => {
		this.props.handleClose();
	};

	handleSave = () => {
		let item = {
			name: this.state.name,
			opt: this.state.opt,
			message: '',
		};

		if (this.state.opt === '1') item.message = this.state.opt1Msg;
		else if (this.state.opt === '2') item.message = this.state.opt2Msg;

		if (this.props.updateItem === undefined) {
			Pas.postItem(item)
				.then(res => {
					console.log('item=', item);
					this.handleClose();
				})
				.catch(err => console.log(err));
		} else {
			item.id = this.props.updateItem.id;
			Pas.putItem(item)
			// .then(res => this.setState({name: '', opt: '0', opt1Msg: '', opt2Msg: ''}, ()=>this.handleClose())
			.then(res => this.handleClose())
			.catch(err => console.log(err));
		}
	};

	handleName = text => this.setState({ name: text }, ()=>console.log(this.state));
	handleOpt = e => this.setState({ opt: e.target.value }, ()=>console.log(this.state));
	handleOpt1Msg = text => this.setState({ opt1Msg: text }, ()=>console.log(this.state));
	handleOpt2Msg = text => this.setState({ opt2Msg: text }, ()=>console.log(this.state));

	// handleItem = (name, value) => {
	//   this.setState({[name]:value});
	// }

	render() {
		return (
			<Form>
				<Form.Group controlId='make-item'>
					<Form.Label>아이템 만들기</Form.Label>
					<CustomInput
						header=''
						width='50%'
						title='아이템 이름'
						desc=''
						placeholder='새로 만들 아이템의 이름을 입력해주세요.'
						minlen='0'
						maxlen='50'
						value={this.state.name}
						handleText={this.handleName}
					/>
				</Form.Group>
				<fieldset>
					<Form.Group controlId='item-option'>
						<Form.Label>옵션조건</Form.Label>
						<Form.Check type='radio' name='option-type' value='0' checked={this.state.opt === '0'} label='옵션이 필요 없는 아이템입니다.' onChange={this.handleOpt} />
						<Form.Check
							type='radio'
							name='option-type'
							value='1'
							checked={this.state.opt === '1'} 
							label='주관식 옵션이 필요한 아이템입니다. (각인, 메시지 등)'
							onChange={this.handleOpt}
						/>
						{this.state.opt === '1' && (
							<CustomTextArea
								placeholder='후원자에게 안내할 메시지를 작성해 주세요.
            예시) 사이즈, 메시지 순으로 작성해 주세요.'
								maxlen='100'
								handleText={this.handleOpt1Msg}
								noButtons={true}
								value={this.state.opt1Msg}
							/>
						)}
						<Form.Check
							type='radio'
							name='option-type'
							value='2'
							checked={this.state.opt === '2'} 
							label='객관식 옵션이 필요한 아이템입니다. (사이즈, 색상 등)'
							onChange={this.handleOpt}
						/>
						{this.state.opt === '2' && (
							<CustomTextArea
								placeholder='옵션 항목을 입력해 주세요.
            옵션 항목은 줄바꿈으로 구분됩니다.
            예시) 블랙 - 230mm
            화이트 - 240mm'
								maxlen='500'
								handleText={this.handleOpt2Msg}
								rows={5}
								noButtons={true}
								value={this.state.opt2Msg}
							/>
						)}
					</Form.Group>
				</fieldset>
				<Row style={{ justifyContent: 'flex-end' }}>
					<Button variant='secondary mr-1' size='sm' onClick={this.handleClose}>
						<CloseIcon fontSize='small' />
						취소하기
					</Button>
					<Button variant='primary' size='sm' onClick={this.handleSave}>
						<CheckIcon fontSize='small' />
						{(this.props.updateItem === undefined) ? '저장하기' : '수정하기'}
					</Button>
				</Row>
			</Form>
		);
	}
}

export default MakeItem;
