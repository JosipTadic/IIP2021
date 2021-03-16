import React from 'react';
import { BsFillTrashFill } from "react-icons/bs";

const TableRow = ({deleteRow, modifyRow}) => {
    return(
          <tr>
            <td><input className="input-style" type="number" placeholder="enter 1st value" onChange={(e) => modifyRow('a', e.target.value)}/></td>
            <td><input className="input-style" type="number" placeholder="enter 2nd value" onChange={(e) => modifyRow('b', e.target.value)}/></td>
            <td><input className="input-style" type="text" placeholder="enter name" onChange={(e) => modifyRow('c', e.target.value)}/></td>
            <td className="table-icons" onClick={deleteRow}><BsFillTrashFill  className="react-icons"/></td>
          </tr>
    )
  }

export default TableRow;