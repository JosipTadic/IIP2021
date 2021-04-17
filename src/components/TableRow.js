import React from 'react';
import { BsFillTrashFill } from "react-icons/bs";

const TableRow = ({deleteRow, modifyRow, chartState, row}) => {
  switch (chartState.numberOfVariables){
    case 1:
      return(
        <tr>
          <td><input className="input-style" type="number" value={row.a} placeholder="enter 1st value" onChange={(e) => modifyRow('a', e.target.value)}/></td>
          <td><input className="input-style" type="text" value={row.labelName} placeholder="enter name" onChange={(e) => modifyRow('labelName', e.target.value)}/></td>
          <td className="table-icons" onClick={deleteRow}><BsFillTrashFill  className="react-icons"/></td>
        </tr>
      )
    case 3:
      return(
        <tr>
          <td><input className="input-style" type="number" value={row.a} placeholder="enter 1st value" onChange={(e) => modifyRow('a', e.target.value)}/></td>
          <td><input className="input-style" type="number" value={row.b} placeholder="enter 2nd value" onChange={(e) => modifyRow('b', e.target.value)}/></td>
          <td><input className="input-style" type="number" value={row.c} placeholder="enter 3rd value" onChange={(e) => modifyRow('c', e.target.value)}/></td>
          <td><input className="input-style" type="text" value={row.labelName} placeholder="enter name" onChange={(e) => modifyRow('labelName', e.target.value)}/></td>
          <td className="table-icons" onClick={deleteRow}><BsFillTrashFill  className="react-icons"/></td>
        </tr>
      )
    default:
    return(
     <tr>
       <td><input className="input-style" type="number" value={row.a} placeholder="enter 1st value" onChange={(e) => modifyRow('a', e.target.value)}/></td>
       <td><input className="input-style" type="number" value={row.b} placeholder="enter 2nd value" onChange={(e) => modifyRow('b', e.target.value)}/></td>
       <td><input className="input-style" type="text" value={row.labelName} placeholder="enter name" onChange={(e) => modifyRow('labelName', e.target.value)}/></td>
       <td className="table-icons" onClick={deleteRow}><BsFillTrashFill  className="react-icons"/></td>
     </tr>
    )
  }
}
export default TableRow;