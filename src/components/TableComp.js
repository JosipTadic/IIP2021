import React from 'react';
import TableRow from './TableRow';
import Table from 'react-bootstrap/Table';
import './design.css';

const TableComp = ({rows, deleteRow, modifyRow, chartState}) => {
    if(rows < 1){
      return(
        <h2 className="center">Press "add new row" to start visualizing!</h2>
      )
    }
    if (chartState.numberOfVariables === 1){
      return(
        <Table striped bordered hover size="sm">
          <tbody>
            <tr>
              <th>1st Value</th>
              <th>Name</th>
              <th className="table-icons"></th>
            </tr>{
              rows.map(row => <TableRow key={row.id} deleteRow={() => deleteRow(row.id)} chartState={chartState}
              modifyRow={(axis, newValue) => modifyRow(row.id, axis, newValue)}/>)
            }
          </tbody>
        </Table>
      )
    }
    if (chartState.numberOfVariables === 3){
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
              rows.map(row => <TableRow key={row.id} deleteRow={() => deleteRow(row.id)} chartState={chartState}
              modifyRow={(axis, newValue) => modifyRow(row.id, axis, newValue)}/>)
            }
          </tbody>
        </Table>
      )
    }

      return(
        <Table striped bordered hover size="sm">
          <tbody>
            <tr>
              <th>1st Value</th>
              <th>2nd Value</th>
              <th>Name</th>
              <th className="table-icons"></th>
            </tr>{
              rows.map(row => <TableRow key={row.id} deleteRow={() => deleteRow(row.id)} chartState={chartState}
               modifyRow={(axis, newValue) => modifyRow(row.id, axis, newValue)}/>)
            }
          </tbody>
        </Table>
      )
}

export default TableComp;