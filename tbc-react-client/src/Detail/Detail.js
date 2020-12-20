import React, { Component } from "react";
import { Box } from "@material-ui/core";
import PushBtn from "./PushBtn";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Comment from "./Comment";
import ProjectApiService from "../ProjectApiService";
import Pas from "../ProjectApiService";
import DisplayImage from "../components/DisplayImage";
import Moment from "react-moment";
import "moment/locale/ko";
import "./Detail.css";
import ProfileImage from '../member/components/ProfileImage';
import CreatorName from '../member/components/CreatorName';

class Detail extends Component {
  state = {
    project: undefined,
    categoryText: undefined,
    img: undefined,
    creatorName: undefined,
  };

  componentDidMount = () => {
    console.log("PD.componentDidMount", this.state, this.props);

    const pId  = this.props.location.state.id;

    Pas.fetchBy(pId)
      .then(res =>this.setState({ project: res.data }))
      .catch(console.log);
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.project !== this.state.project) {
      this.getCategoryId();
    }
  }

  getCategoryId = () => {
    ProjectApiService.getCategory(this.state.project.category)
      .then(res => {this.setState({ categoryId: res.data.id, categoryText: res.data.text })})
      .catch(console.log);
  };

  render() {
    if (this.state.project === undefined)
      return null;
    return (
      
      <div className="full">
        <div className="category">
          {this.state.categoryText}
        </div>

        <div className="title">{this.state.project.longTitle}</div>

        <div className="category">
          <ProfileImage userId={this.state.project.creatorId}/>
          <CreatorName creatorId={this.state.project.creatorId}/>
        </div>

        <div className="row">
          <div style={{ float: "left" }}>
            <DisplayImage pId={this.state.project.id} width="280px" height="240px" />
          </div>
          <div className="flex">
            <div style={{ float: "center", paddingLeft: "5" }}>

              <Box paddingTop={1} fontSize={10} color="black" paddingLeft={5}>
                모인금액
              </Box>
              <Box
                fontSize={20}
                color="black"
                paddingBottom={2}
                paddingLeft={5}
              >
                {Number(this.state.project.fundedAmount).toLocaleString()}

                <text style={{ fontSize: 15 }}> 원</text><br/>
                {Number(this.state.project.fundedAmount * 100 / this.state.project.fundingGoalAmount).toLocaleString()} %
              </Box>
              <Box fontSize={10} color="black" paddingLeft={5}>
                남은시간
              </Box>
              <Box
                fontSize={20}
                color="black"
                paddingBottom={2}
                paddingLeft={5}
              >
                <Moment fromNow>{this.state.project.fundingEnd}</Moment>
                {/* <text style={{ fontSize: 15 }}> 일</text> */}
              </Box>
              <Box fontSize={10} color="black" paddingLeft={5}>
                후원자
              </Box>
              <Box
                fontSize={20}
                color="black"
                paddingBottom={2}
                paddingLeft={5}
              >
                {this.state.project.sponsorCount}
                <text style={{ fontSize: 15 }}> 명</text>
              </Box>
              <Box
                fontSize={13}
                fontWeight="1000"
                color="black"
                paddingBottom={0.5}
                paddingLeft={5}
              >
                펀딩 진행중
              </Box>
              <Box
                fontSize={12}
                color="black"
                paddingBottom={0.5}
                paddingLeft={5}
              >
                목표 금액인 <strong>{Number(this.state.project.fundingGoalAmount).toLocaleString()}원</strong>이 모여야만 결제됩니다.
              </Box>
              <Box
                fontSize={12}
                color="black"
                paddingBottom={0.5}
                paddingLeft={5}
              >
                결제는 <strong>{new Date(this.state.project.fundingEnd).toLocaleString()}</strong>에 다함께 진행됩니다.
              </Box>
              <PushBtn />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
