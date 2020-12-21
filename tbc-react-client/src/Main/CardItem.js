import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Card, CardDeck } from 'react-bootstrap';
import './pagination.css';
import './Card.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NotFavoriteIcon from '@material-ui/icons/FavoriteBorderOutlined';
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
        console.error("Discover.js의 alignAmountPercent() 에러!", err);
      });
  };


  state = {
    // liked : false,
    categoryText : "",
    amountPercent : Number(`${this.numberDemical(this.props.fundedAmount * 100 / this.props.fundingGoalAmount)}`),
  };


  componentDidMount() {
    this.getCategoryId();
  }


  //숫자 세자리마다 콤마 끊어주는 함수
  numberFormatComma(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  //소수점 n자리씩 끊어주는 함수
  numberDemical(x) {
    return parseFloat(x).toFixed(0);
  }


  getCategoryId = () => {

    ProjectApiService.getCategory(this.props.project.category)
    .then(res => {
        this.setState({ categoryId : res.data.id, categoryText : res.data.text });
        // console.log('getCategoryId&categoryText 값', this.state.categoryText)
    })
    .catch(err => {
        console.error('DiscoverItem.js의 getCategoryId() 에러!', err);
    })
  }
  // toggleLike = (id) => {
  //   console.log(`id = > ${id}`);
  //   const localLiked = !this.state.liked;        
  //   this.setState({ liked : localLiked });
  // };

  
  render() {
    return (
      
      <div>
        
        <div className='Card' >
          <CardDeck  >
              {/* <Card.Link href={`/detail/${this.props.project.url}`}> */}
                    {/* <div style={{float:"right"}} onClick={() => this.toggleLike()}>
                    {this.props.project.liked === false ? <NotFavoriteIcon /> : <FavoriteIcon color="secondary" />} 
                </div> */}
              <Card style={{width: 240}}>
                            {/* //     좋아요기능      */}
              {/* <Card.Img variant="top" src={list.mainImg} style={{ height: 180}} /> */}
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
                <small className="text-muted"><span style={{color:"#ff4646", fontSize:15}}>{this.state.amountPercent}% 달성</span></small>
              </Card.Footer>
            </Card>
            {/* </Card.Link> */}
      </CardDeck>
        </div>
      </div>
    )
  }
}

export default CardItem;
