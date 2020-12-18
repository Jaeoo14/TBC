import { Component } from "react";
import './Discover.css'

import 'moment/locale/ko';
import Moment from "react-moment";

import { Box, Typography } from "@material-ui/core";
import ScheduleIcon from '@material-ui/icons/Schedule';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NotFavoriteIcon from '@material-ui/icons/FavoriteBorderOutlined';
import DisplayImage from "../components/DisplayImage";
import ProjectApiService from "../ProjectApiService";


class DiscoverItem extends Component {

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
        
        return(

            <div className="col-md-6 col-lg-4 g-mb-30">
                {/* <img 
                    className="d-inline-block img-fluid mb-4" 
                    src={this.props.mainImg}
                alt="Image Description"/> */}
                <div style={{}} onClick={() => this.toggleLike()}>
                    {this.state.liked === false ? <NotFavoriteIcon /> : <FavoriteIcon color="secondary" />}                 
                </div>
                <DisplayImage pId={this.props.pId} width="280px" height="240px" />
                <Box
                    fontSize="1.3rem"
                    align="left"
                    fontWeight="fontWeightBold"
                    color="#393e46"
                    marginTop="0.8rem"
                    marginBottom="0.8rem"
                    letterSpacing="-0.04rem"
                    onClick={"/*프로젝트 올리기 페이지 입력*/"}>
                        {this.props.longTitle} 
                </Box>
                <Typography
                    variant="body2"
                    color="textSecondary"
                    align="left"
                    letterSpacing="-0.03rem"
                    >
                    {this.state.categoryText}&nbsp;
                    | {this.props.creatorId} </Typography>
                <Box marginTop="0.8rem" marginBottom="0.8rem" />
                <Typography
                    variant="body1"
                    align="left"
                    marginBottom="0.8rem"
                    onClick={"/*프로젝트 올리기 페이지 입력*/"}>
                        {this.props.content}
                    </Typography>

                <Box
                    fontSize={18}
                    align="left"
                    marginTop="0.8rem"
                    marginBottom="0.8rem"
                > 
                <span style={{float:"left"}}>
                    {`${this.numberFormatComma(Number(this.props.fundedAmount))}`}원&nbsp;
                </span>
                <span style={{color:"#ff4646", fontSize:15, float:"left"}}>
                    {`${this.numberDemical(this.props.fundedAmount * 100 / this.props.fundingGoalAmount)}`}%&nbsp;
                </span>
                <span style={{color:"#bbbbbb", fontSize:15, float:"right"}}> 
                    <ScheduleIcon color="disabled" /> 
                    <Moment fromNow ago>
                        {this.props.fundingEnd}
                    </Moment>전 
                </span>
                    </Box>
            </div>

        )
    }

}

export default DiscoverItem;