import React from 'react';
import {Link} from "react-router-dom";
import './design.css';
import areaImg from '../images/areaChart.png'
import barImg from '../images/barChart2.png'
import lineImg from '../images/lineChart2.png'
import composedImg from '../images/composedChart.png'
import scatterImg from '../images/scatterChart8.PNG'
import scatterImg2 from '../images/scatterChart5.PNG'
import { Card, Row, CardGroup, Col, Container } from 'react-bootstrap';

const Cards = ({variableNumber, chartsSetter}) => { 
  if(variableNumber === 1){
    return (
        <Container fluid>
            <Row>
              <CardGroup>
                  <Col className="margin10">
                      <Link to="/one/oneline" className="nolinkeffect" onClick={()=>chartsSetter({nov:1,dash:true,type:true,width:true,opacity:false,color:true})} >
                          <Card border="info">
                              <Card.Img variant="top" src={lineImg} />
                          <Card.Body>
                            <Card.Title className="nolinkeffect">Line Chart</Card.Title>
                            <Card.Text>
                              This is a wider card with supporting text below as a natural lead-in to
                              additional content. This content is a little bit longer.
                            </Card.Text>
                          </Card.Body>    
                          </Card>
                      </Link>
                  </Col>
                  <Col className="margin10">
                      <Link to="/one/onearea" className="nolinkeffect" onClick={()=>chartsSetter({nov:1,dash:true,type:true,width:true,opacity:true,color:true})} >
                      <Card border="info">
                        <Card.Img variant="top" src={areaImg} />
                        <Card.Body>
                          <Card.Title className="nolinkeffect">Area Chart</Card.Title>
                          <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                          </Card.Text>
                        </Card.Body>    
                      </Card>
                      </Link>
                  </Col>
                  <Col className="margin10">
                  <Link to="/one/onebar" className="nolinkeffect" onClick={()=>chartsSetter({nov:1,dash:false,type:false,width:false,opacity:true,color:true})} >
                      <Card border="info">
                        <Card.Img variant="top" src={barImg} />
                        <Card.Body>
                          <Card.Title className="nolinkeffect">Bar Chart</Card.Title>
                          <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                          </Card.Text>
                        </Card.Body>    
                      </Card>
                  </Link>
                  </Col>
                  <Col  className="margin10">
                  <Link to="/one/onescatter" className="nolinkeffect" onClick={()=>chartsSetter({nov:1,dash:false,type:false,width:true,opacity:true,color:true})} >
                      <Card border="info">
                        <Card.Img variant="top" src={scatterImg} />
                        <Card.Body>
                          <Card.Title className="nolinkeffect">Scatter Chart</Card.Title>
                          <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                          </Card.Text>
                        </Card.Body>    
                      </Card>
                  </Link>
                  </Col>
                </CardGroup>
            </Row>
        </Container>
  )
  }
  if(variableNumber === 2){
    return(
        <Container fluid>
            <Row>
                <CardGroup>
                    <Col className="margin10">
                        <Link to="/two/line" className="nolinkeffect"  onClick={() => chartsSetter({nov:2,dash:true,type:true,width:true,opacity:false,color:true})}>
                            <Card border="info">
                                <Card.Img variant="top" src={lineImg}/>
                                <Card.Body>
                                    <Card.Title className="nolinkeffect">Line Chart</Card.Title>
                                    <Card.Text>
                                      This is a wider card with supporting text below as a natural lead-in to
                                      additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>    
                            </Card>
                        </Link>
                    </Col>
                    <Col className="margin10">
                        <Link to="/two/area" className="nolinkeffect" onClick={()=>chartsSetter({nov:2,dash:true,type:true,width:true,opacity:true,color:true})} >
                            <Card border="info">
                                <Card.Img variant="top" src={areaImg}/>
                                <Card.Body>
                                <Card.Title className="nolinkeffect">Area Chart</Card.Title>
                                <Card.Text>
                                  This is a wider card with supporting text below as a natural lead-in to
                                  additional content. This content is a little bit longer.
                                </Card.Text>
                                </Card.Body>    
                            </Card>
                        </Link>
                    </Col>
                    <Col className="margin10">
                        <Link to="/two/bar" className="nolinkeffect" onClick={()=>chartsSetter({nov:2,dash:false,type:false,width:true,opacity:true,color:true})} >
                            <Card border="info">
                                <Card.Img variant="top" src={barImg}/>
                                <Card.Body>
                                    <Card.Title className="nolinkeffect">Bar Chart</Card.Title>
                                    <Card.Text>
                                      This is a wider card with supporting text below as a natural lead-in to
                                      additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>    
                            </Card>
                        </Link>
                    </Col>
                    <Col  className="margin10">
                        <Link to="/two/scatter" className="nolinkeffect" onClick={()=>chartsSetter({nov:2,dash:false,type:false,width:true,opacity:true,color:true})} >
                            <Card border="info">
                                <Card.Img variant="top" src={scatterImg2}/>
                                <Card.Body>
                                    <Card.Title className="nolinkeffect">Scatter Chart</Card.Title>
                                    <Card.Text>
                                      This is a wider card with supporting text below as a natural lead-in to
                                      additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>    
                            </Card>
                        </Link>
                    </Col>
                    <Col  className="margin10">
                      <Link to="/two/composed" className="nolinkeffect" onClick={()=>chartsSetter({nov:2,dash:true,type:true,width:true,opacity:true,color:true})} >
                        <Card border="info">
                          <Card.Img variant="top" src={composedImg}/>
                          <Card.Body>
                            <Card.Title className="nolinkeffect">Composed Chart</Card.Title>
                            <Card.Text>
                              This is a wider card with supporting text below as a natural lead-in to
                              additional content. This content is a little bit longer.
                            </Card.Text>
                          </Card.Body>    
                        </Card>
                      </Link>
                    </Col>
                </CardGroup>
            </Row>
        </Container>
      )
  }
    return(
        <Container fluid>
            <Row>
                <CardGroup>
                    <Col className="margin10">
                        <Link to="/three/threeline" className="nolinkeffect" onClick={()=>chartsSetter({nov:3,dash:true,type:true,width:true,opacity:false,color:true})} >
                            <Card border="info">
                              <Card.Img variant="top"  src={lineImg}/>
                              <Card.Body>
                                <Card.Title className="nolinkeffect">Line Chart</Card.Title>
                                <Card.Text>
                                  This is a wider card with supporting text below as a natural lead-in to
                                  additional content. This content is a little bit longer.
                                </Card.Text>
                              </Card.Body>    
                            </Card>
                        </Link>
                    </Col>
                    <Col className="margin10">
                        <Link to="/three/threearea" className="nolinkeffect" onClick={()=>chartsSetter({nov:3,dash:true,type:true,width:true,opacity:true,color:true})} >
                            <Card border="info">
                              <Card.Img variant="top" src={areaImg}/>
                              <Card.Body>
                                <Card.Title className="nolinkeffect">Area Chart</Card.Title>
                                <Card.Text>
                                  This is a wider card with supporting text below as a natural lead-in to
                                  additional content. This content is a little bit longer.
                                </Card.Text>
                              </Card.Body>    
                            </Card>
                        </Link>
                    </Col>
                    <Col className="margin10">
                        <Link to="/three/threebar" className="nolinkeffect" onClick={()=>chartsSetter({nov:3,dash:false,type:false,width:false,opacity:true,color:true})} >
                            <Card border="info">
                              <Card.Img variant="top" src={barImg} />
                              <Card.Body>
                                <Card.Title className="nolinkeffect">Bar Chart</Card.Title>
                                <Card.Text>
                                  This is a wider card with supporting text below as a natural lead-in to
                                  additional content. This content is a little bit longer.
                                </Card.Text>
                              </Card.Body>    
                            </Card>
                        </Link>
                    </Col>
                    <Col  className="margin10">
                        <Link to="/three/threescatter" className="nolinkeffect" onClick={()=>chartsSetter({nov:3,dash:false,type:false,width:true,opacity:true,color:true})} >
                            <Card border="info">
                              <Card.Img variant="top" src={scatterImg2} />
                              <Card.Body>
                                <Card.Title className="nolinkeffect">Scatter Chart</Card.Title>
                                <Card.Text>
                                  This is a wider card with supporting text below as a natural lead-in to
                                  additional content. This content is a little bit longer.
                                </Card.Text>
                              </Card.Body>    
                            </Card>
                        </Link>
                    </Col>
                    <Col  className="margin10">
                        <Link to="/three/composed2" className="nolinkeffect" onClick={()=>chartsSetter({nov:3,dash:true,type:true,width:true,opacity:true,color:true})} >
                            <Card border="info">
                              <Card.Img variant="top" src={composedImg} />
                              <Card.Body>
                                <Card.Title className="nolinkeffect">Composed Chart</Card.Title>
                                <Card.Text>
                                  This is a wider card with supporting text below as a natural lead-in to
                                  additional content. This content is a little bit longer.
                                </Card.Text>
                              </Card.Body>    
                            </Card>
                        </Link>
                    </Col>
                </CardGroup>
            </Row>
        </Container>
  )
}
export default Cards;