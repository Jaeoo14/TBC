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
    liked: false,
    project: undefined,
    categoryText: undefined,
    img: undefined,
    creatorName: undefined,
  };

  componentDidMount = () => {
    console.log("Detail.componentDidMount", this.state, this.props);

    this.setState({project:this.props.location.state});

    // const pId  = this.props.location.state.id;
    // Pas.fetchBy(pId)
    //   .then(res =>this.setState({ project: res.data }))
    //   .catch(console.log);
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
          <Box border={1.5} borderColor="#ccc" borderRadius={3} marginLeft={76} marginRight={76}>
          {this.state.categoryText}
          </Box>
        </div>

        <div className="title">{this.state.project.longTitle}</div>

        <div className="category">
          <ProfileImage userId={this.state.project.creatorId}/>
          <CreatorName creatorId={this.state.project.creatorId}/>
        </div>

        <div className="row">
          <div className="img">
            <DisplayImage pId={this.state.project.id} width="500px" height="340px" />
          </div>

          <div className="flex">
            <div style={{ float: "left" }}>

              <Box paddingTop={1} fontSize={10} color="black">
                모인금액
              </Box>
              <Box
                fontSize={20}
                color="black"
              >
                {Number(this.state.project.fundedAmount).toLocaleString()}
                <text style={{ fontSize: 15 }}> 원</text></Box>

                <Box fontSize={15} color="black" paddingBottom={2}>
                ({Number(this.state.project.fundedAmount * 100 / this.state.project.fundingGoalAmount).toLocaleString()} %) 
                </Box>
              <Box fontSize={10} color="black">
                남은시간
              </Box>
              <Box
                fontSize={20}
                color="black"
                paddingBottom={2}
              >
                <Moment fromNow>{this.state.project.fundingEnd}</Moment>
                {/* <text style={{ fontSize: 15 }}> 일</text> */}
              </Box>
              <Box fontSize={10} color="black" >
                후원자
              </Box>
              <Box
                fontSize={20}
                color="black"
                paddingBottom={2}
              >
                {this.state.project.sponsorCount}
                <text style={{ fontSize: 15 }}> 명</text>
              </Box>
              <Box
                fontSize={13}
                fontWeight="1000"
                color="black"
                paddingBottom={0.5}
              >
                펀딩 진행중
              </Box>
              <Box
                fontSize={12}
                color="black"
                paddingBottom={0.5}
              >
                목표 금액인 <strong>{Number(this.state.project.fundingGoalAmount).toLocaleString()}원</strong>이 모여야만 결제됩니다.
              </Box>
              <Box
                fontSize={12}
                color="black"
                paddingBottom={3}
              >
                결제는 <strong>{new Date(this.state.project.fundingEnd).toLocaleString()}</strong>에 다함께 진행됩니다.
              </Box>
              <PushBtn projectId={this.state.project.id} />
            </div>
          </div>
        </div>
      <hr />
        <div className="community">
          <text style={{ fontSize: 15, fontWeight: 1000}}>프로젝트 소개</text>
        </div>
        <hr />
        <div className="content">
              <Box
                alignItems="center"
                textAlign="left"
                width={1180}
                border={2}
                borderColor="#ccc"
                borderRadius={5}
                paddingTop={2}
                paddingLeft={20}
                paddingRight={20}
                paddingBottom={2}
                margin={5}
                fontSize={15}
                color="black">
                {this.state.project.content}
              </Box>
            </div>
      </div>
    );
  }
}

export default Detail;
