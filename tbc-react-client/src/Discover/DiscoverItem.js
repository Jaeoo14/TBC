
import { Component } from "react";
import './Discover.css'

import DisplayImage from "../components/DisplayImage";
import ProjectApiService from "../ProjectApiService";
import CreatorName from '../member/components/CreatorName';
import Favorite from '../member/components/Favorite';

import Moment from "react-moment";
import 'moment/locale/ko';

import { Box, Typography } from "@material-ui/core";

import per10 from '../images/10per.png';
import per30 from '../images/30per.png';
import per50 from '../images/50per.png';
import per70 from '../images/70per.png';
import per90 from '../images/90per.png';
import per100 from '../images/100per.png';

import ScheduleIcon from '@material-ui/icons/Schedule';

class DiscoverItem extends Component {
    state = {
        liked : false,
        categoryText : "",
        amountPercent : Number(`${this.numberDemical(this.props.fundedAmount * 100 / this.props.fundingGoalAmount)}`),
    };

    componentDidMount() {
        this.getCategoryId();
    }

    getCategoryId = () => {
        ProjectApiService.getCategory(this.props.category)
        .then(res => {
            this.setState({ categoryId : res.data.id, categoryText : res.data.text });
            // console.log('getCategoryId&categoryText 값', this.state.categoryText)
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

    viewPercentImage(x) {
            if (x >= 100)
                return <img src={per100} style={{width:"20rem", height:"0.2rem"}}/>;
            if (x < 100 && x > 70)
                return <img src={per90} style={{width:"20rem", height:"0.2rem"}}/>;
            if (x <= 70 && x > 50)
                return <img src={per70} style={{width:"20rem", height:"0.2rem"}}/>;
            if (x <= 50 && x > 30)
                return <img src={per50} style={{width:"20rem", height:"0.2rem"}}/>;
            if (x <= 30 && x > 10)
                return <img src={per30} style={{width:"20rem", height:"0.2rem"}}/>;
            if (x <= 10)
                return <img src={per10} style={{width:"20rem", height:"0.2rem"}}/>;
    }

    getUserId = () => {
        const member = JSON.parse(localStorage.getItem('myStorage'));
        if (member)
            return 1;//member.id;
        else
            console.log('로그인 사용자가 없습니다.');

        return 0; // no log-in user.
    }

    render() {
        
        return(

            <div className="col-md-6 col-lg-4 g-mb-30" style={{paddingLeft:"3.2rem", paddingRight:"3.4rem"}}>
                <DisplayImage pId={this.props.pId} width="280px" height="240px">
                    <Favorite userId={this.getUserId()} projectId={this.props.pId} />
                </DisplayImage>
                <Box
                    width="20rem"
                    height="3rem"
                    fontSize="1.3rem"
                    align="left"
                    fontWeight="fontWeightBold"
                    color="#393e46"
                    marginTop="0.8rem"
                    marginBottom="1.3rem"
                    letterSpacing="-0.04rem"
                    >
                        {this.props.longTitle} 
                </Box>
                <Box 
                    width={300}
                    height={20}
                    marginBottom="0.8rem">
                <Typography
                    variant="body2"
                    color="textSecondary"
                    align="left"
                    letterSpacing="-0.03rem"
                    >
                    {this.state.categoryText}&nbsp;
                    | <CreatorName creatorId={this.props.creatorId}/> </Typography>
                </Box>
                <Box
                width="20rem"
                height="5.5rem">
                    <Typography
                    variant="body1"
                    align="left"
                    marginBottom="0.8rem"
                    >
                        {this.props.content}
                    </Typography>
                </Box>
                <Box>
                    {this.viewPercentImage(this.state.amountPercent)}
                </Box>
                <Box
                    width={300}
                    height={20}            
                    fontSize={18}
                    align="left"
                    marginTop="0.8rem"
                    marginBottom="0.8rem"
                > 
                <span style={{float:"left", fontSize:18}}>
                    {`${this.numberFormatComma(Number(this.props.fundedAmount))}`}원&nbsp;
                </span>
                <span style={{color:"#ff4646", fontSize:14, float:"left", marginTop:"3px"}}>
                    {this.state.amountPercent}%&nbsp;
                </span>
                <span style={{color:"#bbbbbb", fontSize:14, float:"right"}}> 
                    <ScheduleIcon color="disabled" /> 
                    <Moment fromNow> 
                       {this.props.fundingEnd}
                    </Moment>
                </span>
                    </Box>
            </div>

        )
    }
}

export default DiscoverItem;