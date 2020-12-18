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
                        border: 1,
                        borderColor:'black',
                        color:'#6d6d6d',
                        fontWeight:'bold',
                    }} href="#">
                            @@ 프로젝트 더보기
                </Button>
            <br/><br/><br/>
                
            </div>
        )
    }
}

export default MoreButton;
