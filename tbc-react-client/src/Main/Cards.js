import { Button } from '@material-ui/core';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Card, CardDeck } from 'react-bootstrap';
import './pagination.css';
import './Card.css';
import jquery from 'jquery'
import ProjectApiService from '../ProjectApiService';
import Carousel from 'react-elastic-carousel';
import ReactDOM from "react-dom";
import FavoriteIcon from '@material-ui/icons/Favorite';
import NotFavoriteIcon from '@material-ui/icons/FavoriteBorderOutlined';
import MoreButton from './MoreButton';
import DisplayImage from '../components/DisplayImage';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ];

class Cards extends Component {
    
        componentDidMount() {
            window.$ = window.jQuery = jquery;
            this.viewProjectList();
            // this.viewRemainDate();
            this.viewCountProject();
        }
    
        constructor(props) {
            super(props);

            this.state = {
                lists: [],
                count: 0,
            };
        };
        viewCountProject = () => {

            ProjectApiService.countProject()
            .then(res => {
                this.setState({ count : res.data });
                console.log('viewCountProject의 값', res.data)
            })
            .catch(err => {
                console.error('Discover.js의 viewCountProject() 에러!', err);
            })
        }
        viewProjectList = () => {

            ProjectApiService.projectList()
            .then(res => {
                this.setState({ lists : res.data });
                console.log('projectList 값', res.data)
    
            })
            .catch(err => {
                console.error('Discover.js의 viewProjectList() 에러!', err);
            })
        }
        toggleLike = (id) => {
            console.log(`id = > ${id}`);
            const localLiked = !this.state.liked;        
            this.setState({ liked : localLiked });
        };
            render() {
            return (
                
            <div style={{display: 'inline'}}>
                
            <div style={{width:1500, display: 'inline-flex', verticalAlign: 'center',marginTop:50}}>
                 {/* <h4 style={{textAlign:"center"}}>주목할 만한 프로젝트</h4> */}
                 <Carousel breakPoints={breakPoints}>
                   {this.state.lists.map(list => 
                <div className='Card' >
                    <CardDeck  >
                            {/* //     좋아요기능      */}
                            <Card.Link href="#">
                            <Card style={{width: 240}}>
                                 <div style={{float:"right"}} onClick={() => this.toggleLike()}>
                                  {this.state.liked === false ? <NotFavoriteIcon /> : <FavoriteIcon color="secondary" />} 
                              </div>
                            {/* <Card.Img variant="top" src={list.mainImg} style={{ height: 180}} /> */}
                            <DisplayImage pId={this.props.id} width="280px" height="240px" />
                            <Card.Body>
                              <Card.Subtitle style={{fontSize: 10, textAlign: 'left'}}>
                                    {list.category} | {list.creatorId}
                              </Card.Subtitle>
                              <Card.Title>{list.shortTitle}</Card.Title>
                              <Card.Text style={{fontSize: 15}}>
                                    {list.content}
                              </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                              <small className="text-muted"><span style={{color:"#ff4646", fontSize:15}}> nnn%</span></small>
                            </Card.Footer>
                          </Card>
                    </Card.Link>
                    </CardDeck>
                </div>
                    )}
                </Carousel>
                    </div>
                    <MoreButton />
                    </div>
                   
                    
        
        );
    }
}


const rootElement = document.getElementById("root");
ReactDOM.render(<Cards />, rootElement);
export default Cards;
