import React from 'react'

const LegendName = ({modifyParams, param}) => {
    //<input className="input-style" type="text"  placeholder="enter 1st name" onChange={e => modifyParams(param.id, 'firstLegendName', e.target.value)}/>
    return(
      <>
        <input type="text" name="legendName" placeholder="legend name"  onChange={e => modifyParams(param.id, 'legendName', e.target.value)}/>
      </>
    )
}

export default LegendName;