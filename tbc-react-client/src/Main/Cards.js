import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './pagination.css';
import './Card.css';
import jquery from 'jquery';
import ProjectApiService from '../ProjectApiService';
import Carousel from 'react-elastic-carousel';
import CardItem from './CardItem';
import { withRouter } from 'react-router';
import { Button } from 'react-bootstrap';

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
		this.viewStateIng();
		this.viewStateEnd();
	}
	constructor(props) {
		super(props);

		this.state = {
			lists: [],
			list1: [],
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
	toggleLike = id => {
		console.log(`id = > ${id}`);
		const localLiked = !this.state.liked;
		this.setState({ liked: localLiked });
	};
	viewStateIng = () => {
    	ProjectApiService.stateIng()
      	.then((res) => {
        this.setState({ list1: res.data });
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
					<h4 style={{textAlign:"center", fontWeight: 'bold'}}>전체 프로젝트</h4>
				<div style={{ width: 1500, display: 'inline-flex', verticalAlign: 'center', marginTop: 50 }}>
					<Carousel breakPoints={breakPoints}>
						{this.state.lists.map(list => (
							<div onClick={() => this.props.history.push({ pathname: '/detail', state:list})}>
                                <CardItem project={list} />
                            </div>
						))}
					</Carousel>
				</div>
				<br/><br/><br/>
					<a href="http://localhost:3000/discover">
						<Button variant="outline-secondary" style={{borderRadius: 20}}>전체 프로젝트 더보기</Button>
					</a>
				<br/><br/><br/><br/><br/>
						<h4 style={{textAlign:"center", fontWeight: 'bold'}}>진행중인 프로젝트</h4>
				<div style={{ width: 1500, display: 'inline-flex', verticalAlign: 'center', marginTop: 50 }}>
					<Carousel breakPoints={breakPoints}>
						{this.state.list1.map(list => (
							<div onClick={() => this.props.history.push({ pathname: '/detail', state:list})}>
                                <CardItem project={list} />
                            </div>
						))}
					</Carousel>
				</div>
				<br/><br/><br/><br/><br/>
						<h4 style={{textAlign:"center", fontWeight: 'bold'}}>성사된 프로젝트</h4>
				<div style={{ width: 1500, display: 'inline-flex', verticalAlign: 'center', marginTop: 50 }}>
					<Carousel breakPoints={breakPoints}>
						{this.state.list2.map(list => (
                            <div onClick={() => this.props.history.push({ pathname: '/detail', state:list})}>
                                <CardItem project={list} />
                            </div>
						))}
					</Carousel>
				</div>
				<br/><br/><br/><br/><br/>
			</div>
		);
	}
}

export default withRouter(Cards);
