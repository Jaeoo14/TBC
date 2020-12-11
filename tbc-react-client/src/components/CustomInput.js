import React, { useState } from 'react';
import { FormGroup, FormControl, FormLabel, FormText } from 'react-bootstrap';

const CustomInput = ({ title, desc, placeholder, maxlen, width, handleText }) => {
	const [remain, setRemain] = useState(maxlen);
	const [text, setText] = useState('');

	const handleChange = (e) => {
		if (remain < 1)
			return;

		setRemain(maxlen - e.target.value.length);
		setText(e.target.value);
		handleText(e.target.value);
	};

	return (
		<FormGroup>
			<FormLabel  column='sm' style={{fontWeight:'bolder', color:'black'}}>{title}</FormLabel>
			<FormLabel  column='sm' >{desc}</FormLabel>
			<FormControl style={{width:width}} type='text' placeholder={placeholder} size='sm' onChange={handleChange} value={text}/>
			<FormText className='text-muted'>{remain}자 남았습니다.</FormText>
		</FormGroup>
	);
};

export default CustomInput;
