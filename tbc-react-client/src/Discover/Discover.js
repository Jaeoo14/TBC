import { Component } from 'react';
import './Discover.css';
import { Button } from '@material-ui/core';

import CachedIcon from '@material-ui/icons/Cached';
import Arrow from '@material-ui/icons/ChevronRight';
import ProjectApiService from '../ProjectApiService';

import Item from './DiscoverItem';

class Discover extends Component {
	componentDidMount() {
		this.viewProjectList();
	}

	constructor(props) {
		super(props);

		this.state = {
			lists: [],
			id: Number,
			value: 0,
			liked: false,
			category: 0,
		};
	}

	//전체 프로젝트 보기
	viewProjectList = () => {
		ProjectApiService.projectList()
			.then(res => {
				this.setState({ lists: res.data });
				console.log('projectList 값', res.data);
			})
			.catch(err => {
				console.error('Discover.js의 viewProjectList() 에러!', err);
			});
	};

	//카테고리별
	viewCategoryBy = categoryNum => {
		ProjectApiService.categoryBy(categoryNum)
			.then(res => {
				this.setState({ lists: res.data });
				console.log('categoryBy 값', res.data);
			})
			.catch(err => {
				console.error('Discover.js의 categoryBy() 에러!', err);
			});
	};

	//필터별
	viewAlignNew = () => {
		ProjectApiService.alignNew()
			.then(res => {
				this.setState({ lists: res.data });
				console.log('alignNew 값', res.data);
			})
			.catch(err => {
				console.error('Discover.js의 alignNew() 에러!', err);
			});
	};

	viewAlignAmountPercent = () => {
		ProjectApiService.alignAmountPercent()
			.then(res => {
				this.setState({ lists: res.data });
				console.log('alignAmountPercent 값', res.data);
			})
			.catch(err => {
				console.error('Discover.js의 alignAmountPercent() 에러!', err);
			});
	};

	viewAlignFundAmount = () => {
		ProjectApiService.alignFundAmount()
			.then(res => {
				this.setState({ lists: res.data });
				console.log('alignFundAmount 값', res.data);
			})
			.catch(err => {
				console.error('Discover.js의 alignFundAmount() 에러!', err);
			});
	};

	viewAlignDate = () => {
		ProjectApiService.alignDate()
			.then(res => {
				this.setState({ lists: res.data });
				console.log('alignNew 값', res.data);
			})
			.catch(err => {
				console.error('Discover.js의 alignDate() 에러!', err);
			});
	};

	//상태별
	viewStateIng = () => {
		ProjectApiService.stateIng()
			.then(res => {
				this.setState({ lists: res.data });
				console.log('stateIng 값', res.data);
			})
			.catch(err => {
				console.error('Discover.js의 stateIng() 에러!', err);
			});
	};

	viewStateEnd = () => {
		ProjectApiService.stateEnd()
			.then(res => {
				this.setState({ lists: res.data });
				console.log('stateEnd 값', res.data);
			})
			.catch(err => {
				console.error('Discover.js의 stateEnd() 에러!', err);
			});
	};

	//달성률별
	viewGoalUnder75 = () => {
		ProjectApiService.goalUnder75()
			.then(res => {
				this.setState({ lists: res.data });
				console.log('goalUnder75 값', res.data);
			})
			.catch(err => {
				console.error('Discover.js의 goalUnder75() 에러!', err);
			});
	};

	viewGoalUnder75to100 = () => {
		ProjectApiService.goalUnder75to100()
			.then(res => {
				this.setState({ lists: res.data });
				console.log('goalUnder75to100 값', res.data);
			})
			.catch(err => {
				console.error('Discover.js의 goalUnder75to100() 에러!', err);
			});
	};

	viewGoalOver100 = () => {
		ProjectApiService.goalOver100()
			.then(res => {
				this.setState({ lists: res.data });
				console.log('goalOver100 값', res.data);
			})
			.catch(err => {
				console.error('Discover.js의 goalOver100() 에러!', err);
			});
	};

	//모인금액별
	viewAmountUnder100 = () => {
		ProjectApiService.amountUnder100()
			.then(res => {
				this.setState({ lists: res.data });
				console.log('amountUnder100 값', res.data);
			})
			.catch(err => {
				console.error('Discover.js의 viewAmountUnder100() 에러!', err);
			});
	};

