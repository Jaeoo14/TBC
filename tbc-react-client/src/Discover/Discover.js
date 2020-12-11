/* eslint-disable jsx-a11y/img-redundant-alt */
import {Component} from 'react';
import './Discover.css'
import jquery from 'jquery'
import { Box, Button, Typography } from '@material-ui/core';
import CachedIcon from '@material-ui/icons/Cached';
import ScheduleIcon from '@material-ui/icons/Schedule';
import FavoriteIcon from '@material-ui/icons/Favorite';



class Discover extends Component {

    componentDidMount() {
        window.$ = window.jQuery = jquery;
    }

    

    constructor(props) {
        super(props);
        
        this.state = {
        };
    }


    // handleChange = (newValue: any, actionMeta: any) => {
    //     console.group('Value Changed');
    //     console.log(newValue);
    //     console.log(`action: ${actionMeta.action}`);
    //     console.groupEnd();
    //   };
    //   handleInputChange = (inputValue: any, actionMeta: any) => {
    //     console.group('Input Changed');
    //     console.log(inputValue);
    //     console.log(`action: ${actionMeta.action}`);
    //     console.groupEnd();
    //   };


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
<div class="col-md-12" style={{textAlign:"left"}}>

    <span style={{color:"#ff4646"}}>nn,nnn</span>개의 프로젝트가 있습니다.

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
        <div class="col-md-6 col-lg-4 g-mb-30">
            <div style={{float:"right"}}>
                <FavoriteIcon color="secondary"/>
            </div>

            <img 
                class="d-inline-block img-fluid mb-4" 
                src="http://ipsumimage.appspot.com/620x465" 
                alt="Image Description"
                />
            <Box
                fontSize="h5.fontSize"
                align="left"
                fontWeight="fontWeightBold"
                onClick={"/*프로젝트 올리기 페이지 입력*/"}>
                텀블벅 프로젝트 제목은 대체로 기다란 편</Box>
            <Typography
                variant="body2"
                color="textSecondary"
                align="left">
                카테고리 | 창작자 </Typography>
            <Typography
                variant="body1"
                align="left"
                onClick={"/*프로젝트 올리기 페이지 입력*/"}>
                텀블벅 프로젝트 설명입니다.텀블벅 프로젝트 설명입니다.텀블벅 프로젝트 설명입니다. </Typography>
            <Box
                fontSize={18}
                align="left"> 
                nn,nnn,nnn원 
            <span style={{color:"#ff4646", fontSize:15}}> nnn%</span>
            <span style={{color:"#bbbbbb", fontSize:15, float:"right"}}> 
                <ScheduleIcon color="disabled" /> nn일 남음 </span>
                </Box>
        </div>

        <div class="col-md-6 col-lg-4 g-mb-30">
            <div style={{float:"right"}}>
                    <FavoriteIcon color="secondary"/>
                </div>
            <img class="d-inline-block img-fluid mb-4" src="http://ipsumimage.appspot.com/620x465" alt="Image Description" />
            <Box
                fontSize="h5.fontSize"
                align="left"
                fontWeight="fontWeightBold"
                onClick={"/*프로젝트 올리기 페이지 입력*/"}>
                텀블벅 프로젝트 제목은 대체로 기다란 편</Box>
            <Typography
                variant="body2"
                color="textSecondary"
                align="left">
                카테고리 | 창작자 </Typography>
            <Typography
                variant="body1"
                align="left"
                onClick={"/*프로젝트 올리기 페이지 입력*/"}>
                텀블벅 프로젝트 설명입니다.텀블벅 프로젝트 설명입니다.텀블벅 프로젝트 설명입니다. </Typography>
            <Box
                fontSize={18}
                align="left"> 
                nn,nnn,nnn원 
            <span style={{color:"#ff4646", fontSize:15}}> nnn%</span>
            <span style={{color:"#bbbbbb", fontSize:15, float:"right"}}> 
                <ScheduleIcon color="disabled" /> nn일 남음 </span>
                </Box>
        </div>

        <div class="col-md-6 col-lg-4 g-mb-30">
            <div style={{float:"right"}}>
                    <FavoriteIcon color="secondary"/>
            </div>
            <img 
                class="d-inline-block img-fluid mb-4" 
                src="http://ipsumimage.appspot.com/620x465" 
                alt="Image Description" />
                
            <Box
                fontSize="h5.fontSize"
                align="left"
                fontWeight="fontWeightBold"
                onClick={"/*프로젝트 올리기 페이지 입력*/"}>
                텀블벅 프로젝트 제목은 대체로 기다란 편</Box>
            <Typography
                variant="body2"
                color="textSecondary"
                align="left">
                카테고리 | 창작자 </Typography>
            <Typography
                variant="body1"
                align="left"
                onClick={"/*프로젝트 올리기 페이지 입력*/"}>
                텀블벅 프로젝트 설명입니다.텀블벅 프로젝트 설명입니다.텀블벅 프로젝트 설명입니다. </Typography>
            <Box
                fontSize={18}
                align="left"> 
                nn,nnn,nnn원 
            <span style={{color:"#ff4646", fontSize:15}}> nnn%</span>
            <span style={{color:"#bbbbbb", fontSize:15, float:"right"}}> 
                <ScheduleIcon color="disabled" /> nn일 남음 </span>
                </Box>
        </div>
        
       
        





    </div>
  </div>
</div>




        );
    }
}


export default Discover;
