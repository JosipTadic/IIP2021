import React from 'react';

const LineSelect = ({modifyParams, param, chartState}) => {
  if(!chartState.type) {return(null)}
    return(
      <>
        <select style={{width: '115px', height: '29px', margin: '1px'}} onChange={e => modifyParams(param.id, 'lineType', e.target.value)}>
              <option value="monotone">Monotone</option>
              <option value="basis">Basis</option>
              <option value="linear">Linear</option>
              <option value="natural">Natural</option>
              <option value="step">Step</option>
              <option value="basisClosed">Basis closed</option>
              <option value="basisOpen">Basis open</option>
              <option value="monotoneX">Monotone X</option>
              <option value="monotoneY">Monotone Y</option>
              <option value="stepBefore">Step before</option>
              <option value="stepAfter">Step after</option>
          </select>
      </>
    )
  }

  export default LineSelect;