import React, { useState } from 'react';
import { Button, Container, Row, Form } from 'react-bootstrap';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

const CustomTextArea = ({ title, desc, placeholder, minlen, maxlen }) => {
    const [remain, setRemain] = useState(maxlen);
    const [text, setText] = useState('');

    const handleChange = (e) => {
        if (remain < 1)
            return;

        setRemain(maxlen - e.target.value.length);
        setText(e.target.value);
    };

    const handleSave = () => {alert(text);}

    return (
        <Container>
            <Row>
                <Form.Group controlId="project-description">
                    <Form.Label column='sm' style={{ fontWeight: 'bolder', color: 'black' }}>{title}</Form.Label>
                    <Form.Label column='sm' >{desc}</Form.Label>
                    <Form.Control as="textarea" placeholder={placeholder} cols={200} rows={3} value={text} onChange={handleChange} />
                    <Form.Text className='text-muted'>
                        {text.length < minlen && `최소${minlen} / `} {remain}자 남았습니다.
                    </Form.Text>
                </Form.Group>
            </Row>
            <Row style={{ justifyContent: 'flex-end' }}>
                <Button variant='secondary mr-1' size='sm'><CloseIcon />취소하기</Button>
                <Button variant='primary' size='sm' disabled={text.length < minlen} onClick={handleSave}><CheckIcon />저장하기</Button>
            </Row>
        </Container>
    );
};

export default CustomTextArea;
