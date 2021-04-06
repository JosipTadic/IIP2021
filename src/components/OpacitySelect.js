import React from 'react';

const OpacitySelect = ({modifyParams, param, chartState}) => {
  if (!chartState.opacity){return(null)}
    return(
    <>
      <input type="number" placeholder="opacity (0-1)" name="opacity" onChange={e => modifyParams(param.id, 'strokeOpacity', e.target.value)}/>
    </>
    )
}

export default OpacitySelect;