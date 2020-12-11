import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
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
            <h6>프로젝트 제목</h6>
            <Form.Group>
                <Form.Text className='text-muted'>프로젝트에 멋진 제목을 붙여주세요. 감정에 호소하는 제목보다는 만드시려는 창작물, 작품명, 혹은 프로젝트의 주제가 드러나게 써주시는 것이 좋습니다.
            공간이 부족한 곳에 쓰일 7자 이내의 짧은 제목도 정해주세요.</Form.Text>
            </Form.Group>
            <Row>
                <Col xs={8}>
                    <CustomInput
                        header=''
                        title='프로젝트 제목'
                        desc=''
                        placeholder='제목을 입력해 주세요.'
                        maxlen='32' handleText={handleProjectTitle} />
                </Col>
                <Col>
                    <CustomInput header='' title='프로젝트 짧은 제목' desc='' placeholder='짧은 제목을 입력해 주세요.' maxlen='7' handleText={handleProjectShortTitle} />
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
