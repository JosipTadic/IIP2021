import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {nanoid} from 'nanoid';

const App = () => {

  const [rows, setRows] = useState([])

  const increaseRows = () => {
    setRows(rows.concat(nanoid()))
  }
  
  const deleteRow = (id) => {
    setRows(rows.filter((row) => {
      return row !== id;
    }))
  }

console.log(rows)
  return (
    <>
      <div>
        {/*<Button text='1!'/>
        <Button text='2!'/>
        <Button text='3!'/>
        <Button text='4!'/>*/}
        <Table rows={rows} deleteRow={deleteRow}/>
        <Button onClick={increaseRows} text='Add new row'/>
        <Button text='Generate'/>
      </div>
    </>
  )
}

const Button = (props) => {
return(
  <button {...props} type="button" className={"btn btn-primary btn-lg"}>{props.text}</button>
)
}
const Table = ({rows, deleteRow}) => {


  return(
    <table className={"table table-hover"}>
      <tbody>
        <tr>
          <th>HE</th>
          <th>AD</th>
          <th>ER</th>
        </tr>{
          rows.map(row => <TableRow key={row} deleteRow={() => deleteRow(row)}/>)
        }
        </tbody>
    </table>
  )
}
const TableRow = ({deleteRow}) => {

  return(
        <tr>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
          <td><Button text='Delete' onClick={deleteRow}/></td>
        </tr>
  )
}
ReactDOM.render(
    <App />,
  document.getElementById('root')
)
