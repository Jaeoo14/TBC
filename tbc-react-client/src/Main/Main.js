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
		this.viewProjectList();
	}

	viewProjectList = () => {
		ProjectApiService.projectList()
			.then(res => {
				this.setState({ lists: res.data }, console.log('projectList 값', res.data));
			})
			.catch(console.log);
	};

	// {/* <Carousel.Item>
	//   <a href="#">
	//   <img
	//     className="d-block w-100"
	//     src="http://ipsumimage.appspot.com/1275x400?text=First slide&bg=373940"
	//     alt="First slide"
	//     style={{height:400, width: 1500}}
	//   />
	//   </a>
	//   <Carousel.Caption>
	//     <h3>First slide label</h3>
	//     <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
	//   </Carousel.Caption>
	// </Carousel.Item> */}

	render() {
		if (this.state.lists.length === 0) return null;
		return (
			<div style={{ display: 'inline' }}>
				<div style={{ display: 'inline-flex' }}>
					<Carousel style={{ width: '1275px' }}>
						{this.state.lists.map(list => (
							<Carousel.Item>
								<div onClick={() => this.props.history.push({ pathname: '/detail', state: list })}>
								<MainItem key={list.id} pId={list.id} content={list.content} shortTitle={list.shortTitle} longTitle={list.longTitle} />
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
