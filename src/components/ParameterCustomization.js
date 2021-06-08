import React from 'react';
import InputComp from './InputComp';
import LineSelect from './LineSelect';
import DashSelect from './DashSelect';
import DashSelectText from './DashSelectText';
import WidthSelect from './WidthSelect';
import WidthSelectText from './WidthSelectText';
import OpacitySelect from './OpacitySelect';
import OpacitySelectText from './OpacitySelectText';
import LegendName from './LegendName';
import LineTypeText from './LineTypeText';
import {Container, Row, Col} from 'react-bootstrap';

const ParameterCustomization = ({params, modifyParams, chartState}) => {
    return(
      <Container fluid>
        <div style={{margin: '0px 220px 15px 10px'}}>
          <h4>Customize styles:</h4>
        </div>
        <Row>
          <Col md="auto">
            <p>Color: </p>
          </Col>
          <Col>
          {
            params.filter(param => param.id <= chartState.numberOfVariables).map(param => <InputComp key={param.id} 
              modifyParams={modifyParams} param={param}/>)
          }
          </Col>
        </Row>
        <Row>
          <Col md="auto">
            <p>Legend Name: </p>
          </Col>
          <Col>
            {
              params.filter(param => param.id <= chartState.numberOfVariables).map(param => <LegendName key={param.id} 
                modifyParams={modifyParams} param={param}/>)
            }
          </Col>
        </Row>
        <Row>
          <LineTypeText chartState={chartState}/>
          <Col>
          {
            params.filter(param => param.id <= chartState.numberOfVariables).map(param => <LineSelect key={param.id} 
              modifyParams={modifyParams} param={param} chartState={chartState}/>)
          }
          </Col>
        </Row>
        <Row>
          <WidthSelectText chartState={chartState}/>
          <Col>
          {
            params.filter(param => param.id <= chartState.numberOfVariables).map(param => <WidthSelect key={param.id} 
              modifyParams={modifyParams} param={param} chartState={chartState}/>)
          }
          </Col>
        </Row>
        <Row>
          <DashSelectText chartState={chartState}/>
          <Col>
          {
            params.filter(param => param.id <= chartState.numberOfVariables).map(param => <DashSelect key={param.id} 
              modifyParams={modifyParams} param={param} chartState={chartState}/>)
          }
          </Col>
        </Row>
        <Row>
          <OpacitySelectText chartState={chartState}/>
          <Col>
          {
            params.filter(param => param.id <= chartState.numberOfVariables).map(param => <OpacitySelect key={param.id} 
              modifyParams={modifyParams} param={param} chartState={chartState}/>)
          }
          </Col>
        </Row>
      </Container>
    )}

export default ParameterCustomization;