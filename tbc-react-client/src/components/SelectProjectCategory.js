import React, { useState } from 'react';
import { Form, Row, Button } from 'react-bootstrap';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

const SelectProjectCategory = ({ title, desc, placeholder }) => {
    const [category, setCategory] = useState('');

    const handleSave = () => { alert(category) }

    return (
        <Form>
            <Row>
                <Form.Group controlId="select-project-category">
                    <Form.Label column='sm' style={{ fontWeight: 'bolder', color: 'black' }}>{title}</Form.Label>
                    <Form.Label column='sm' >{desc}</Form.Label>
                    <Form.Control as="select" size='sm' style={{ width: '30%' }} custom onChange={e => setCategory(e.target.value)}>
                        <option value="" selected disabled>{placeholder}</option>
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                        <option value="hamster">Hamster</option>
                        <option value="parrot">Parrot</option>
                        <option value="spider">Spider</option>
                        <option value="goldfish">Goldfish</option>
                    </Form.Control>
                </Form.Group>
            </Row>
            <Row style={{ justifyContent: 'flex-end' }}>
                <Button variant='secondary mr-1' size='sm'><CloseIcon />취소하기</Button>
                <Button variant='primary' size='sm' disabled={category === ''} onClick={handleSave}><CheckIcon />저장하기</Button>
            </Row>
        </Form>
    );
};

export default SelectProjectCategory;
