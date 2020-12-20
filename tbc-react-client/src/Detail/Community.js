import React, { Component } from 'react';
import { Button, Row } from  'react-bootstrap';
import { Box } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';
import TextArea from './TextArea';

class Community extends Component {
	
	render() {
        return (
            <div>
                <Row>
                    <div style={
                        {float:'left',
                        marginLeft:30,
                        marginBottom:10,
                        fontSize:40,
                        fontWeight:1000
                        }}>
                        커뮤니티
                    </div>
                </Row>
                <Row>
                    <div style={
                        {float:'left',
                        marginLeft:30,
                        marginBottom:30,
                        fontSize:20,
                        fontWeight:500
                        }}>
                        프로젝트에 대하여 후원자들과 소통합니다.
                    </div>
                </Row>
                    <div style={{float:"left", marginLeft:'5'}}>
                        <Box>
                            <TextArea
							placeholder='프로젝트에 대하여 이야기해주세요.'
						/>    
                        </Box>
                    </div>
                </div>
                

            
        )
    }
}

export default Community;