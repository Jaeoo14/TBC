import React, { useState } from 'react';
import { Form, Button, Container, Row, InputGroup } from 'react-bootstrap';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

const SetProjectURL = () => {
    const minlen = 3;
    const maxlen = 28;
    const title = '프로젝트 페이지 주소';
    const desc = '프로젝트 페이지로 접속할 수 있는 주소(URL)를 설정해주세요.';
    const width = '50%';

    const [url, setUrl] = useState('');
    const [remain, setRemain] = useState(maxlen);

    const handleChange = (text) => {
        setUrl(text)
    }

    const handleSave = () => {
        alert(url);
    }

    return (
        <Container>
            <Row>
                <Form.Group>
                    <Form.Label column='sm' style={{ fontWeight: 'bolder', color: 'black' }}>{title}</Form.Label>
                    <Form.Label column='sm' >{desc}</Form.Label>
                    <InputGroup className="mb-3" size='sm'>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon3" style={{ backgroundColor: 'skyblue' }}>https://tumblbug.com/</InputGroup.Text>
                        </InputGroup.Prepend>

                        {/* <Form.Control id="basic-url" aria-describedby="basic-addon3" /> */}
                        {/* <Form.Control style={{ width: width }} type='text' placeholder={placeholder} size='sm' onChange={handleChange} value={text} /> */}
                        <Form.Control style={{ width: width }} type='text' size='sm' onChange={handleChange} value={url} />

                        <Form.Text className='text-muted'>
                            {(minlen !== '' && url.length < minlen) && `최소${minlen} / `} {remain}자 남았습니다.
			            </Form.Text>
                    </InputGroup>
                </Form.Group>
            </Row>
            <Row style={{ justifyContent: 'flex-end' }}>
                <Button variant='secondary mr-1' size='sm'><CloseIcon />취소하기</Button>
                <Button variant='primary' size='sm' disabled={url.length < minlen} onClick={handleSave}><CheckIcon />저장하기</Button>
            </Row>


        </Container>
    );
};

export default SetProjectURL;
