import { Button } from '@material-ui/core';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CardColumns, Card } from 'react-bootstrap';
import Pagination from 'react-bootstrap/Pagination'
import './pagination.css';
import './Card.css';

function Cards () {
    return (
        <div>
            <br/>
             <h4 style={{textAlign:"center"}}>주목할 만한 프로젝트</h4>
        <div className='Card' >
            {/* <br/> */}
            <CardColumns style={{display: 'inline-flex'}} >
                <Pagination size="2">
                <Pagination.Prev style={{borderColor: '#000'}}/>
                    <Pagination.Item active href="#"  style={{backgroundColor: '#fff'}}>
                        <Card.Link href="#" style={{color: '#000'}}>
                        <Card style={{width: 240, height: 360}}>
                            <Card.Img variant="top" src="http://ipsumimage.appspot.com/240x180" style={{width: 240, height: 180}}/>
                            <Card.Body>
                                <Card.Text style={{fontSize: 10, textAlign: 'left'}}>
                                카테고리 | 창작자
                                </Card.Text>
                                <Card.Title> 제목부분 </Card.Title>
                                <Card.Text style={{fontSize: 15}}>
                                    내용부분
                                </Card.Text>
                            <Card.Text style={{textAlign:'left'}} >
                                <span style={{color:"#ff4646", fontSize:15}}> nnn%</span>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        </Card.Link>
                    </Pagination.Item>
                    <Pagination.Item active href="#"  style={{backgroundColor: '#fff'}}>
                        <Card.Link href="#" style={{color: '#000'}}>
                        <Card style={{width: 240, height: 360}}>
                            <Card.Img variant="top" src="http://ipsumimage.appspot.com/240x180" style={{width: 240, height: 180}}/>
                            <Card.Body>
                                <Card.Text style={{fontSize: 10, textAlign: 'left'}}>
                                    카테고리 | 창작자
                                </Card.Text>
                                <Card.Title> 제목부분 </Card.Title>
                                <Card.Text style={{fontSize: 15}}>
                                    내용부분
                                </Card.Text>
                            <Card.Text style={{textAlign:'left'}} >
                                <span style={{color:"#ff4646", fontSize:15}}> nnn%</span>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        </Card.Link>
                    </Pagination.Item>
                    <Pagination.Item active href="#"  style={{backgroundColor: '#fff'}}>
                        <Card.Link href="#" style={{color: '#000'}}>
                        <Card style={{width: 240, height: 360}} >
                            <Card.Img variant="top" src="http://ipsumimage.appspot.com/240x180" style={{width: 240, height: 180}}/>
                            <Card.Body>
                                <Card.Text style={{fontSize: 10, textAlign: 'left'}}>
                                    카테고리 | 창작자
                                </Card.Text>
                                <Card.Title> 제목부분 </Card.Title>
                                <Card.Text style={{fontSize: 15}}>
                                    내용부분
                                </Card.Text>
                            <Card.Text style={{textAlign:'left'}} >
                                <span style={{color:"#ff4646", fontSize:15}}> nnn%</span>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        </Card.Link>
                    </Pagination.Item>
                    <Pagination.Item active href="#"  style={{backgroundColor: '#fff'}}>
                        <Card.Link href="#" style={{color: '#000'}}>
                        <Card style={{width: 240, height: 360}}>
                            <Card.Img variant="top" src="http://ipsumimage.appspot.com/240x180" style={{width: 240, height: 180}}/>
                            <Card.Body>
                                <Card.Text style={{fontSize: 10, textAlign: 'left'}}>
                                카테고리 | 창작자
                                </Card.Text>
                                <Card.Title> 제목부분 </Card.Title>
                                <Card.Text style={{fontSize: 15}}>
                                    내용부분
                                </Card.Text>
                            <Card.Text style={{textAlign:'left'}} >
                                <span style={{color:"#ff4646", fontSize:15}}> nnn%</span>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        </Card.Link>
                    </Pagination.Item>
                <Pagination.Next />
                </Pagination>
            </CardColumns>
        </div>
                <br/>
            <div className="Card">
                <Button style={{backgroundColor: 'whitesmoke', borderRadius: 20, fontSize: 16, paddingLeft: 30, paddingRight: 30}} href="#">???? 프로젝트 더보기</Button>
            </div>
        </div>
    );
}



export default Cards;
