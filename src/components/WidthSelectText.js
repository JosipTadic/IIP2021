import React from 'react'
import {Col} from 'react-bootstrap';

const WidthSelectText = ({chartState}) => {
    return(
        chartState.width ?
        <Col md="auto">
          <p>Line Width: </p>
        </Col>
        :
        null
    )
}

export default WidthSelectText;