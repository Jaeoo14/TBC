import React, { Component } from 'react';
import { Box} from '@material-ui/core';
import PushBtn from "./Button/PushBtn";
import AccountCircle from '@material-ui/icons/AccountCircle';
import Comment from './Comment';
import ProjectApiService from "../ProjectApiService";
import DisplayImage from "../components/DisplayImage";

import 'moment/locale/ko';
import Moment from "react-moment";


import './Detail.css';

class Detail extends Component {
	state = {
		datetime: this.props.value,
	};
    componentDidMount() {
        this.getCategoryId();
    }

    constructor(props) {
        super(props);
        
        this.state = {
            liked : false,
            categoryId : this.props.category,
            categoryText : "",
        };
    }

    getCategoryId = () => {

        ProjectApiService.getCategory(this.props.pId)
        .then(res => {
            this.setState({ categoryId : res.data.id, categoryText : res.data.text });
            // console.log('getCategoryId&categoryText 값', res.data.id, res.data.text)
        })
        .catch(err => {
            console.error('DiscoverItem.js의 getCategoryId() 에러!', err);
        })
    }
    
    toggleLike = (id) => {
        console.log(`id = > ${id}`);
        const localLiked = !this.state.liked;        
        this.setState({ liked : localLiked });
    };

    //숫자 세자리마다 콤마 끊어주는 함수
    numberFormatComma(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
    
    //소수점 n자리씩 끊어주는 함수
    numberDemical(x) {
        return parseFloat(x).toFixed(0);
    }


	render() {
		return (

			<div className="full">

				<div className="category">
					<a role="button" data-target="#">
				{`${this.props.category}`}
					</a>
				</div>

				<div className="title">
				{`${this.props.longTitle}`}
				</div>
				
				<div className="category">
				{`${this.props.profileImg}`}{`${this.props.creatorId}`}
				</div>					

				<div class="row">
						<div style={{float:"left"}}>
						<DisplayImage pId={this.props.pId} width="280px" height="240px" />
				</div>		
				<div class="flex">
					<div style={{float:"left", paddingLeft:'5'}}>
						{/*줄바꿈이 자꾸 안돼서 다 나눠버렸어요...ㅠㅠ */}

						<Box paddingTop={1} fontSize={10} color='black' paddingLeft={5}>
						모인금액</Box>
						<Box fontSize={20} color='black' paddingBottom={2} paddingLeft={5}> 
						{`${this.numberFormatComma(Number(this.props.fundedAmount))}`}&nbsp;
						<text style={{fontSize:15}}> 원</text>
						{`    ${this.numberDemical(this.props.fundedAmount * 100 / this.props.fundingGoalAmount)}`}%&nbsp;
						</Box>
						<Box fontSize={10} color='black' paddingLeft={5}> 
						남은시간</Box>
						<Box fontSize={20} color='black' paddingBottom={2} paddingLeft={5}> 
						<Moment fromNow ago>
                        {this.props.fundingEnd}
                    	</Moment>
						<text style={{fontSize:15}}> 일</text></Box>
						<Box fontSize={10} color='black' paddingLeft={5}> 
						후원자</Box>
						<Box fontSize={20} color='black' paddingBottom={2} paddingLeft={5}> 
						{`${this.state.sponsorCount}`}
						<text style={{fontSize:15}}> 명</text></Box>
						<Box fontSize={13} fontWeight='1000' color='black' paddingBottom={0.5} paddingLeft={5}>
						펀딩 진행중</Box>
						<Box fontSize={12} color='black' paddingBottom={0.5} paddingLeft={5}>
						목표 금액인 {`${this.state.goal}`}원이 모여야만 결제됩니다.</Box>
						<Box  fontSize={12} color='black' paddingBottom={0.5} paddingLeft={5}>
						결제는 {`${this.props.fundingEnd}`}에 다함께 진행됩니다.</Box>
						<PushBtn />
						</div>
				</div>		
				</div>
				<hr />
				
{/*여기서부터 커뮤니티입니다 */}
				<div className='community'>
					<text style={{fontSize:15, fontWeight:1000}}>커뮤니티</text>
				</div>
				<hr />
				<div class="background">
				<div class="row">
					<div style={{float:"left"}}>
						<Box border={1} paddingTop={2} paddingLeft={3} paddingRight={30} paddingBottom={2} 
						margin={5} fontSize={15} color='black'>
						<AccountCircle style={{color:'gray', paddingRight:5}} />
							<a role="button" onClick={"./Detail/Community"} fontSize={15}>
							창작자만 글을 등록할 수 있습니다.
							</a>
						</Box>
					<Box border={1} paddingTop={3} paddingLeft={3} paddingRight={3} paddingBottom={50} 
						marginRight={5} marginLeft={5} marginTop={5} marginBottom={20}
						fontSize={15} color='black'>
						<text style={{paddingBottom:20}}>
						{`${this.props.commuContent}`}
						</text>
						{/*댓글부분*/}
						<Comment sytle={{paddingTop:20}} />
						<hr />
						<Box paddingLeft={2} paddingTop={1}marginRight={5} 
						fontSize={12} color='black'>
						{/*<AccountCircle style={{color:'gray'}} /> 후원자*/}
						{`${this.props.profileImg}`}{`${this.props.userId}`}
						<text style={{paddingLeft:20}}>
						{`${this.props.content}`}
						</text>
						</Box>
						<hr />
						<Box paddingLeft={2} paddingTop={1}marginRight={5} 
						fontSize={12} color='black'>
						{/*<AccountCircle style={{color:'gray'}} /> 후원자*/}
						{`${this.props.profileImg}`}{`${this.props.userId}`}
						<text style={{paddingLeft:20}}>
						{`${this.props.content}`}
						</text>
						</Box>
						<hr />
						<Box paddingLeft={2} paddingTop={1}marginRight={5} 
						fontSize={12} color='black'>
						{/*<AccountCircle style={{color:'gray'}} /> 후원자*/}
						{`${this.props.profileImg}`}{`${this.props.userId}`}
						<text style={{paddingLeft:20}}>
						{`${this.props.content}`}
						</text>
						</Box>
						<hr />
						<Box paddingLeft={2} paddingTop={1}marginRight={5} 
						fontSize={12} color='black'>
						{/*<AccountCircle style={{color:'gray'}} /> 후원자*/}
						{`${this.props.profileImg}`}{`${this.props.userId}`}
						<text style={{paddingLeft:20}}>
						{`${this.props.content}`}
						</text>
						</Box>
					</Box>
					</div>
					<div class="flex">
					<div style={{float:"left"}}>
						<Box borderTop={1} borderLeft={1} borderRight={1}
						paddingTop={2} paddingLeft={2} paddingRight={35} 
						marginRight={5} marginTop={5}
						fontSize={15} color='black'>
						창작자 소개
						</Box>
						<Box borderLeft={1} borderRight={1}
						paddingLeft={2} paddingTop={1}marginRight={5} 
						fontSize={12} color='black'>
						{/*<AccountCircle style={{color:'gray'}} /> 창작자 */}
						{`${this.props.profileImg}`}{`${this.props.creatorId}`}
						</Box>
						<Box borderLeft={1} borderRight={1} borderBottom={1} 
						paddingLeft={2} paddingTop={1} paddingBottom={10} marginRight={5} 
						fontSize={12} color='black'>
						{`${this.props.intro}`}
						</Box>
						<Box 
						paddingTop={2} paddingLeft={2} paddingRight={35} 
						marginRight={5} marginTop={3}
						fontSize={15} color='black'>
						선물하기
						</Box>
						<Box borderTop={1} borderLeft={1} borderRight={1}
						paddingTop={2} paddingLeft={2} paddingBottom={2} 
						marginRight={5} marginTop={3} fontSize={15} color='black'>
						1000원		
						</Box>
						<Box borderLeft={1} borderRight={1} borderBottom={1} 
						paddingLeft={2}paddingBottom={2} marginRight={5} 
						fontSize={12} color='black'>
						선물을 선택하지 않고 밀어만 줍니다.
						</Box>
						<Box borderTop={1} borderLeft={1} borderRight={1}
						paddingTop={2} paddingLeft={2} paddingBottom={2} 
						marginRight={5} marginTop={5} fontSize={15} color='black'>
						{`${this.props.minFundAmount}`}{`\n`}
						{`${this.props.name}`}{`\n`}
						{`${this.props.opt}`}{`\n`} {/*엔터 아시는분 제보부탁드려요*/}
						{`${this.props.message}`}{`\n`}
						</Box>
						<Box borderLeft={1} borderRight={1} borderBottom={1} 
						paddingLeft={2} paddingBottom={2} marginRight={5} 
						fontSize={12} color='black'>
						선물 구매와 함께 밀어줍니다.
						</Box>
					</div>
				</div>
				</div>
				</div>
			</div>
		  );
        
    };

}


export default Detail;