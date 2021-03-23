import React from 'react'

const WidthSelect = ({modifyParams, param}) => {
    return(
    <>
      <input type="number" placeholder="Width" name="strokeWidth" onChange={e => modifyParams(param.id, 'strokeWidth', e.target.value)}/>
    </>
    )
}

export default WidthSelect;