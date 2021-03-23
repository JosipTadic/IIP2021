import React from 'react';

const OpacitySelect = ({modifyParams, param}) => {
    return(
    <>
      <input type="number" placeholder="opacity" name="opacity" onChange={e => modifyParams(param.id, 'strokeOpacity', e.target.value)}/>
    </>
    )
}

export default OpacitySelect;