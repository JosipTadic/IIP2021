import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {nanoid} from 'nanoid';
import { ScatterChart, Scatter, LineChart, Line, PieChart, Pie, CartesianGrid, XAxis, YAxis, ZAxis, Tooltip, Legend } from 'recharts';

// npm i -D typescript @types/node @types/react @types/react-dom

/**
 * 
 * Row {
 *  id: string;
 *  x: string;
 *  y: string;
 * }
 * 
 * modify(id, 'x' | 'y', newValue) => void;
 * 
 * <Row onChange={(e) => modify(props.id, 'x', e.target.value)} />
 * 
 * generate() => void;
 * 
 * generate = () => {
 *  setData(rows)
 *  setRows([])
 * }
 */

const App = () => {

  const [rows, setRows] = useState([])
  //const [data, setData] = useState([]);

  const increaseRows = () => {
    const newRow = {
      id: nanoid(),
      x: '',
      y: '',
      z: 100
    }

    setRows(rows.concat(newRow));
  }

  const modifyRow = (id, axis, newValue) => {
    setRows(rows.map(row => {
      if (row.id === id) {
        row[axis] = newValue;
      }

      return row;
    }));
  }
  
  const generate = () => {
    //setData(rows);
    setRows([]);
  }

  const deleteRow = (id) => {
    setRows(rows.filter((row) => {
      return row.id !== id;
    }))
  }
  console.log({rows});
  return (
    <>
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-3">
            <Table rows={rows} deleteRow={deleteRow} modifyRow={modifyRow}/>
            <Button onClick={increaseRows} text='Add new row'/>
            <Button text='Generate' onClick={generate}/>
          </div>
          <div class="col-sm-1"></div>
          <div class="col-sm-8">
            <LineChart width={800} height={250} data={rows}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="x" stroke="#8884d8" />
            <Line type="monotone" dataKey="y" stroke="#82ca9d" />
            </LineChart>
            <ScatterChart width={800} height={250}
            margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="x" name="stature" unit="cm" />
            <YAxis dataKey="y" name="weight" unit="kg" />
            <ZAxis dataKey="z" range={[64, 144]} name="score" unit="km" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Legend />
            <Scatter name="A school" data={rows} fill="#8884d8" />
            </ScatterChart>
          </div>
        </div>
      </div>
    </>
  )
}

const Button = (props) => {
return(
  <button {...props} type="button" className={"btn btn-primary btn-lg"}>{props.text}</button>
)
}
const Table = ({rows, deleteRow, modifyRow}) => {

  return(
    <table className={"table table-hover"}>
      <tbody>
        <tr>
          <th>x</th>
          <th>y</th>
          <th></th>
        </tr>{
          rows.map(row => <TableRow key={row.id} deleteRow={() => deleteRow(row.id)} modifyRow={(axis, newValue) => modifyRow(row.id, axis, newValue)}/>)
        }
        </tbody>
    </table>
  )
}
const TableRow = ({deleteRow, modifyRow}) => {

  return(
        <tr>
          <td><input type="text" onChange={(e) => modifyRow('x', e.target.value)}/></td>
          <td><input type="text" onChange={(e) => modifyRow('y', e.target.value)}/></td>
          <td><Button text='Delete' onClick={deleteRow}/></td>
        </tr>
  )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
)