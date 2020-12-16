import { Box, Typography } from "@material-ui/core";
import { Component } from "react";
import Moment from "react-moment";

import ScheduleIcon from '@material-ui/icons/Schedule';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NotFavoriteIcon from '@material-ui/icons/FavoriteBorderOutlined';


class DiscoverItem extends Component {

    constructor(props) {
        super(props);
        
        this.state = {

        };
    }
    

    render() {
        
        return(

            <div className="col-md-6 col-lg-4 g-mb-30">
                <Typography value={this.props.id}>[{this.props.id}]</Typography>
            
                <div style={{float:"right"}} onClick={() => this.toggleLike()}>
                    {this.state.liked === false ? <NotFavoriteIcon /> : <FavoriteIcon color="secondary" />} 
                </div>     

                <img 
                    className="d-inline-block img-fluid mb-4" 
                    src={this.props.mainImg}
                    alt="Image Description"/>
                <Box
                    fontSize="h5.fontSize"
                    align="left"
                    fontWeight="fontWeightBold"
                    onClick={"/*프로젝트 올리기 페이지 입력*/"}>
                    {this.props.longTitle} </Box>
                <Typography
                    variant="body2"
                    color="textSecondary"
                    align="left">
                    {this.props.category} | {this.props.creatorId} </Typography>
                <Typography
                    variant="body1"
                    align="left"
                    onClick={"/*프로젝트 올리기 페이지 입력*/"}>
                    {this.props.content} </Typography>
                <Box
                    fontSize={18}
                    align="left"> 
                    {Number(this.props.fundedAmount).toLocaleString()}원
                <span style={{color:"#ff4646", fontSize:15}}> {this.props.fundedAmount * 100 / this.props.fundingGoalAmount}%</span>
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