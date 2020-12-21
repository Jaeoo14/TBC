import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import ProjectApiService from '../ProjectApiService';
import Cards from './Cards';
import MainItem from './MainItem';

class Main extends Component {
	state = {
		lists: [],
	};
	componentDidMount() {
		this.viewStateIng();
	}
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
	render() {
		if (this.state.lists.length === 0) return null;
		return (
			<div style={{ display: 'inline' }}>
				<div style={{ display: 'inline-flex' }}>
					<Carousel style={{ width: '1275px' }}>
						{this.state.lists.map(list => (
							<Carousel.Item>
								<div onClick={() => this.props.history.push({ pathname: '/detail', state: list })}>
								<MainItem 
									key={list.id} pId={list.id} 
									content={list.content} shortTitle={list.shortTitle} 
									longTitle={list.longTitle} />
								</div>
							</Carousel.Item>
						))}
					</Carousel>
				</div>
				<Cards />
			</div>
		);
	}
}

export default Main;
