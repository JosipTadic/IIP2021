import React from 'react';

const DashSelect = ({modifyParams, param, chartState}) => {
  if (!chartState.dash){return(null)}
    return(
    <>
      <input type="number" placeholder="Dash" name="strokeDash" style={{width: '70px', margin: '1px'}} 
      onChange={e => modifyParams(param.id, 'strokeDash', e.target.value)}/>
    </>
    )
}

export default DashSelect;