	viewAmount100to10000 = () => {
		ProjectApiService.amount100to1000()
			.then(res => {
				this.setState({ lists: res.data });
				console.log('amountUnder100to1000 값', res.data);
			})
			.catch(err => {
				console.error('Discover.js의 amountUnder100to1000() 에러!', err);
			});
	};

	viewAmount1000to5000 = () => {
		ProjectApiService.amount1000to5000()
			.then(res => {
				this.setState({ lists: res.data });
				console.log('amountUnder100to1000 값', res.data);
			})
			.catch(err => {
				console.error('Discover.js의 amount1000to5000() 에러!', err);
			});
	};

	viewAmount5000toMillion = () => {
		ProjectApiService.amount5000toMillion()
			.then(res => {
				this.setState({ lists: res.data });
				console.log('amountUnder100to1000 값', res.data);
			})
			.catch(err => {
				console.error('Discover.js의 amount5000toMillion() 에러!', err);
			});
	};

	viewAmountOverMillion = () => {
		ProjectApiService.amountOverMillion()
			.then(res => {
				this.setState({ lists: res.data });
				console.log('amountUnder100to1000 값', res.data);
			})
			.catch(err => {
				console.error('Discover.js의 amountOverMillion() 에러!', err);
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
			<div className='first' >
				<div className='wrap'>
					<div className='row'>
						{/* 카테고리메뉴 */}
						<div className='dropdown'>
							<Button
								id='dLabel'
								role='button'
								data-toggle='dropdown'
								className='btn btn-link black-background white'
								data-target='#'
								href='/page.html'>
								<span style={{ fontSize: '0.9rem', marginTop:'0.2rem'}}>카테고리</span>
							</Button>
							<ul className='dropdown-menu multi-level' role='menu' aria-labelledby='dropdownMenu'>
								<li>
								<Button className='btn btn-link black-background white' onClick={this.viewProjectList}>
								<span style={{marginRight:'4.7rem'}}> 전체보기 </span>
									</Button>
								</li>

								<li className='dropdown-submenu'>
									<Button className='btn btn-link black-background white'>
										<span style={{marginLeft:'0.3rem'}}> 게임 </span>
										<Arrow fontSize='small' style={{ float: 'right', marginLeft: 'auto'}} />
									</Button>
									{/* <a tabIndex="-1">게임 &emsp;&emsp; </a> */}
									<ul className='dropdown-menu'>
										<li className='dropdown-item' onClick={() => this.viewCategoryBy(1)}>
											게임 전체
										</li>
										<li className='dropdown-item'>TRPG</li>
										<li className='dropdown-item'>모바일 게임</li>
										<li className='dropdown-item'>보드 게임</li>
										<li className='dropdown-item'>비디오 게임</li>
										<li className='dropdown-item'>카드 게임</li>
										<li className='dropdown-item'>게임 페스티벌</li>
									</ul>
								</li>

								<li className='dropdown-submenu'>
								<Button className='btn btn-link black-background white'>
										<span style={{marginLeft:'0.3rem'}}> 공연 </span>
										<Arrow fontSize='small' style={{ float: 'right', marginLeft: 'auto'}} />
									</Button>
									<ul className='dropdown-menu'>
										<li className='dropdown-item' onClick={() => this.viewCategoryBy(2)}>
											공연 전체
										</li>
										<li className='dropdown-item'>무용 &emsp;</li>
										<li className='dropdown-item'>뮤지컬</li>
										<li className='dropdown-item'>연극</li>
									</ul>
								</li>

								<li className='dropdown-submenu'>
								<Button className='btn btn-link black-background white'>
										<span style={{marginLeft:'0.3rem'}}>디자인</span>
										<Arrow fontSize='small' style={{ float: 'right', marginLeft: 'auto' }} />
									</Button>
									<ul className='dropdown-menu'>
										<li className='dropdown-item' onClick={() => this.viewCategoryBy(3)}>
											디자인 전체
										</li>
										<li className='dropdown-item'>건축공간</li>
										<li className='dropdown-item'>그래픽디자인</li>
										<li className='dropdown-item'>제품 디자인</li>
										<li className='dropdown-item'>타이포그래피</li>
									</ul>
								</li>

								<li className='dropdown-submenu'>
								<Button className='btn btn-link black-background white'>
										<span style={{marginLeft:'0.3rem'}}>만화</span>
										<Arrow fontSize='small' style={{ float: 'right', marginLeft: 'auto' }} />
									</Button>
									<ul className='dropdown-menu'>
										<li className='dropdown-item' onClick={() => this.viewCategoryBy(4)}>
											만화 전체
										</li>
										<li className='dropdown-item'>그래픽 노블</li>
										<li className='dropdown-item'>웹툰</li>
										<li className='dropdown-item'>만화책</li>
										<li className='dropdown-item'>만화·웹툰 리소스</li>
									</ul>
								</li>

								<li className='dropdown-submenu'>
								<Button className='btn btn-link black-background white'>
										<span style={{marginLeft:'0.3rem'}}>예술</span>
										<Arrow fontSize='small' style={{ float: 'right', marginLeft: 'auto' }} />
									</Button>
									<ul className='dropdown-menu'>
										<li className='dropdown-item' onClick={() => this.viewCategoryBy(5)}>
											예술 전체
										</li>
										<li className='dropdown-item'>공공 예술</li>
										<li className='dropdown-item'>조소·피규어</li>
										<li className='dropdown-item'>디지털 아트</li>
										<li className='dropdown-item'>전시</li>
										<li className='dropdown-item'>일러스트레이션</li>
										<li className='dropdown-item'>행위예술</li>
										<li className='dropdown-item'>혼합매체</li>
										<li className='dropdown-item'>예술 페스티벌</li>
									</ul>
								</li>

								<li className='dropdown-submenu'>
								<Button className='btn btn-link black-background white'>
										<span style={{marginLeft:'0.3rem'}}>공예</span>
										<Arrow fontSize='small' style={{ float: 'right', marginLeft: 'auto' }} />
									</Button>
									<ul className='dropdown-menu'>
										<li className='dropdown-item' onClick={() => this.viewCategoryBy(6)}>
											공예 전체
										</li>
										<li className='dropdown-item'>캔들</li>
										<li className='dropdown-item'>조향</li>
										<li className='dropdown-item'>비누</li>
										<li className='dropdown-item'>도예</li>
									</ul>
								</li>

								<li className='dropdown-submenu'>
								<Button className='btn btn-link black-background white'>
										<span style={{marginLeft:'0.3rem'}}>사진</span>
										<Arrow fontSize='small' style={{ float: 'right', marginLeft: 'auto' }} />
									</Button>
									<ul className='dropdown-menu'>
										<li className='dropdown-item' onClick={() => this.viewCategoryBy(7)}>
											사진 전체
										</li>
										<li className='dropdown-item'>인물사진</li>
										<li className='dropdown-item'>공간·장소사진</li>
										<li className='dropdown-item'>자연사진</li>
										<li className='dropdown-item'>동물사진</li>
									</ul>
								</li>

								<li className='dropdown-submenu'>
								<Button className='btn btn-link black-background white'>
										<span style={{marginLeft:'0.3rem'}}>영화·비디오</span>
										<Arrow fontSize='small' className="arrow" style={{ float: 'right', marginLeft: 'auto' }} />
									</Button>
									<ul className='dropdown-menu'>
										<li className='dropdown-item' onClick={() => this.viewCategoryBy(8)}>
											영화·비디오 전체
										</li>
										<li className='dropdown-item'>극 영화</li>
										<li className='dropdown-item'>다큐멘터리</li>
										<li className='dropdown-item'>뮤직비디오</li>
										<li className='dropdown-item'>단편영화</li>
										<li className='dropdown-item'>애니메이션</li>
										<li className='dropdown-item'>웹드라마</li>
									</ul>
								</li>

								<li className='dropdown-submenu'>
								<Button className='btn btn-link black-background white'>
										<span style={{marginLeft:'0.3rem'}}>푸드</span>
										<Arrow fontSize='small' style={{ float: 'right', marginLeft: 'auto' }} />
									</Button>
									<ul className='dropdown-menu'>
										<li className='dropdown-item' onClick={() => this.viewCategoryBy(9)}>
											푸드 전체
										</li>
										<li className='dropdown-item'>베이킹·디저트</li>
										<li className='dropdown-item'>음료</li>
										<li className='dropdown-item'>간편식</li>
										<li className='dropdown-item'>요리책</li>
										<li className='dropdown-item'>펫푸드</li>
										<li className='dropdown-item'>푸드 페스티벌·행사</li>
									</ul>
								</li>

								<li className='dropdown-submenu'>
								<Button className='btn btn-link black-background white'>
										<span style={{marginLeft:'0.3rem'}}>음악</span>
										<Arrow fontSize='small' style={{ float: 'right', marginLeft: 'auto' }} />
									</Button>
									<ul className='dropdown-menu'>
										<li className='dropdown-item' onClick={() => this.viewCategoryBy(10)}>
											음악 전체
										</li>
										<li className='dropdown-item'>전자음악</li>
										<li className='dropdown-item'>포크·어쿠스틱</li>
										<li className='dropdown-item'>록</li>
										<li className='dropdown-item'>힙합</li>
										<li className='dropdown-item'>재즈 음악</li>
										<li className='dropdown-item'>팝 음악</li>
										<li className='dropdown-item'>트로트</li>
										<li className='dropdown-item'>클래식</li>
										<li className='dropdown-item'>동인·게임</li>
									</ul>
								</li>

								<li className='dropdown-submenu'>
								<Button className='btn btn-link black-background white'>
										<span style={{marginLeft:'0.3rem'}}>출판</span>
										<Arrow fontSize='small' style={{ float: 'right', marginLeft: 'auto' }} />
									</Button>
									<ul className='dropdown-menu'>
										<li className='dropdown-item' onClick={() => this.viewCategoryBy(11)}>
											출판 전체
										</li>
										<li className='dropdown-item'>잡지</li>
										<li className='dropdown-item'>아트북·도감</li>
										<li className='dropdown-item'>문학·에세이</li>
										<li className='dropdown-item'>그림책</li>
										<li className='dropdown-item'>실용·취미</li>
									</ul>
								</li>

								<li className='dropdown-submenu'>
								<Button className='btn btn-link black-background white'>
										<span style={{marginLeft:'0.3rem'}}>테크</span>
										<Arrow fontSize='small' style={{ float: 'right', marginLeft: 'auto' }} />
									</Button>
									<ul className='dropdown-menu'>
										<li className='dropdown-item' onClick={() => this.viewCategoryBy(12)}>
											테크 전체
										</li>
										<li className='dropdown-item'>소프트웨어</li>
										<li className='dropdown-item'>하드웨어</li>
										<li className='dropdown-item'>앱</li>
										<li className='dropdown-item'>웹</li>
										<li className='dropdown-item'>웨어러블</li>
										<li className='dropdown-item'>우주·로켓</li>
									</ul>
								</li>

								<li className='dropdown-submenu'>
								<Button className='btn btn-link black-background white'>
										<span style={{marginLeft:'0.3rem'}}>패션</span>
										<Arrow fontSize='small' style={{ float: 'right', marginLeft: 'auto' }} />
									</Button>
									<ul className='dropdown-menu'>
										<li className='dropdown-item' onClick={() => this.viewCategoryBy(13)}>
											패션 전체
										</li>
										<li className='dropdown-item'>의류</li>
										<li className='dropdown-item'>잡화</li>
										<li className='dropdown-item'>쥬얼리</li>
										<li className='dropdown-item'>액세서리</li>
										<li className='dropdown-item'>아동복</li>
										<li className='dropdown-item'>펫스타일</li>
										<li className='dropdown-item'>뷰티</li>
									</ul>
								</li>

								<li className='dropdown-submenu'>
								<Button className='btn btn-link black-background white'>
										<span style={{marginLeft:'0.3rem'}}>저널리즘</span>
										<Arrow fontSize='small' style={{ float: 'right', marginLeft: 'auto' }} />
									</Button>
									<ul className='dropdown-menu'>
										<li className='dropdown-item' onClick={() => this.viewCategoryBy(14)}>
											저널리즘 전체
										</li>
										<li className='dropdown-item'>오디오 저널</li>
										<li className='dropdown-item'>비디오 저널</li>
										<li className='dropdown-item'>출판 저널</li>
										<li className='dropdown-item'>웹 저널</li>
									</ul>
								</li>
							</ul>
						</div>

						{/* 상태 분류 */}
						<div className="btn-group show-on-hover">
                    <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
						<span style={{fontSize:'0.9rem'}}>상태</span>
                    </button>
                    <ul className="dropdown-menu" role="menu">
                        <li className="dropdown-item" onClick={this.viewProjectList}>전체 프로젝트</li>
                        <li className="dropdown-item" onClick={this.viewStateIng}>진행중 프로젝트</li>
                        <li className="dropdown-item" onClick={this.viewStateEnd}>성사된 프로젝트</li>
                        
                    </ul>
                </div>
						{/* 달성률 분류 */}
						<div className='btn-group show-on-hover'>
							<button type='button' className='btn btn-default dropdown-toggle' data-toggle='dropdown'>
							<span style={{fontSize:'0.9rem'}}>달성률</span>
							</button>
							<ul className='dropdown-menu' role='menu'>
								<li className='dropdown-item' onClick={this.viewProjectList}>
									전체보기&emsp;&emsp;
								</li>
								<li className='dropdown-item' onClick={this.viewGoalUnder75}>
									75% 이하&emsp;&emsp;
								</li>
								<li className='dropdown-item' onClick={this.viewGoalUnder75to100}>
									75%~100%
								</li>
								<li className='dropdown-item' onClick={this.viewGoalOver100}>
									100% 이상
								</li>
							</ul>
						</div>
						{/* 금액별 분류 */}
						<div className='btn-group show-on-hover'>
							<button type='button' className='btn btn-default dropdown-toggle' data-toggle='dropdown'>
							<span style={{fontSize:'0.9rem'}}>모인 금액</span>
							</button>
							<ul className='dropdown-menu' role='menu'>
								<li className='dropdown-item' onClick={this.viewAmountUnder100}>
									1백만원 이하
								</li>
								<li className='dropdown-item' onClick={this.viewAmount100to10000}>
									1백만원~1천만원
								</li>
								<li className='dropdown-item' onClick={this.viewAmount1000to5000}>
									1천만원~5천만원
								</li>
								<li className='dropdown-item' onClick={this.viewAmount5000toMillion}>
									5천만원~1억원
								</li>
								<li className='dropdown-item' onClick={this.viewAmountOverMillion}>
									1억원 이상
								</li>
							</ul>
						</div>
						{/* 필터초기화 */}
						<div className='button' onClick={this.viewProjectList}>
							<Button variant='outlined'>
								<CachedIcon color='disabled' />
								<span style={{fontSize:'0.8rem'}}>필터 초기화</span>
							</Button>
						</div>
					</div>
				</div>
				<hr />

				{/* ***************************************************************************** */}
				{/* 위로는 필터 구성
                        아래로는 프로젝트 화면 구성 */}
				{/* ***************************************************************************** */}

				<div className='wrapper' style={{marginBottom:"5rem"}}>
					<div className='row'>
						<div className='col-md-12' style={{paddingLeft:"3.2rem"}}>
							<span className='countProject' style={{ float: 'left' }}>
								<span style={{ color: '#ff4646' }}>{this.state.lists.length}</span>
								개의 프로젝트가 있습니다.
							</span>

							<div className='filter'>
								<button type='button' className='btn btn-default dropdown-toggle' data-toggle='dropdown'>
								<span style={{fontSize:'0.9rem'}}>정렬</span>
								</button>
								<ul className='dropdown-menu' role='menu'>
									<li className='dropdown-item' onClick={this.projectList}>
										인기순
									</li>
									<li className='dropdown-item' onClick={this.viewAlignNew}>
										최신순
									</li>
									<li className='dropdown-item' onClick={this.viewAlignAmountPercent}>
										최다 후원순
									</li>
									<li className='dropdown-item' onClick={this.viewAlignFundAmount}>
										최다 금액순
									</li>
									<li className='dropdown-item' onClick={this.viewAlignDate}>
										마감 임박순
									</li>
								</ul>
							</div>
						</div>
					</div>

					{/* 프로젝트 구성 페이지 */}
					<div className='row'>
						{this.state.lists.map(list => (
							<div onClick={() => this.props.history.push({ pathname: '/detail', state: list })}>
								<Item
									key={list.id} longTitle={list.longTitle} mainImg={list.mainImg} category={list.category} creatorId={list.creatorId}
									content={list.content} fundedAmount={list.fundedAmount} fundingGoalAmount={list.fundingGoalAmount}
									fundingEnd={list.fundingEnd} pId={list.id} url={list.url}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		);
	}
}

export default Discover;
