import React from 'react';
import { BsFillTrashFill } from "react-icons/bs";

const TableRow = ({deleteRow, modifyRow, chartState}) => {
  if (chartState.numberOfVariables === 1){
    return(
    <tr>
    <td><input className="input-style" type="number" placeholder="enter 1st value" onChange={(e) => modifyRow('a', e.target.value)}/></td>
    <td><input className="input-style" type="text" placeholder="enter name" onChange={(e) => modifyRow('labelName', e.target.value)}/></td>
    <td className="table-icons" onClick={deleteRow}><BsFillTrashFill  className="react-icons"/></td>
  </tr>
    )
  }
  if (chartState.numberOfVariables === 3){
    return(
    <tr>
    <td><input className="input-style" type="number" placeholder="enter 1st value" onChange={(e) => modifyRow('a', e.target.value)}/></td>
    <td><input className="input-style" type="number" placeholder="enter 2nd value" onChange={(e) => modifyRow('b', e.target.value)}/></td>
    <td><input className="input-style" type="number" placeholder="enter 3rd value" onChange={(e) => modifyRow('c', e.target.value)}/></td>
    <td><input className="input-style" type="text" placeholder="enter name" onChange={(e) => modifyRow('labelName', e.target.value)}/></td>
    <td className="table-icons" onClick={deleteRow}><BsFillTrashFill  className="react-icons"/></td>
  </tr>
    )
  }
    return(
          <tr>
            <td><input className="input-style" type="number" placeholder="enter 1st value" onChange={(e) => modifyRow('a', e.target.value)}/></td>
            <td><input className="input-style" type="number" placeholder="enter 2nd value" onChange={(e) => modifyRow('b', e.target.value)}/></td>
            <td><input className="input-style" type="text" placeholder="enter name" onChange={(e) => modifyRow('labelName', e.target.value)}/></td>
            <td className="table-icons" onClick={deleteRow}><BsFillTrashFill  className="react-icons"/></td>
          </tr>
    )
  }

export default TableRow;