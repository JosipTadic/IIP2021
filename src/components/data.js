import React, { useState } from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import {nanoid} from 'nanoid';
import './index.css';
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { ButtonGroup } from 'react-bootstrap';


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

const Data = () => {

  const [rows, setRows] = useState([]);
  //const [data, setData] = useState([]);

  const increaseRows = () => {
    const newRow = {
      id: nanoid(),
      x: '',
      y: '',
      z: ''
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
    setRows([]);
  }
  const deleteRow = (id) => {
    setRows(rows.filter((row) => {
      return row.id !== id;
    }))
  }

  return (
    <>
      <div class="">
        <div class="">
        <Container className="marginTop">
          <ResponsiveContainer className="justify-content-md-center">
            <Row>
              <LineChart width={1200} height={400} data={rows}
              margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="z"/>
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="x" stroke="#8884d8" />
              <Line type="monotone" dataKey="y" stroke="#82ca9d" />
              </LineChart>
              </Row>
          </ResponsiveContainer>
        </Container>
          <Container className="fixed scroll">
            <TableComp rows={rows} deleteRow={deleteRow} modifyRow={modifyRow}/>
          </Container>
          <Container>
            <Row>
              <ButtonGroup>
              <Col md={{ offset: 3 }}><ButtonComp variant={"primary"} onClick={increaseRows} text='Add new row'/></Col>
              <Col md={{ offset: 1 }}><ButtonComp variant={"primary"} text='Generate' onClick={generate}/></Col>
              </ButtonGroup>
            </Row>
          </Container>
        </div>
      </div>
    </>
  )

  
}



const ButtonComp = (props) => {
  return(
    <Button block {...props}>{props.text}</Button>
  )
}
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
            <th></th>
          </tr>{
            rows.map(row => <TableRow key={row.id} deleteRow={() => deleteRow(row.id)} modifyRow={(axis, newValue) => modifyRow(row.id, axis, newValue)}/>)
          }
        </tbody>
      </Table>
    )
  }
}
const TableRow = ({deleteRow, modifyRow}) => {
  return(
        <tr>
          <td><input type="number" placeholder="enter 1st value" onChange={(e) => modifyRow('x', e.target.value)}/></td>
          <td><input type="number" placeholder="enter 2nd value" onChange={(e) => modifyRow('y', e.target.value)}/></td>
          <td><input type="text" placeholder="enter name" onChange={(e) => modifyRow('z', e.target.value)}/></td>
          <td><ButtonComp size="sm" variant={"danger"} text='Delete' onClick={deleteRow}/></td>
        </tr>
  )
}

export default Data;
 
