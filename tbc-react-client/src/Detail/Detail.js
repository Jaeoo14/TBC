import React, { Component } from 'react';
import jquery from 'jquery'
import { Box, Button, Typography } from '@material-ui/core';
import PushBtn from "./Button/PushBtn";
import AccountCircle from '@material-ui/icons/AccountCircle';
import ScheduleIcon from '@material-ui/icons/Schedule';
import FavoriteIcon from '@material-ui/icons/Favorite';



import './Detail.css';

class Detail extends Component {
	
	render() {
		return (

			<div className="full">

				<div className="category">
					<a role="button" data-target="#">
					카테고리
					</a>
				</div>

				<div className="title">
					텀블벅 프로젝트 이름은 대체로 긴 편
				</div>					

				<div class="row">
						<div style={{float:"left"}}>
						<img 
						class="img" 
						src="http://ipsumimage.appspot.com/620x465" 
						alt="Image Description"
						/>
				</div>		
				<div class="flex">
					<div style={{float:"left", paddingLeft:'5'}}>
						{/*줄바꿈이 자꾸 안돼서 다 나눠버렸어요...ㅠㅠ */}

						<Box paddingTop={1} fontSize={10} color='black' paddingLeft={5}>
						모인금액</Box>
						<Box fontSize={20} color='black' paddingBottom={2} paddingLeft={5}> 
						12345
						<text style={{fontSize:15}}> 원</text></Box>
						<Box fontSize={10} color='black' paddingLeft={5}> 
						남은시간</Box>
						<Box fontSize={20} color='black' paddingBottom={2} paddingLeft={5}> 
						1234
						<text style={{fontSize:15}}> 일</text></Box>
						<Box fontSize={10} color='black' paddingLeft={5}> 
						후원자</Box>
						<Box fontSize={20} color='black' paddingBottom={2} paddingLeft={5}> 
						123
						<text style={{fontSize:15}}> 명</text></Box>
						<Box fontSize={13} fontWeight='1000' color='black' paddingBottom={0.5} paddingLeft={5}>
						펀딩 진행중</Box>
						<Box fontSize={12} color='black' paddingBottom={0.5} paddingLeft={5}>
						목표 금액인 000,000,000원이 모여야만 결제됩니다.</Box>
						<Box  fontSize={12} color='black' paddingBottom={0.5} paddingLeft={5}>
						결제는 00월 00일에 다함께 진행됩니다.</Box>
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
						<Box border={1} paddingTop={2} paddingLeft={5} paddingRight={40} paddingBottom={2} 
						margin={5} fontSize={15} color='black'>
						<AccountCircle style={{color:'gray', paddingRight:5}} />
						창작자만 글을 등록할 수 있습니다
						</Box>
						<Box border={1} paddingTop={2} paddingLeft={5} paddingRight={10} paddingBottom={30} 
						margin={5} fontSize={15} color='black'>
						<text>
						프로젝트 상세 설명을 창작자가 등록합니다.{"\n"}
						{/* /n 엔터를 하고싶어요...*/}
						엔터 도대체 왜 안넣어져
						</text>			
						</Box>
					</div>
					<div class="flex">
					<div style={{float:"left"}}>
						<Box borderTop={1} borderLeft={1} borderRight={1}
						paddingTop={2} paddingLeft={2} paddingRight={50} 
						marginRight={5} marginTop={5}
						fontSize={15} color='black'>
						창작자 소개
						</Box>
						<Box borderLeft={1} borderRight={1}
						paddingLeft={2} paddingTop={1}marginRight={5} 
						fontSize={12} color='black'>
						<AccountCircle style={{color:'gray'}} /> 창작자
						</Box>
						<Box borderLeft={1} borderRight={1} borderBottom={1} 
						paddingLeft={2} paddingTop={1} paddingBottom={10} marginRight={5} 
						fontSize={12} color='black'>
						창작자의 소개말이 들어갑니다.
						</Box>
						<Box 
						paddingTop={2} paddingLeft={2} paddingRight={50} 
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
						00000원		
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
        
    }

}


export default Detail;