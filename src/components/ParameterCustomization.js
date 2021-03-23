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
          params.map(param => <LineSelect key={param.id} modifyParams={modifyParams} param={param}/>)
        }
        {
          params.map(param => <DashSelect key={param.id} modifyParams={modifyParams} param={param}/>)
        }
        {
          params.map(param => <WidthSelect key={param.id} modifyParams={modifyParams} param={param}/>)
        }
        {
          params.map(param => <OpacitySelect key={param.id} modifyParams={modifyParams} param={param}/>)
        } 
    </>
    )}

export default ParameterCustomization;

/*      {
          <DashSelect key={params[0].id} modifyParams={modifyParams}/>
        } */