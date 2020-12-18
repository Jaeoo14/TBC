import React, { Component } from 'react';
import { Button, Container, Row, Form } from  'react-bootstrap';
import { Box } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
 

class Comment extends Component {

	handleSave = () => {
        
		this.props.handleComment(this.state.comment);
    };
    
	componentDidMount() {
		this.setState({
            comment: this.props.comment,
		});
	}
	state = {
        comment: this.props.comment,
		remain: this.props.maxlen,
		text: this.props.value,
    };

    handleComment = text => this.setState({ comment: text });

	render() {
        const { title, desc, placeholder, minlen, cols, rows ,width, } = this.props;
        const { remain, text } = this.state;
        
        return (
            <div>
                <Container>
                    <Row style={{ justifyContent: 'flex-end'}}>
                    <ModeCommentIcon style={{color:'black', height:30, marginTop:20}}/>
                    <Form.Control
						style={{width: 500, marginLeft:10, marginTop:20}}
						placeholder={"댓글을 입력해주세요."}
						size='sm'
                        handleText={this.handleComment}
						value={this.state.comment}
					/>
                    <Button variant='primary' size='sm' onClick={this.handleSave} style={{height:30, marginTop:20}}><CheckIcon/>저장</Button>
                    </Row>
                </Container>
            </div>
                

            
        )
    }
}

Comment.defaultProps = {
        value: '',
        type:'text'
};


export default Comment;