import React from 'react';
import TableRow from './TableRow';
import Table from 'react-bootstrap/Table';

const TableComp = ({rows, deleteRow, modifyRow}) => {
    if (rows <= 0){
      return(
        <h3 className="center">Create new row to start visualizing</h3>
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
              rows.map(row => <TableRow key={row.id} deleteRow={() => deleteRow(row.id)} modifyRow={(axis, newValue) => modifyRow(row.id, axis, newValue)}/>)
            }
          </tbody>
        </Table>
      )
    }
}

export default TableComp;