import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import DisplayImage from '../components/DisplayImage';

class MainItem extends Component{
    
    render() {
        return (
            <div>
                 <Carousel.Item>
                <a href="#">
                {/* <img
                  className="d-block w-100"
                  src="http://ipsumimage.appspot.com/1275x400?text=First slide&bg=373940"
                  alt="First slide"
                  style={{height:400, width: 1500}}
                /> */}
                <DisplayImage pId={this.props.project.id} width="1275px" height="400px" >
                <Carousel.Caption>
                  <h3>{this.props.project.shortTitle}</h3>
                  <p>{this.props.project.content}</p>
                </Carousel.Caption>
                </DisplayImage>
                </a>
                
              </Carousel.Item>
            </div>
        )
    }
}

export default MainItem;
