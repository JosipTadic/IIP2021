import React from 'react'

const WidthSelect = ({modifyParams, param, chartState}) => {
  if(!chartState.width){return(null)}
    return(
    <>
      <input type="number" placeholder="Width" name="strokeWidth" onChange={e => modifyParams(param.id, 'strokeWidth', e.target.value)}/>
    </>
    )
}

export default WidthSelect;