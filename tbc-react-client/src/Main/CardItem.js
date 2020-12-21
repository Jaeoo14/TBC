import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Card, CardDeck } from 'react-bootstrap';
import './pagination.css';
import './Card.css';
import DisplayImage from '../components/DisplayImage';
import CreatorName from '../member/components/CreatorName';
import ProjectApiService from '../ProjectApiService';

class CardItem extends Component{

  viewAlignAmountPercent = () => {
    ProjectApiService.alignAmountPercent()
      .then((res) => {
        this.setState({ lists: res.data });
        console.log("alignAmountPercent 값", res.data);
      })
      .catch((err) => {
        console.error("Cards.js의 alignAmountPercent() 에러!", err);
      });
  };

  state = {
    categoryText : "",
    amountPercent : Number(`${this.numberDemical(this.props.fundedAmount * 100 / this.props.fundingGoalAmount)}`),
  };
  componentDidMount() {
    this.getCategoryId();
  }
  numberFormatComma(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  numberDemical(x) {
    return parseFloat(x).toFixed(0);
  }
  getCategoryId = () => {

    ProjectApiService.getCategory(this.props.project.category)
    .then(res => {
        this.setState({ categoryId : res.data.id, categoryText : res.data.text });
    })
    .catch(err => {
        console.error('CardItem.js의 getCategoryId() 에러!', err);
    })
  }
  render() {
    return (
      <div>
        <div className='Card' >
          <CardDeck>
              <Card style={{width: 240}}>
              <DisplayImage pId={this.props.project.id} width="208px" height="180px"  />
              <Card.Body>
                <Card.Subtitle style={{fontSize: 10, textAlign: 'left'}}>
                {this.state.categoryText}&nbsp;
                    | <CreatorName creatorId={this.props.project.creatorId}/>
                </Card.Subtitle>
                <Card.Title>{this.props.project.shortTitle}</Card.Title>
                <Card.Text style={{fontSize: 15}}>
                      {this.props.project.content}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
              <small className="text-muted">
                  <span style={{color:"#ff4646", fontSize:15}}>
                      {Number(`${this.numberDemical(this.props.project.fundedAmount * 100 / this.props.project.fundingGoalAmount)}`)}% 달성
                  </span>
              </small>
              </Card.Footer>
            </Card>
      </CardDeck>
        </div>
      </div>
    )
  }
}

export default CardItem;
