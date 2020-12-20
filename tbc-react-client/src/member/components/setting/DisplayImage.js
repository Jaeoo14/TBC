import React, { Component } from "react";
import { Image, Card } from "react-bootstrap";
import Pas from "../../../ProjectApiService";

import "../../../components/DisplayImage.css";

// props
//  pId : 프로젝트 id.
//  width : 화면에 그릴 이미지의 너비.
class DisplayImage extends Component {
  state = {
    file: {}, // 이미지 파일 데이타. file 테이블 참조.
  };

  componentDidMount = () => {
    Pas.getFileOfProject(this.props.pId)
      .then((res) =>
        this.setState({ file: res.data }, () => console.log(this.state.file))
      )
      .catch((err) => console.log(err));
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.pId === this.props.pId) return;

    Pas.getFileOfProject(this.props.pId)
      .then((res) =>
        this.setState({ file: res.data }, () => console.log(this.state.file))
      )
      .catch((err) => console.log(err));
  }

  render() {
    // return (<img src={`data:image/png;base64,${this.state.file.data}`} alt='' width={this.props.width} height={this.props.height}/>);
    return (
      // <Image
      // 	src={`data:image/png;base64,${this.state.file.data}`}
      // 	alt='image'
      // 	style={{width:this.props.width, height:this.props.height}}
      // 	thumbnail/>

      typeof this.state.file.data !== "undefined" && (
        <Card
          className="bg-light text-dark"
          style={{ width: this.props.width, height: this.props.height }}
        >
          <Card.Img
            src={`data:image/png;base64,${this.state.file.data}`}
            alt="Card image"
            style={{ width: "100%", height: "100%" }}
          />
          <Card.ImgOverlay>
            <Card.Title>{this.props.children}</Card.Title>
          </Card.ImgOverlay>
        </Card>
      )
    );
  }
}

export default DisplayImage;
