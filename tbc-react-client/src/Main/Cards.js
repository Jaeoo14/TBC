import { Button } from '@material-ui/core';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardDeck } from 'react-bootstrap';
import './pagination.css';
import './Card.css';
import jquery from 'jquery';
import ProjectApiService from '../ProjectApiService';
import Carousel from 'react-elastic-carousel';
import ReactDOM from 'react-dom';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NotFavoriteIcon from '@material-ui/icons/FavoriteBorderOutlined';
import MoreButton from './MoreButton';
import DisplayImage from '../components/DisplayImage';
import CreatorName from '../member/components/CreatorName';
import CardItem from './CardItem';
import { withRouter } from 'react-router';
const breakPoints = [
	{ width: 1, itemsToShow: 1 },
	{ width: 550, itemsToShow: 2, itemsToScroll: 2 },
	{ width: 768, itemsToShow: 3 },
	{ width: 1200, itemsToShow: 4 },
];

class Cards extends Component {
	componentDidMount() {
		window.$ = window.jQuery = jquery;
		this.viewProjectList();
		// this.viewProjectList2();
		// this.getCategoryId();
	}

	constructor(props) {
		super(props);

		this.state = {
			lists: [],
			list2: [],
            category: 0,
		};
	}
	viewProjectList = () => {
		ProjectApiService.projectList()
			.then(res => {
				this.setState({ lists: res.data });
				console.log('projectList 값', res.data);
			})
			.catch(err => {
				console.error('Cards.js의 viewProjectList() 에러!', err);
			});
	};
	// viewProjectList2 = () => {
	// 	ProjectApiService.projectList()
	// 		.then(res => {
	// 			this.setState({ list2: res.data });
	// 			console.log('projectList 값', res.data);
	// 		})
	// 		.catch(err => {
	// 			console.error('Cards.js의 viewProjectList() 에러!', err);
	// 		});
	// };
	toggleLike = id => {
		console.log(`id = > ${id}`);
		const localLiked = !this.state.liked;
		this.setState({ liked: localLiked });
	};
  //상태별
  viewStateIng = () => {
    ProjectApiService.stateIng()
      .then((res) => {
        this.setState({ lists: res.data });
        console.log("stateIng 값", res.data);
      })
      .catch((err) => {
        console.error("Cards.js의 stateIng() 에러!", err);
      });
  };

  viewStateEnd = () => {
    ProjectApiService.stateEnd()
      .then((res) => {
        this.setState({ list2: res.data });
        console.log("stateEnd 값", res.data);
      })
      .catch((err) => {
        console.error("Cards.js의 stateEnd() 에러!", err);
      });
  };



//상세페이지랑 연결시에 꼭 들어가야함!
gotoEditProject = (_id, _creatorId) => {
    this.props.history.push({
        pathname: '/editproject',
        state: {
            id: _id, // 현재 클릭한 프로젝트 아이디
            creatorId: _creatorId, // 현재 로그인한 사용자 아이디
        },
    });
};
	render() {
		return (
			<div style={{ display: 'inline' }}>
					<h4 style={{textAlign:"center", fontWeight: 'bold'}}>진행중인 프로젝트</h4>
				<div style={{ width: 1500, display: 'inline-flex', verticalAlign: 'center', marginTop: 50 }}>
					<Carousel breakPoints={breakPoints}>
						{this.state.lists.map(list => (
							<div onClick={() => this.props.history.push({ pathname: '/detail', state:list})}>
                                <CardItem
									project={list} 
									
									/>
                            </div>
						))}
					</Carousel>
				</div>
				<br/><br/><br/>
						<h4 style={{textAlign:"center", fontWeight: 'bold'}}>성사된 프로젝트</h4>
				<div style={{ width: 1500, display: 'inline-flex', verticalAlign: 'center', marginTop: 50 }}>
					<Carousel breakPoints={breakPoints}>
						{this.state.list2.map(list => (
                            <div onClick={() => this.props.history.push({ pathname: '/detail', state:list})}>
                                <CardItem
									project={list} 
									
									/>
                            </div>
						))}
					</Carousel>
				</div>
						<MoreButton />
				
			</div>
		);
	}
}

export default withRouter(Cards);
