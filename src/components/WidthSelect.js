import React from 'react'

const WidthSelect = ({modifyParams, param, chartState}) => {
    return(
    <>
      {
        chartState.width ?
          <input type="number" placeholder="Width" name="strokeWidth" value={param.strokeWidth} style={{width: '70px', margin: '1px'}}
          onChange={e => modifyParams(param.id, 'strokeWidth', e.target.value)}/> 
          :
          null
      }
    </>
    )
}
export default WidthSelect;