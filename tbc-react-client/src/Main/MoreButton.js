import React, { Component } from 'react';
import { Button } from '@material-ui/core';

class MoreButton extends Component{
    render() {
        return (
            <div style={{display:'inline', marginLeft: 800, marginRight: 800}}>
            <br/><br/><br/>
                <Button 
                    style={{
                        backgroundColor: 'white',
                        borderRadius: 20,
                        fontSize: 16,
                        paddingLeft: 30,
                        paddingRight: 30,
                        border: 10,
                        borderColor:'black',
                        color:'black',
                        fontWeight:'bold',
                    }} href="#">
                            전체 프로젝트 더보기
                </Button>
            <br/><br/><br/>
                
            </div>
        )
    }
}

export default MoreButton;
