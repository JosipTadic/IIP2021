import React from 'react';

const DashSelect = ({modifyParams}) => {
    return(
    <>
      <input type="number" placeholder="Dash" name="strokeDash" onChange={e => modifyParams(1, 'strokeDash', e.target.value)}/>
    </>
    )
}

export default DashSelect;