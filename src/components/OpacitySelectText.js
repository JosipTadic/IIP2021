import React from 'react'
import {Col} from 'react-bootstrap';

const OpacitySelectText = ({chartState}) => {
    return(
        chartState.opacity ?
        <Col md="auto">
          <p>Opacity: </p>
        </Col>
        :
        null
    )
}

export default OpacitySelectText;