import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
//import Modal from 'react-bootstrap/Modal';
import {nanoid} from 'nanoid';
import './index.css';
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { ButtonGroup } from 'react-bootstrap';
import { useRechartToPng } from "recharts-to-png";
import FileSaver from "file-saver";
import { BsFillTrashFill } from "react-icons/bs";

// npm i -D typescript @types/node @types/react @types/react-dom

const Data = () => {

  const [rows, setRows] = useState([]);

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
  const deleteAll = () => {
    setRows([]);
  }
  const deleteRow = (id) => {
    setRows(rows.filter((row) => {
      return row.id !== id;
    }))
  }

  const [png, ref] = useRechartToPng();

  const handleDownload = React.useCallback(async () => {
    FileSaver.saveAs(png, "myChart.png");
  }, [png]);

  return (
    <>
      <div>
        <div>
        <Container className="marginTop">
          <ResponsiveContainer className="justify-content-md-center">
            <Row>
              <LineChart width={1200} height={400} ref={ref} data={rows}
              margin={{ top: 10, right: 50, left: 5, bottom: 10 }}>
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
              <Col md={{ offset: 2 }}><ButtonComp variant={"primary"} onClick={increaseRows} text='Add new row'/></Col>
              <Col md={{ offset: 0 }}><ButtonComp variant={"primary"} text='Download Chart' onClick={handleDownload}/></Col>
              <Col md={{ offset: 0 }}><ButtonComp variant={"danger"} text='Delete Table' onClick={deleteAll}/></Col>
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
            <th className="table-icons"></th>
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
          <td><input className="input-style" type="number" placeholder="enter 1st value" onChange={(e) => modifyRow('x', e.target.value)}/></td>
          <td><input className="input-style" type="number" placeholder="enter 2nd value" onChange={(e) => modifyRow('y', e.target.value)}/></td>
          <td><input className="input-style" type="text" placeholder="enter name" onChange={(e) => modifyRow('z', e.target.value)}/></td>
          <td className="table-icons" onClick={deleteRow}><BsFillTrashFill  className="react-icons"/></td>
        </tr>
  )
}

export default Data;
 
