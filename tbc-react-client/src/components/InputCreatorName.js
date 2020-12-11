import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import CustomInput from './CustomInput';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

const InputCreatorName = () => {
    const [name, setName] = useState('');

    const handleSave = () => { alert(`name is ${name}`); }

    return (
        <Container>
            <Row>
                <CustomInput
                    header=''
                    title='창작자 이름'
                    desc='창작자님을 대표할 수 있는 이름을 써 주세요. 팀으로 진행하신다면 팀 이름을 쓰셔도 됩니다.'
                    placeholder='이름을 입력해주세요.'
                    maxlen='20'
                    width='50%'
                    handleText={setName}
                />
            </Row>
            <Row style={{ justifyContent: 'flex-end' }}>
                <Button variant='secondary mr-1' size='sm'><CloseIcon />취소하기</Button>
                <Button variant='primary' size='sm' onClick={handleSave}><CheckIcon />저장하기</Button>
            </Row>
        </Container>
    );
};

export default InputCreatorName;
