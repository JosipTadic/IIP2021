import React from 'react'

const InputComp = ({modifyParams, param}) => {
    //<input className="input-style" type="text"  placeholder="enter 1st name" onChange={e => modifyParams(param.id, 'firstLegendName', e.target.value)}/>
    return(
      <>
        <input type="color" name="color" style={{width: '40px', height: '29px', margin: '1px', padding: '2px'}} 
        onChange={e => modifyParams(param.id, 'color', e.target.value)}/>
      </>
    )
}

export default InputComp;