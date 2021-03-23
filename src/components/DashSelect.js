import React from 'react';

const DashSelect = ({modifyParams, param}) => {
    return(
    <>
      <input type="number" placeholder="Dash" name="strokeDash" onChange={e => modifyParams(param.id, 'strokeDash', e.target.value)}/>
    </>
    )
}

export default DashSelect;