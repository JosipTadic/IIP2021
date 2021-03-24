import React from 'react';
import TableRow from './TableRow';
import Table from 'react-bootstrap/Table';

const TableComp = ({rows, deleteRow, modifyRow, hasThreeVariables}) => {
    if (hasThreeVariables){
      return(
        <Table striped bordered hover size="sm">
          <tbody>
            <tr>
              <th>1st Value</th>
              <th>2nd Value</th>
              <th>3rd Value</th>
              <th>Name</th>
              <th className="table-icons"></th>
            </tr>{
              rows.map(row => <TableRow key={row.id} deleteRow={() => deleteRow(row.id)} hasThreeVariables={hasThreeVariables}
              modifyRow={(axis, newValue) => modifyRow(row.id, axis, newValue)}/>)
            }
          </tbody>
        </Table>
      )
    }
    else{
      return(
        <Table striped bordered hover size="sm">
          <tbody>
            <tr>
              <th>1st Value</th>
              <th>2nd Value</th>
              <th>Name</th>
              <th className="table-icons"></th>
            </tr>{
              rows.map(row => <TableRow key={row.id} deleteRow={() => deleteRow(row.id)} hasThreeVariables={hasThreeVariables}
               modifyRow={(axis, newValue) => modifyRow(row.id, axis, newValue)}/>)
            }
          </tbody>
        </Table>
      )
    }
}

export default TableComp;