import React, { useState } from 'react';
import { Form, Button, Container, Row } from 'react-bootstrap';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

const CustomFile = (props) => {
    const { title, desc } = props;

    const [image, setImage] = useState(null);

    const handleSave = () => { }

    return (
        <Container>
            <Row>
                <Form.Group>
                    <Form.Label column='sm' style={{ fontWeight: 'bolder', color: 'black' }}>{title}</Form.Label>
                    {desc !== '' && <Form.Label column='sm' >{desc}</Form.Label>}
                    <Form.File id="project-image" label="" />
                </Form.Group>
            </Row>
            <Row style={{ justifyContent: 'flex-end' }}>
                <Button variant='primary' size='sm' onClick={handleSave}><CheckIcon />닫기</Button>
            </Row>
        </Container>
    );
};

export default CustomFile;
