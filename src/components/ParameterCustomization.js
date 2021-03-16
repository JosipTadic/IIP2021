import React from 'react';
import InputComp from './InputComp';
import LineSelect from './LineSelect';
import DashSelect from './DashSelect';
import WidthSelect from './WidthSelect';
import OpacitySelect from './OpacitySelect';

const ParameterCustomization = ({params,modifyParams}) => {
    return( 
    <>
        {
          params.map(param => <InputComp key={param.id} modifyParams={modifyParams} param={param}/>)
        }
        {
          <LineSelect key={params[0].id} modifyParams={modifyParams}/>
        }
        {
          <DashSelect key={params[0].id} modifyParams={modifyParams}/>
        }
        {
          params.map(param => <WidthSelect key={param.id} modifyParams={modifyParams} param={param}/>)
        }
        {
          <OpacitySelect key={params[0].id} modifyParams={modifyParams}/>
        } 
    </>
    )}

export default ParameterCustomization;