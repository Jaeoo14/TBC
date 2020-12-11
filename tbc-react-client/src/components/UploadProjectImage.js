import React, { useState } from 'react';
import { Form, Button, Container, Row } from 'react-bootstrap';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

const UploadProjectImage = () => {
    const [image, setImage] = useState(null);

    const handleSave = () => { }

    return (
        <Container>
            <Row>
                <Form.Group>
                    <Form.Label column='sm' style={{ fontWeight: 'bolder', color: 'black' }}>프로젝트 대표 이미지</Form.Label>
                    <Form.File id="project-image" label="" />
                </Form.Group>
            </Row>
            <Row style={{ justifyContent: 'flex-end' }}>
                <Button variant='primary' size='sm' onClick={handleSave}><CheckIcon />닫기</Button>
            </Row>
        </Container>
    );
};

export default UploadProjectImage;
