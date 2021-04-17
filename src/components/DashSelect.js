import React from 'react';

const DashSelect = ({modifyParams, param, chartState}) => {
  return(
    <>
      {
        chartState.dash ?
          <input type="number" placeholder="Dash" name="strokeDash" value={param.strokeDash} style={{width: '70px', margin: '1px'}} 
          onChange={e => modifyParams(param.id, 'strokeDash', e.target.value)}/> 
          :
          null
      }
    </>
  )
}

export default DashSelect;