import React from 'react';

const OpacitySelect = ({modifyParams, param, chartState}) => {
    return(
      <>
        {
          chartState.opacity ?
            <input type="range" min="0" max="1" step="0.05" placeholder="opacity (0-1)" value={param.strokeOpacity} name="opacity" style={{width: '70px', margin: '1px'}}
            onChange={e => modifyParams(param.id, 'strokeOpacity', e.target.value)}/>
            :
            null
        }
      </>
    )
}

export default OpacitySelect;