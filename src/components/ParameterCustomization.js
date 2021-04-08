import React from 'react';
import InputComp from './InputComp';
import LineSelect from './LineSelect';
import DashSelect from './DashSelect';
import WidthSelect from './WidthSelect';
import OpacitySelect from './OpacitySelect';
import LegendName from './LegendName';

const ParameterCustomization = ({params, modifyParams, chartState}) => {
    return( 
    <>
        {
          params.filter(param => param.id <= chartState.numberOfVariables).map(param => <InputComp key={param.id} 
            modifyParams={modifyParams} param={param}/>)
        }
        {
          params.filter(param => param.id <= chartState.numberOfVariables).map(param => <LegendName key={param.id} 
            modifyParams={modifyParams} param={param}/>)
        }
        {
          params.filter(param => param.id <= chartState.numberOfVariables).map(param => <LineSelect key={param.id} 
            modifyParams={modifyParams} param={param} chartState={chartState}/>)
        }
        {
          params.filter(param => param.id <= chartState.numberOfVariables).map(param => <DashSelect key={param.id} 
            modifyParams={modifyParams} param={param} chartState={chartState}/>)
        }
        {
          params.filter(param => param.id <= chartState.numberOfVariables).map(param => <WidthSelect key={param.id} 
            modifyParams={modifyParams} param={param} chartState={chartState}/>)
        }
        {
          params.filter(param => param.id <= chartState.numberOfVariables).map(param => <OpacitySelect key={param.id} 
            modifyParams={modifyParams} param={param} chartState={chartState}/>)
        } 
    </>
    )}

export default ParameterCustomization;

/*      {
          <DashSelect key={params[0].id} modifyParams={modifyParams}/>
        } */