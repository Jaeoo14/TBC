import React, { useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import CustomInput from './CustomInput';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

const InputProjectTitle = () => {
    const [title, setTitle] = useState('');
    const [shortTitle, setShortTitle] = useState('');

    const handleProjectTitle = (text) => setTitle(text);
    const handleProjectShortTitle = (text) => setShortTitle(text);

    const handleSave = () => { alert(`long: ${title}, short: ${shortTitle}`); }

    return (
        <Container>
            <Row>
                <Col xs={8}>
                    <CustomInput title='프로젝트 제목' placeholder='제목을 입력해 주세요.' maxlen='32' handleText={handleProjectTitle} />
                </Col>
                <Col>
                    <CustomInput title='프로젝트 짧은 제목' placeholder='짧은 제목을 입력해 주세요.' maxlen='7' handleText={handleProjectShortTitle} />
                </Col>
            </Row>
            <Row style={{ justifyContent: 'flex-end' }}>
                <Button variant='secondary mr-1' size='sm'><CloseIcon />취소하기</Button>
                <Button variant='primary' size='sm' onClick={handleSave}><CheckIcon />저장하기</Button>
            </Row>
        </Container>
    );
};

export default InputProjectTitle;
