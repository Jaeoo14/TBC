import React, { Component } from "react";

import { Form, Container, Row } from "react-bootstrap";

import Pas from "../../../ProjectApiService";

const user = JSON.parse(localStorage.getItem("myStorage"));

export default class UploadImage extends Component {
  state = {
    idx: undefined,
    file: undefined,
    info: undefined,
  };

  componentDidMount() {
    console.log("UploadProfileImage.componentDidMount", this.props.mainImg);
    if (typeof this.props.mainImg === "undefined") return;
    Pas.getFile(this.props.mainImg)
      .then((res) =>
        this.setState({ info: res.data }, () =>
          console.log("UploadProfileImage", this.state)
        )
      )
      .catch((err) => console.log(err));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.mainImg === this.props.mainImg) return;

    Pas.getFile(this.props.mainImg)
      .then((res) =>
        this.setState({ info: res.data }, () =>
          console.log("UploadProfileImage", this.state)
        )
      )
      .catch((err) => console.log(err));
  }

  selectFile = (e) => {
    this.setState({ file: e.target.files[0] }, () => console.log(this.state));
  };

  uploadFile = (e) => {
    e.preventDefault();
    if (typeof this.state.info !== "undefined") {
      Pas.updateFile(this.state.file, this.state.info.id)
        .then((res) => Pas.getFile(this.state.info.id))
        .then((res) =>
          this.setState({ info: res.data }, () =>
            console.log("UploadProfileImage", this.state)
          )
        )
        .catch((err) => console.log(err));
    } else {
      Pas.upload(this.state.file)

        .then((res) => Pas.getFile(res.data))
        .then((res) =>
          this.setState({ idx: res.data.id, info: res.data }, () =>
            console.log("UploadProfileImage", this.state)
          )
        )

        .catch((err) => console.log(err));
    }
  };

  render() {
    const imgSrc =
      typeof this.state.info !== "undefined"
        ? `data:image/png;base64,${this.state.info.data}`
        : "";
    return (
      <Container>
        <Row>
          <Form.Group>
            <Form.File id="project-image" label="" onChange={this.selectFile} />
            <p>
              현재 이미지 {this.state.info && this.state.info.id}:
              {this.state.info && this.state.info.name}
            </p>
            <img src={imgSrc} alt="" width="100px" />
          </Form.Group>
        </Row>
        <div className="div2">
          <button
            class="btn btn-dark btn1"
            size="sm"
            onClick={this.uploadFile}
            disabled={typeof this.state.file === "undefined"}
          >
            저장
          </button>
        </div>
      </Container>
    );
  }
}
