import React, { Component } from "react";

import { Badge, Container, ListGroup } from "react-bootstrap";

import InputProjectTitle from "./InputProjectTitle";
import UploadProjectImage from "./UploadProjectImage";
import CustomTextArea from "./CustomTextArea";
import SelectProjectCategory from "./SelectProjectCategory";
import SetProjectURL from "./SetProjectURL";
import InputTags from "./InputTags";

import EditIcon from "@material-ui/icons/Edit";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

import Pas from "../ProjectApiService";
import DisplayImage from "./DisplayImage";
import ProfileImage from "../member/components/ProfileImage";
import UploadProfileImage from './UploadProfileImage';

class ProjectDescription extends Component {
  clearEditState = {
    editTitles: false,
    editMainImg: false,
    editContent: false,
    editCategory: false,
    editUrl: false,
    editTags: false,
    editCreatorProfileImg: false,
    eidtCreatorName: false,
    editCreatorIntro: false,
    editCreatorCountry: false,
  }

  state = {
    project: undefined,
    categoryName: undefined,
    ...this.clearEditState,
  };

  handleClose = () => this.setState({...this.clearEditState});

  startEdit = (e, target) => {
    e.preventDefault();
    this.setState({...this.clearEditState}, () => this.setState({ [target]: true }));
  };

  componentDidMount = () => {
    console.log("PD.componentDidMount", this.state, this.props);

    const { pId, cId } = this.props;

    Pas.fetchBy(pId)
      .then((res) =>
        this.setState({ project: res.data }, () => {
          this.props.showTitle(this.state.project.longTitle);
          this.getCategoryName();
          console.log("PD.componentDidMount", this.state, this.props);
        })
      )
      .catch((err) => console.log(err));
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("PD.componentDidUpdate", prevState, this.state);
    if (prevState.project !== this.state.project) {
      this.getCategoryName();
    }
  }

  handleSaveMainImg = (imgFileId) => {
    this.setState(
      {
        project: { ...this.state.project, mainImg: imgFileId },
      },
      this.updateProject
    );
  };


  handleTitles = (longTitle, shortTitle) => {
    let temp = { ...this.state.project };
    temp.longTitle = longTitle;
    temp.shortTitle = shortTitle;
    this.setState({ project: temp, editTitles: false }, this.updateTitles);
  };

  updateTitles = () => {
    Pas.update(this.state.project)
      .then((res) => {
        console.log("Update project title to DB.", res.data);
        this.props.showTitle(this.state.project.longTitle);
      })
      .catch((err) => console.log(err));
  };

  handleProject = (column, value) => {
    console.log("PD.handleProject", column, value);
    let temp = { ...this.state.project };
    temp[column] = value;
    this.setState({ project: temp }, this.updateProject);
  };

  updateProject = () => {
    console.log("PD.updateProject", this.state.project);
    Pas.update(this.state.project)
      .then((res) => this.handleClose())
      .catch((err) => console.log(err));
  };

  getCategoryName = () => {
    Pas.getCategory(this.state.project.category)
      .then((res) => this.setState({ categoryName: res.data.text }))
      .catch((err) => console.log(err));
  };

