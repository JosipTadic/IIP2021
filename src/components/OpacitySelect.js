import React from 'react';

const OpacitySelect = ({modifyParams}) => {
    return(
    <>
      <input type="number" placeholder="opacity" name="opacity" onChange={e => modifyParams(1, 'strokeOpacity', e.target.value)}/>
    </>
    )
}

export default OpacitySelect;