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
import CreatorName from '../member/components/CreatorName';
import CardItem from './CardItem';
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
            this.getCategoryId();
        }
    
        constructor(props) {
            super(props);

            this.state = {
                lists: [],
                project: this.props.project,
            };
        };
        // viewCountProject = () => {

        //     ProjectApiService.countProject()
        //     .then(res => {
        //         this.setState({ count : res.data });
        //         console.log('viewCountProject의 값', res.data)
        //     })
        //     .catch(err => {
        //         console.error('Discover.js의 viewCountProject() 에러!', err);
        //     })
        // }
        
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
        getCategoryId = () => {

            ProjectApiService.getCategory(this.state.category)
            .then(res => {
                this.setState({ category : res.data.id, categoryText : res.data.text });
                console.log('getCategoryId&categoryText 값', this.state.category, this.state.categoryText)
            })
            .catch(err => {
                console.error('DiscoverItem.js의 getCategoryId() 에러!', err);
            })
        }
        
            render() {
            return (
                
            <div style={{display: 'inline'}}>
                
            <div style={{width:1500, display: 'inline-flex', verticalAlign: 'center',marginTop:50}}>
                 {/* <h4 style={{textAlign:"center"}}>주목할 만한 프로젝트</h4> */}
                 <Carousel breakPoints={breakPoints}>
                   {this.state.lists.map(list => 
                <CardItem project={list} />
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