  render() {
    if (this.state.project === undefined) return null;

    console.log("PD.render project=", this.state.project);
    const { longTitle, shortTitle } = this.state.project;

    return (
      <Container fluid="md" style={{ textAlign: "left" }}>
        <h6>프로젝트 개요</h6>
        <ListGroup>
          <ListGroup.Item as="div" action>
            {this.state.editTitles ? (
              <div>
                <InputProjectTitle
                  longTitle={longTitle}
                  shortTitle={shortTitle}
                  handleTitles={this.handleTitles}
                  handleClose={this.handleClose}
                />
              </div>
            ) : (
              <div onClick={(e) => this.startEdit(e, "editTitles")}>
                <div>
                  <h6>프로젝트 제목</h6>
                  {this.state.project.longTitle === "" ? (
                    <div style={{ color: "tomato" }}>
                      <ArrowRightIcon fontSize="small" />
                      프로젝트 제목을 입력해주세요.
                    </div>
                  ) : (
                    <h6>
                      {longTitle} <Badge variant="danger">{shortTitle}</Badge>
                    </h6>
                  )}
                </div>
                <div style={{ textAlign: "right", color: "tomato" }}>
                  <EditIcon fontSize="small" />
                  {this.state.project.longTitle === "" &&
                  this.state.project.shortTitle === ""
                    ? "입력하기"
                    : "수정하기"}
                </div>
              </div>
            )}
          </ListGroup.Item>
          <ListGroup.Item as="div" action>
            {this.state.editMainImg ? (
              <UploadProjectImage
                title="프로젝트 대표 이미지"
                desc="대표 이미지는 프로젝트의 가장 중요한 시각적 요소입니다. 후원자들이 프로젝트의 내용을 쉽게 파악하고 좋은 인상을 받을 수 있게 하기 위해 다음 가이드라인에 따라 디자인해 주세요."
                mainImg={this.state.project.mainImg}
                handleClose={this.handleClose}
                handleSaveMainImg={this.handleSaveMainImg}
              />
            ) : (
              <div onClick={(e) => this.startEdit(e, "editMainImg")}>
                <div>
                  <h6>프로젝트 대표 이미지</h6>
                  {this.state.project.mainImg === 0 ? (
                    <div style={{ color: "tomato" }}>
                      <ArrowRightIcon fontSize="small" />
                      프로젝트 대표 이미지를 입력해주세요.
                    </div>
                  ) : (
                    <DisplayImage
                      pId={this.state.project.id}
                      width={'25%'}
                      height={'25%'}
                    />
                  )}
                </div>
                <div style={{ textAlign: "right", color: "tomato" }}>
                  <EditIcon fontSize="small" />
                  {this.state.project.mainImg === 0 ? "입력하기" : "수정하기"}
                </div>
              </div>
            )}
          </ListGroup.Item>
          <ListGroup.Item as="div" action>
            {this.state.editContent ? (
              <CustomTextArea
                title="프로젝트 요약"
                desc="후원자 분들에게 본 프로젝트를 간략하게 소개해 봅시다"
                placeholder="프로젝트 요약을 입력해주세요"
                minlen="10"
                maxlen="100"
                value={this.state.project.content}
                handleText={this.handleProject}
                handleClose={this.handleClose}
                columnName="content"
              />
            ) : (
              <div onClick={(e) => this.startEdit(e, "editContent")}>
                <div>
                  <h6>프로젝트 요약</h6>
                  {this.state.project.content === "" ? (
                    <div style={{ color: "tomato" }}>
                      <ArrowRightIcon fontSize="small" />
                      프로젝트 요약을 입력해주세요.
                    </div>
                  ) : (
                    <h6>{this.state.project.content}</h6>
                  )}
                </div>
                <div style={{ textAlign: "right", color: "tomato" }}>
                  <EditIcon fontSize="small" />
                  {this.state.project.content === "" ? "입력하기" : "수정하기"}
                </div>
              </div>
            )}
          </ListGroup.Item>
          <ListGroup.Item as="div" action>
            {this.state.editCategory ? (
              <SelectProjectCategory
                title="프로젝트 카테고리"
                desc="프로젝트의 성격에 맞는 카테고리를 선택해 주세요. (프로젝트 성격과 맞지 않는 카테고리를 선택하실 시 후원자가 해당 프로젝트를 찾기 어려워지기에 에디터에 의해 조정될 수 있습니다.)"
                placeholder="프로젝트 카테고리를 정해주세요."
                value={this.state.project.category}
                handleProject={this.handleProject}
                handleClose={this.handleClose}
              />
            ) : (
              <div onClick={(e) => this.startEdit(e, "editCategory")}>
                <div>
                  <h6>프로젝트 카테고리</h6>
                  {this.state.project.category === 0 ? (
                    <div style={{ color: "tomato" }}>
                      <ArrowRightIcon fontSize="small" />
                      프로젝트 카테고리를 입력해주세요.
                    </div>
                  ) : (
                    <h6>{this.state.categoryName}</h6>
                  )}
                </div>
                <div style={{ textAlign: "right", color: "tomato" }}>
                  <EditIcon fontSize="small" />
                  {this.state.project.category === 0 ? "입력하기" : "수정하기"}
                </div>
              </div>
            )}
          </ListGroup.Item>
          <ListGroup.Item as="div" action>
            {this.state.editUrl ? (
              <SetProjectURL
                value={this.state.project.url}
                minlen="3"
                maxlen="28"
                handleProject={this.handleProject}
                handleClose={this.handleClose}
              />
            ) : (
              <div onClick={(e) => this.startEdit(e, "editUrl")}>
                <div>
                  <h6>프로젝트 페이지 주소</h6>
                  {this.state.project.url === "" ? (
                    <div style={{ color: "tomato" }}>
                      <ArrowRightIcon fontSize="small" />
                      프로젝트 페이지 주소를 입력해주세요.
                    </div>
                  ) : (
                    <h6>{this.state.project.url}</h6>
                  )}
                </div>
                <div style={{ textAlign: "right", color: "tomato" }}>
                  <EditIcon fontSize="small" />
                  {this.state.project.url === "" ? "입력하기" : "수정하기"}
                </div>
              </div>
            )}
          </ListGroup.Item>
          <ListGroup.Item as="div" action>
            {this.state.editTags ? (
              <InputTags
                value={this.state.project.tags}
                minlen="2"
                maxlen="125"
                handleProject={this.handleProject}
                handleClose={this.handleClose}
              />
            ) : (
              <div onClick={(e) => this.startEdit(e, "editTags")}>
                <div>
                  <h6>검색용 태그</h6>
                  {this.state.project.tags === "" ? (
                    <div style={{ color: "tomato" }}>
                      <ArrowRightIcon fontSize="small" />
                      예시: 소설,탐정,추리
                    </div>
                  ) : (
                    <h6>{this.state.project.tags}</h6>
                  )}
                </div>
                <div style={{ textAlign: "right", color: "tomato" }}>
                  <EditIcon fontSize="small" />
                  {this.state.project.tags === "" ? "입력하기" : "수정하기"}
                </div>
              </div>
            )}
          </ListGroup.Item>
        </ListGroup>
        <h6>창작자 정보</h6>
        <ListGroup>
        <ListGroup.Item as="div" action>
            {this.state.editCreatorProfileImg ? (
              <UploadProfileImage
                title='프로필 이미지'
                desc='창작자님 개인이나 팀의 사진을 올려주세요. 얼굴이 나온 사진을 넣으면 프로젝트의 신뢰성 향상에 도움이 됩니다.
                파일 형식은 jpg, png 또는 gif로, 사이즈는 가로 200px, 세로 200px 이상으로 올려주세요.'
                creatorId={this.state.project.creatorId}
                handleClose={this.handleClose}
            />
            ) : (
              <div onClick={(e) => this.startEdit(e, "editCreatorProfileImg")}>
                <div>
                  <h6>프로필 이미지</h6>
                  <ProfileImage userId={this.state.project.creatorId} />
                </div>
                <div style={{ textAlign: "right", color: "tomato" }}>
                  <EditIcon fontSize="small" />
                  {this.state.project.profileImg === 0 ? "입력하기" : "수정하기"}
                </div>
              </div>
            )}
          </ListGroup.Item>          
					{/* 	<ListGroup.Item  as='div' action>
						<InputCreatorName />
					</ListGroup.Item>
					<ListGroup.Item  as='div' action>
						<CustomTextArea
							title='창작자 소개'
							desc='창작자님의 이력과 간단한 소개를 써 주세요.'
							placeholder='창작자 소개를 입력해주세요.'
							minlen='10'
							maxlen='300'
							columnName='intro'
							 />
					</ListGroup.Item>
					<ListGroup.Item  as='div' action>
						<Container>
							<Row>
								<Col>
									<CustomInput
										header=''
										width='50%'
										desc='창작자님은 주로 어느 지역에서 활동하시나요? 활동 지역을 구체적으로 기입해주시면 프로젝트의 신뢰를 높이는 데 도움이 됩니다.'
										title='창작자 활동 지역'
										placeholder='활동 지역을 입력하세요.'
										maxlen='20'
										changeText={this.handleCreatorRegion}
									/>
								</Col>
							</Row>
							<Row style={{ justifyContent: 'flex-end' }}>
								<Button variant='secondary' size='sm'>
									<CloseIcon />
									취소하기
								</Button>{' '}
								<Button variant='primary' size='sm'>
									<CheckIcon />
									저장하기
								</Button>
							</Row>
						</Container>
					</ListGroup.Item> */}
        </ListGroup>
        <p></p>
      </Container>
    );
  }
}

export default ProjectDescription;
