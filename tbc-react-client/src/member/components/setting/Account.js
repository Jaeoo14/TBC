import { Component } from "react";
import "../../style/Setting.css";
import { Paper, Grid } from "@material-ui/core/";
import { Link } from "react-router-dom";
import Api from "../../../ProjectApiService";

const user = JSON.parse(localStorage.getItem("myStorage"));

class Account extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      name: "",
      pwd: "",
      address: "",
      tel: "",
      payment: "",
      // 변경 가능한 값
      newPwd: "",
      newAddr: "",
      newTel: "",
      newPay: "",
      // 상태
      editPwd: false,
      editAddr: false,
      editTel: false,
      editPay: false,
    };
  }
  componentDidMount() {
    let user = JSON.parse(localStorage.getItem("myStorage"));
    Api.getUser(user.id)
      .then((res) => {
        localStorage.setItem("myStorage", JSON.stringify(res.data));
      })
      .catch((err) => console.log(err));

    user = JSON.parse(localStorage.getItem("myStorage"));
    if (user) {
      this.setState({
        id: user.id,
        name: user.name,
        pwd: user.pwd,
        address: user.address,
        tel: user.tel,
        payment: user.payment,
      });
    }
  }
  // edit 시작
  startEdit = (e, target) => {
    e.preventDefault();
    this.setState(
      {
        editPwd: false,
        editAddr: false,
        editTel: false,
        editPay: false,
      },
      () => this.setState({ [target]: true })
    );
  };
  // edit 취소
  endEdit = () => {
    this.setState({
      editPwd: false,
      editAddr: false,
      editTel: false,
      editPay: false,
    });
  };

  // edit 중
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  };

  //state부분만 다름
  updateAddr = (e) => {
    e.preventDefault();
    if (this.state.newAddr !== "") {
      console.log("intro 업데이트", this.state.newAddr);
      user.address = this.state.newAddr;

      Api.updateIntro(user)
        .then()
        .catch((err) => console.log(err));

      this.setState({ address: user.address });
      this.endEdit();
    } else {
      alert("입력을 하시오");
    }
  };

  updateTel = (e) => {
    e.preventDefault();
    if (this.state.newTel !== "") {
      console.log("intro 업데이트", this.state.newTel);
      user.tel = this.state.newTel;

      Api.updateIntro(user)
        .then()
        .catch((err) => console.log(err));

      this.setState({ tel: user.tel });
      this.endEdit();
    } else {
      alert("입력을 하시오");
    }
  };

  updatePay = (e) => {
    e.preventDefault();
    if (this.state.newPay !== "") {
      console.log("intro 업데이트", this.state.newPay);
      user.payment = this.state.newPay;

      Api.updateIntro(user)
        .then()
        .catch((err) => console.log(err));

      this.setState({ payment: user.payment });
      this.endEdit();
    } else {
      alert("입력을 하시오");
    }
  };

  render() {
    return (
      <Grid container spacing={3}>
        <Grid xs={8}>
          <div id="first">
            <div className="div1">이름</div>
            <div className="div2">{this.state.name}</div>
            <hr />
          </div>

          {this.state.editPwd ? (
            <div>비번</div>
          ) : (
            <div>
              <div className="div1">
                비밀번호
                <span>
                  <button onClick={(e) => this.startEdit(e, "editPwd")}>
                    변경
                  </button>
                </span>
              </div>
              <br />
              <hr />
            </div>
          )}

          {this.state.editAddr ? (
            <form>
              <div className="div1">
                <div className="div1">
                  주소
                  <span>
                    <button onClick={(e) => this.endEdit(e, "editAddr")}>
                      취소
                    </button>
                  </span>
                </div>
                <input
                  id="newAddr"
                  name="newAddr"
                  type="text"
                  onChange={this.handleChange}
                  className="form-control div2 input2"
                  placeholder={this.state.address}
                />
              </div>
              <div className="div2">
                <button class="btn btn-dark btn1" onClick={this.updateAddr}>
                  저장
                </button>
              </div>
              <hr />
            </form>
          ) : (
            <div className="div1">
              <div className="div1">
                주소
                <span>
                  <button onClick={(e) => this.startEdit(e, "editAddr")}>
                    변경
                  </button>
                </span>
              </div>
              {this.state.address === "''" ? (
                <div className="div2">미등록 상태입니다.</div>
              ) : (
                <div className="div2">{this.state.address}</div>
              )}
              <hr />
            </div>
          )}

          {this.state.editTel ? (
            <form>
              <div className="div1">
                <div className="div1">
                  연락처
                  <span>
                    <button onClick={(e) => this.endEdit(e, "editTel")}>
                      취소
                    </button>
                  </span>
                </div>
                <input
                  id="newTel"
                  name="newTel"
                  type="text"
                  onChange={this.handleChange}
                  className="form-control div2 input2"
                  placeholder={this.state.tel}
                />
              </div>
              <div className="div2">
                <button class="btn btn-dark btn1" onClick={this.updateTel}>
                  저장
                </button>
              </div>
              <hr />
            </form>
          ) : (
            <div className="div1">
              <div className="div1">
                연락처
                <span>
                  <button onClick={(e) => this.startEdit(e, "editTel")}>
                    변경
                  </button>
                </span>
              </div>
              {this.state.tel === "''" ? (
                <div className="div2">미등록 상태입니다.</div>
              ) : (
                <div className="div2">{this.state.tel}</div>
              )}
              <hr />
            </div>
          )}

          {this.state.editPay ? (
            <form>
              <div className="div1">
                <div className="div1">
                  결제수단
                  <span>
                    <button onClick={(e) => this.endEdit(e, "editPay")}>
                      취소
                    </button>
                  </span>
                </div>
                <input
                  id="newPay"
                  name="newPay"
                  type="text"
                  onChange={this.handleChange}
                  className="form-control div2 input2"
                  placeholder={this.state.payment}
                />
              </div>
              <div className="div2">
                <button class="btn btn-dark btn1" onClick={this.updatePay}>
                  저장
                </button>
              </div>
              <hr />
            </form>
          ) : (
            <div className="div1">
              <div className="div1">
                결제수단
                <span>
                  <button onClick={(e) => this.startEdit(e, "editPay")}>
                    변경
                  </button>
                </span>
              </div>
              {this.state.payment === "''" ? (
                <div className="div2">미등록 상태입니다.</div>
              ) : (
                <div className="div2">{this.state.payment}</div>
              )}
            </div>
          )}
        </Grid>
        <Grid item xs={4} sm={4}>
          <Paper id="paper" variant="outlined">
            <p class="p1">이메일과 연락처는 어디에 쓰이나요?</p>
            <div class="p2">
              이메일과 연락처로 프로젝트, 후원 및 결제 관련 알림을 드립니다.
              배송 받는 분의 연락처는 개별 후원내역에서 변경해주세요&nbsp;
              이메일과 연락처로 프로젝트, 후원 및 결제 관련 알림을 드립니다.
              배송 받는 분의 연락처는 개별 후원내역에서 변경해주세요&nbsp;
              <Link to="#">{"내 후원현황 바로가기"}</Link>
            </div>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default Account;
