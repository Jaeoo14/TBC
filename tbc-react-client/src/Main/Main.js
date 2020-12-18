import React, {Component} from 'react';

import { Carousel } from 'react-bootstrap';
import Cards from './Cards';

class Main extends Component {

    render() {
        return (
          <div style={{display:'inline'}}>
          <div style={{display:'inline-flex'}}>
            <Carousel style={{width: '1275px'}}>
              <Carousel.Item>
                <a href="#">
                <img
                  className="d-block w-100"
                  src="http://ipsumimage.appspot.com/1275x400?text=First slide&bg=373940"
                  alt="First slide"
                  style={{height:400, width: 1500}}
                />
                </a>
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <a href="#">
                <img
                  className="d-block w-100"
                  src="http://ipsumimage.appspot.com/1275x400?text=Second slide&bg=282c34"
                  alt="Third slide"
                  style={{height:400, width: 1500}}
                />
                </a>
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <a href="#">
                <img
                  className="d-block w-100"
                  src="http://ipsumimage.appspot.com/1275x400?text=Third slide&bg=20232a"
                  alt="Third slide"
                  style={{height:400, width: 1500}}
                />
                </a>
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            
        </div>
            <Cards />
        </div>
        );
    }
}



export default Main;
