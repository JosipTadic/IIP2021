import React from 'react';
import {Link} from "react-router-dom";
import './cards.css';
import areaImg from '../images/areaChart.png'
import barImg from '../images/barChart2.png'
import lineImg from '../images/lineChart2.png'
import composedImg from '../images/composedChart.png'
import scatterImg from '../images/scatterChart8.PNG'
import scatterImg2 from '../images/scatterChart5.PNG'
import { Card, Row, CardGroup, Col, Container } from 'react-bootstrap';

const Cards = ({variableNumber, chartsSetter}) => { 
  switch(variableNumber){
    case 1:
    return (
        <Container fluid>
            <Row>
              <CardGroup>
                  <Col id="margin10">
                      <Link to="/one/oneline" id="nolinkeffect" onClick={()=>chartsSetter({nov:1,dash:true,type:true,width:true,opacity:false,color:true})} >
                          <Card border="info" style={{ height: '34rem', width: '20rem' }}>
                              <Card.Img variant="top" src={lineImg} />
                          <Card.Body>
                            <Card.Title id="nolinkeffect">Line Chart</Card.Title>
                            <Card.Text>
                              A line chart or line plot or line graph or curve chart is a type of chart which displays information as a 
                              series of data points called 'markers' connected by line segments, basic type of chart.
                            </Card.Text>
                          </Card.Body>    
                          </Card>
                      </Link>
                  </Col>
                  <Col id="margin10">
                      <Link to="/one/onearea" id="nolinkeffect" onClick={()=>chartsSetter({nov:1,dash:true,type:true,width:true,opacity:true,color:true})} >
                      <Card border="info" style={{ height: '34rem', width: '20rem' }}>
                        <Card.Img variant="top" src={areaImg} />
                        <Card.Body>
                          <Card.Title id="nolinkeffect">Area Chart</Card.Title>
                          <Card.Text>
                            An area chart displays graphically quantitative data. It is based on the line chart. 
                            The area between axis and line are commonly emphasized with colors, textures and hatchings.
                          </Card.Text>
                        </Card.Body>    
                      </Card>
                      </Link>
                  </Col>
                  <Col id="margin10">
                  <Link to="/one/onebar" id="nolinkeffect" onClick={()=>chartsSetter({nov:1,dash:false,type:false,width:false,opacity:true,color:true})} >
                      <Card border="info" style={{ height: '34rem', width: '19rem' }}>
                        <Card.Img variant="top" src={barImg} />
                        <Card.Body>
                          <Card.Title id="nolinkeffect">Bar Chart</Card.Title>
                          <Card.Text>
                            A bar chart or bar graph is a chart or graph that presents categorical data with
                            rectangular bars with heights or lengths proportional to the values that they represent.
                          </Card.Text>
                        </Card.Body>    
                      </Card>
                  </Link>
                  </Col>
                  <Col  id="margin10">
                  <Link to="/one/onescatter" id="nolinkeffect" onClick={()=>chartsSetter({nov:1,dash:false,type:false,width:true,opacity:true,color:true})} >
                      <Card border="info" style={{ height: '34rem', width: '20rem' }}>
                        <Card.Img variant="top" src={scatterImg}/>
                        <Card.Body>
                          <Card.Title id="nolinkeffect">Scatter Chart</Card.Title>
                          <Card.Text>
                            A scatter chart uses dots to represent values for two different numeric variables.
                            The position of each dot on the horizontal axis indicates values for an individual data point.
                          </Card.Text>
                        </Card.Body>    
                      </Card>
                  </Link>
                  </Col>
                </CardGroup>
            </Row>
        </Container>
  )
  case 2:
    return(
        <Container fluid>
            <Row>
                <CardGroup>
                    <Col id="margin10">
                        <Link to="/two/line" id="nolinkeffect"  onClick={() => chartsSetter({nov:2,dash:true,type:true,width:true,opacity:false,color:true})}>
                            <Card border="info" style={{ height: '32rem' }}>
                                <Card.Img variant="top" src={lineImg}/>
                                <Card.Body>
                                    <Card.Title id="nolinkeffect">Line Chart</Card.Title>
                                    <Card.Text>
                                      A line chart or line plot or line graph or curve chart is a type of chart which displays information as a 
                                      series of data points called 'markers' connected by line segments, basic type of chart.
                                    </Card.Text>
                                </Card.Body>    
                            </Card>
                        </Link>
                    </Col>
                    <Col id="margin10">
                        <Link to="/two/area" id="nolinkeffect" onClick={()=>chartsSetter({nov:2,dash:true,type:true,width:true,opacity:true,color:true})} >
                            <Card border="info" style={{ height: '32rem' }}>
                                <Card.Img variant="top" src={areaImg}/>
                                <Card.Body>
                                <Card.Title id="nolinkeffect">Area Chart</Card.Title>
                                <Card.Text>
                                  An area chart displays graphically quantitative data. It is based on the line chart. 
                                  The area between axis and line are commonly emphasized with colors, textures and hatchings.
                                </Card.Text>
                                </Card.Body>    
                            </Card>
                        </Link>
                    </Col>
                    <Col id="margin10">
                        <Link to="/two/bar" id="nolinkeffect" onClick={()=>chartsSetter({nov:2,dash:false,type:false,width:true,opacity:true,color:true})} >
                            <Card border="info" style={{ height: '32rem' }}>
                                <Card.Img variant="top" src={barImg}/>
                                <Card.Body>
                                    <Card.Title id="nolinkeffect">Bar Chart</Card.Title>
                                    <Card.Text>
                                      A bar chart or bar graph is a chart or graph that presents categorical data with
                                      rectangular bars with heights or lengths proportional to the values that they represent.
                                    </Card.Text>
                                </Card.Body>    
                            </Card>
                        </Link>
                    </Col>
                    <Col  id="margin10">
                        <Link to="/two/scatter" id="nolinkeffect" onClick={()=>chartsSetter({nov:2,dash:false,type:false,width:true,opacity:true,color:true})} >
                            <Card border="info" style={{ height: '32rem' }}>
                                <Card.Img variant="top" src={scatterImg2}/>
                                <Card.Body>
                                    <Card.Title id="nolinkeffect">Scatter Chart</Card.Title>
                                    <Card.Text>
                                      A scatter chart uses dots to represent values for two different numeric variables.
                                      The position of each dot on the horizontal axis indicates values for an individual data point.
                                    </Card.Text>
                                </Card.Body>    
                            </Card>
                        </Link>
                    </Col>
                    <Col  id="margin10">
                      <Link to="/two/composed" id="nolinkeffect" onClick={()=>chartsSetter({nov:2,dash:true,type:true,width:true,opacity:true,color:true})} >
                        <Card border="info" style={{ height: '32rem' }}>
                          <Card.Img variant="top" src={composedImg}/>
                          <Card.Body>
                            <Card.Title id="nolinkeffect">Composed Chart</Card.Title>
                            <Card.Text>
                              A combination chart is a chart that combines two or more chart types in a single chart.
                              It displays the data using a number of bars, lines, areas and/or dots, each for its own category.
                            </Card.Text>
                          </Card.Body>    
                        </Card>
                      </Link>
                    </Col>
                </CardGroup>
            </Row>
        </Container>
      )
    default:
      return(
        <Container fluid>
            <Row>
                <CardGroup>
                    <Col id="margin10">
                        <Link to="/three/threeline" id="nolinkeffect" onClick={()=>chartsSetter({nov:3,dash:true,type:true,width:true,opacity:false,color:true})} >
                            <Card border="info" style={{ height: '32rem' }}>
                              <Card.Img variant="top"  src={lineImg}/>
                              <Card.Body>
                                <Card.Title id="nolinkeffect">Line Chart</Card.Title>
                                <Card.Text>
                                  A line chart or line plot or line graph or curve chart is a type of chart which displays information as a 
                                  series of data points called 'markers' connected by line segments, basic type of chart.
                                </Card.Text>
                              </Card.Body>    
                            </Card>
                        </Link>
                    </Col>
                    <Col id="margin10">
                        <Link to="/three/threearea" id="nolinkeffect" onClick={()=>chartsSetter({nov:3,dash:true,type:true,width:true,opacity:true,color:true})} >
                            <Card border="info" style={{ height: '32rem' }}>
                              <Card.Img variant="top" src={areaImg}/>
                              <Card.Body>
                                <Card.Title id="nolinkeffect">Area Chart</Card.Title>
                                <Card.Text>
                                  An area chart displays graphically quantitative data. It is based on the line chart. 
                                  The area between axis and line are commonly emphasized with colors, textures and hatchings.
                                </Card.Text>
                              </Card.Body>    
                            </Card>
                        </Link>
                    </Col>
                    <Col id="margin10">
                        <Link to="/three/threebar" id="nolinkeffect" onClick={()=>chartsSetter({nov:3,dash:false,type:false,width:false,opacity:true,color:true})} >
                            <Card border="info" style={{ height: '32rem' }}>
                              <Card.Img variant="top" src={barImg} />
                              <Card.Body>
                                <Card.Title id="nolinkeffect">Bar Chart</Card.Title>
                                <Card.Text>
                                  A bar chart or bar graph is a chart or graph that presents categorical data with
                                  rectangular bars with heights or lengths proportional to the values that they represent.
                                </Card.Text>
                              </Card.Body>    
                            </Card>
                        </Link>
                    </Col>
                    <Col  id="margin10">
                        <Link to="/three/threescatter" id="nolinkeffect" onClick={()=>chartsSetter({nov:3,dash:false,type:false,width:true,opacity:true,color:true})} >
                            <Card border="info" style={{ height: '32rem' }}>
                              <Card.Img variant="top" src={scatterImg2} />
                              <Card.Body>
                                <Card.Title id="nolinkeffect">Scatter Chart</Card.Title>
                                <Card.Text>
                                  A scatter chart uses dots to represent values for two different numeric variables.
                                  The position of each dot on the horizontal axis indicates values for an individual data point.
                                </Card.Text>
                              </Card.Body>    
                            </Card>
                        </Link>
                    </Col>
                    <Col  id="margin10">
                        <Link to="/three/composed2" id="nolinkeffect" onClick={()=>chartsSetter({nov:3,dash:true,type:true,width:true,opacity:true,color:true})} >
                            <Card border="info" style={{ height: '32rem' }}>
                              <Card.Img variant="top" src={composedImg} />
                              <Card.Body>
                                <Card.Title id="nolinkeffect">Composed Chart</Card.Title>
                                <Card.Text>
                                  A combination chart is a chart that combines two or more chart types in a single chart.
                                  It displays the data using a number of bars, lines, areas and/or dots, each for its own category.
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
}
export default Cards;