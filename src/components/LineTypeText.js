import React from 'react'
import {Col} from 'react-bootstrap';

const LineTypeText = ({chartState}) => {
    return(
        chartState.type ?
        <Col md="auto">
            <p>Line Type: </p>
        </Col>
        :
        null
    )
}

export default LineTypeText;