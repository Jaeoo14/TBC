import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const CustomInput = ({ title, desc, placeholder, minlen, maxlen, width, handleText }) => {
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
		<Form.Group>
			<Form.Label column='sm' style={{ fontWeight: 'bolder', color: 'black' }}>{title}</Form.Label>
			<Form.Label column='sm' >{desc}</Form.Label>
			<Form.Control style={{ width: width }} type='text' placeholder={placeholder} size='sm' onChange={handleChange} value={text} />
			<Form.Text className='text-muted'>
				{(minlen !== '' && text.length < minlen) && `최소${minlen} / `} {remain}자 남았습니다.
			</Form.Text>
		</Form.Group>
	);
};

export default CustomInput;
