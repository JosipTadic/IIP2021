import React from 'react';
import Button from 'react-bootstrap/Button';

const ButtonComp = (props) => {
    return(
      <Button block {...props}>{props.text}</Button>
    )
  }

export default ButtonComp;