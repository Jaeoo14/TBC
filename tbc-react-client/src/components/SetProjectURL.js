import React, { useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import CustomInput from './CustomInput';

const SetProjectURL = () => {
    const minlen = 3;
    const [url, setUrl] = useState('');

    const handleChange = (text) => {
        setUrl(text)
    }

    const handleSave = () => {
        alert(url);
    }

    return (
        <Container>
            <Row>
                <CustomInput 
                    header='https://tumblbug.com/'
                    title='프로젝트 페이지 주소' 
                    desc='프로젝트 페이지로 접속할 수 있는 주소(URL)를 설정해주세요.' 
                    minlen={minlen}
                    maxlen='28'
                    width='50%'
                    handleText={handleChange}
                    />
            </Row>
            <Row style={{ justifyContent: 'flex-end' }}>
                <Button variant='secondary mr-1' size='sm'><CloseIcon />취소하기</Button>
                <Button variant='primary' size='sm' disabled={url.length < minlen} onClick={handleSave}><CheckIcon />저장하기</Button>
            </Row>
        </Container>
    );
};

export default SetProjectURL;
