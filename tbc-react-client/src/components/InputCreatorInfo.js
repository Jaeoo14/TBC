import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import CustomInput from './CustomInput';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

const InputCreatorInfo = ({title, desc, placeholder, maxlen, value, columnName, handleClose, handleCreator}) => {
    const [text, setText] = useState(value);

    const handleSave = () =>handleCreator(columnName, text);

    return (
        <Container>
            <Row>
                <CustomInput
                    header=''
                    title={title}
                    desc={desc}
                    placeholder={placeholder}
                    maxlen={maxlen}
                    width='50%'
                    handleText={setText}
                    value={text}
                />
            </Row>
            <Row style={{ justifyContent: 'flex-end' }}>
                <Button variant='secondary mr-1' size='sm' onClick={handleClose}><CloseIcon />취소하기</Button>
                <Button variant='primary' size='sm' onClick={handleSave}><CheckIcon />저장하기</Button>
            </Row>
        </Container>
    );
};

export default InputCreatorInfo;
