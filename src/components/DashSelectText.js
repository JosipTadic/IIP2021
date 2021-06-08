import React from 'react'
import {Col} from 'react-bootstrap';

const DashSelectText = ({chartState}) => {
    return(
        chartState.dash ?
        <Col md="auto">
          <p>Line Dash: </p>
        </Col>
        :
        null
    )
}

export default DashSelectText;