import React from 'react';

const LabelComp = ({isLabel, setIsLabel}) => {
  
  if(!isLabel) {return(
      <>
        <input type="checkbox" onChange={(e)=>(setIsLabel(e.target.checked))} />
      </>
  )}
    return(
      <>
        <input type="checkbox" onChange={(e)=>(setIsLabel(e.target.checked))} />
      </>
    )
  }

export default LabelComp;