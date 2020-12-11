import React, { useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import CustomInput from './CustomInput';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

const InputTags = () => {
    const [tags, setTags] = useState('');

    const handleTags = (text) => {
        setTags(text)
    }

    const handleSave = () => {
        alert(tags);
    }

    const minLength = 2;

    return (
        <Container>
            <Row>
                <CustomInput
                    width='100%'
                    desc='내외부 검색 엔진에서 프로젝트가 잘 검색될 수 있도록, 사람들이 검색할만한 프로젝트의 핵심 단어를 입력해주세요.
                    여러 개의 태그를 입력하시는 경우 쉼표(,)로 구분하여 작성하실 수 있습니다.
                    프로젝트와 관련 없거나 검색에 불리한 키워드는 운영진에 의해 조정될 수 있습니다.
                    쉼표를 제외한 특수문자는 입력하실 수 없습니다.'
                    title='검색용 태그'
                    placeholder='예시: 소설,탐정,추리'
                    minlen={minLength}
                    maxlen='125'
                    handleText={handleTags}
                />
            </Row>
            <Row style={{ justifyContent: 'flex-end' }}>
                <Button variant='secondary mr-1' size='sm'><CloseIcon />취소하기</Button>
                <Button variant='primary' size='sm' disabled={tags.length < minLength} onClick={handleSave}><CheckIcon />저장하기</Button>
            </Row>
        </Container>
    );
};

export default InputTags;
