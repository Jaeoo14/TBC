import {Component} from 'react';
import './Discover.css'
import jquery from 'jquery'
import { Button } from '@material-ui/core';
import CachedIcon from '@material-ui/icons/Cached';

class Discover extends Component {

    componentDidMount() {
        window.$ = window.jQuery = jquery;
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

                <div className="button">
                <Button variant="outlined"><CachedIcon color="disabled"/> 필터 초기화</Button>
                </div>




                </div>
            </div>
            <hr />
            </div>

        );
    }
}

export default Discover;
