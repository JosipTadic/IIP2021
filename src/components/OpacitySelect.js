import React from 'react';

const OpacitySelect = ({modifyParams, param, chartState}) => {
  if (!chartState.opacity){return(null)}
    return(
    <>
      <input type="range" min="0" max="1" step="0.05" placeholder="opacity (0-1)" name="opacity" style={{width: '70px', margin: '1px'}}
      onClick={e => modifyParams(param.id, 'strokeOpacity', e.target.value)}/>
    </>
    )
}

export default OpacitySelect;