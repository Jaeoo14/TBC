/* eslint-disable jsx-a11y/img-redundant-alt */
import {Component} from 'react';
import './Discover.css'
import jquery from 'jquery'
import { Box, Button, Typography } from '@material-ui/core';
import CachedIcon from '@material-ui/icons/Cached';
import ScheduleIcon from '@material-ui/icons/Schedule';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NotFavoriteIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ProjectApiService from '../ProjectApiService';



class Discover extends Component {

    componentDidMount() {
        window.$ = window.jQuery = jquery;
        this.viewProjectList();
        this.viewRemainDate();
        this.viewCountProject();
        // this.viewProjectId();
    }

    

    constructor(props) {
        super(props);
        
        this.state = {
            lists : [],
            count : Number,
            id : Number,
            date : '',
            liked : false,
        };
    }

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
 
    viewRemainDate = () => {
        ProjectApiService.getColumn('fundingEnd')
        .then(res => {
            this.setState({ date : res.data.map(date=>date.fundingEnd) });
            var newDate = new Date();
            console.log('받아온 date값', this.state.date);
            console.log('date의값', newDate);
            newDate.setDate(newDate.getDate()-this.state.date);
            console.log('나오나?', newDate)
        })
        .catch(err => {
            console.error('Discover.js의 viewProjectList() 에러!', err);
        })
    }

        // viewProjectId = () => {
    //     ProjectApiService.getColumn('id') 
    //     .then(res => {
    //         this.setState({ id : res.data.map(pId=>pId.id) });
    //         console.log('getColumn id 값', res.data)
    //         console.log('getColumn id 값만 뺌', res.data.map(pId=>pId.id))
    //     })
    //     .catch(err => {
    //         console.error('Discover.js의 getColumn() 에러!', err);
    //     })
    // }

    toggleLike = (id) => {
        console.log(`id = > ${id}`);
        const localLiked = !this.state.liked;        
        this.setState({ liked : localLiked });
    };


    render() {
        return (   
            <div className="first">
            <div class="wrap">
                <div class="row">

                    {/* 카테고리메뉴 */}
                    <div class="dropdown">
                        <a
                            id="dLabel"
                            role="button"
                            data-toggle="dropdown"
                            class="btn btn-link"
                            data-target="#"
                            href="/page.html">
                            카테고리
                            <span class="caret"></span>
                        </a>
                        <ul
                            class="dropdown-menu multi-level"
                            role="menu"
                            aria-labelledby="dropdownMenu">
                            <li>
                                <a href="#">전체보기</a>
                            </li>

                            <li class="dropdown-submenu">
                                <a tabindex="-1" href="#">게임 &emsp;&emsp;</a>
                                <ul class="dropdown-menu">
                                <li><a href="#">게임 전체</a></li>
                                <li><a href="#">TRPG</a></li>
                                <li><a href="#">모바일 게임</a></li>
                                </ul>
                            </li>

                            <li class="dropdown-submenu">
                                <a tabindex="-1" href="#">공연 &emsp;&emsp;</a>
                                <ul class="dropdown-menu">
                                <li><a href="#">공연 전체</a></li>
                                <li><a href="#">무용 &emsp;</a></li>
                                <li><a href="#">뮤지컬</a></li>
                                </ul>
                            </li>
                            
                            <li class="dropdown-submenu">
                                <a tabindex="-1" href="#">디자인 &emsp;&emsp;</a>
                                <ul class="dropdown-menu">
                                <li><a href="#">디자인 전체</a></li>
                                <li><a href="#">건축공간</a></li>
                                <li><a href="#">그래픽디자인</a></li>
                                </ul>
                            </li>

                        </ul>
                    </div>

                {/* 상태 분류 */}
                <div class="btn-group show-on-hover">
                    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                        상태 <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu" role="menu">
                        <li><a href="#">전체 프로젝트</a></li>
                        <li><a href="#">진행중 프로젝트</a></li>
                        <li><a href="#">성사된 프로젝트</a></li>
                        
                    </ul>
                </div>

                {/* 달성률 분류 */}
                <div class="btn-group show-on-hover">
                    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                        달성률 <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu" role="menu">
                        <li><a href="#">전체보기</a></li>
                        <li><a href="#">75% 이하</a></li>
                        <li><a href="#">75%~100%</a></li>
                        <li><a href="#">100% 이상</a></li>
                        
                    </ul>
                </div>

                {/* 금액별 분류 */}
                <div class="btn-group show-on-hover">
                    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                        모인 금액 <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu" role="menu">
                        <li><a href="#">1백만원 이하</a></li>
                        <li><a href="#">1백만원~1천만원</a></li>
                        <li><a href="#">1천만원~5천만원</a></li>
                        <li><a href="#">5천만원~1억원</a></li>
                        <li><a href="#">1억원 이상</a></li>
                    </ul>
                </div>

                {/* 필터초기화 */}
                <div className="button">
                <Button variant="outlined"><CachedIcon color="disabled"/> 필터 초기화</Button>
                </div>
                </div>
            </div>
            <hr />

{/* ***************************************************************************** */}
                            {/* 위로는 필터 구성
                        아래로는 프로젝트 화면 구성 */}
{/* ***************************************************************************** */}


<div className="wrapper">
<div className="row">
<div class="col-md-12">
<span className="countProject" style={{float:"left"}}>
    <span style={{color:"#ff4646"}}>{this.state.count}</span>개의 프로젝트가 있습니다.
    </span>    

        <select id="filter" name="filter">
            <option value="">인기순 ▼</option>
            <option value="">최신순 ▼</option>
            <option value="">최다 후원순 ▼</option>
            <option value="">최다 금액순 ▼</option>
            <option value="">마감 임박순 ▼</option>
        </select>
   
      </div>
</div>

{/* 프로젝트 구성 페이지 */}
    <div class="row">
        {this.state.lists.map(list => 
            
        <div class="col-md-6 col-lg-4 g-mb-30">
            <Typography value={list.id}>[{list.id}]</Typography>
        
            <div style={{float:"right"}} onClick={() => this.toggleLike(list.id)}>
                {this.state.liked === false ? <NotFavoriteIcon /> : <FavoriteIcon color="secondary" />} 
            </div>

            <img 
                class="d-inline-block img-fluid mb-4" 
                src={list.mainImg}
                alt="Image Description"
                />
            <Box
                fontSize="h5.fontSize"
                align="left"
                fontWeight="fontWeightBold"
                onClick={"/*프로젝트 올리기 페이지 입력*/"}>
                {list.longTitle} </Box>
            <Typography
                variant="body2"
                color="textSecondary"
                align="left">
                {list.category} | {list.creatorId} </Typography>
            <Typography
                variant="body1"
                align="left"
                onClick={"/*프로젝트 올리기 페이지 입력*/"}>
                {list.content} </Typography>
            <Box
                fontSize={18}
                align="left"> 
                {list.fundedAmount}원
            <span style={{color:"#ff4646", fontSize:15}}> {list.fundedAmount * 100 / list.fundingGoalAmount}%</span>
            <span style={{color:"#bbbbbb", fontSize:15, float:"right"}}> 
                <ScheduleIcon color="disabled" /> {list.fundingEnd} </span>
                </Box>
        </div>
)}
{/* this.state.lists.map괄호 */}
 
    </div>
  </div>
</div>
        );
    }
}


export default Discover;
