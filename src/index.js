import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import {nanoid} from 'nanoid';
import './index.css';
import { ResponsiveContainer, LineChart, Line, Area, AreaChart, CartesianGrid, ComposedChart, BarChart, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import { ButtonGroup } from 'react-bootstrap';
import { useRechartToPng } from "recharts-to-png";
import FileSaver from "file-saver";
import { BsFillTrashFill } from "react-icons/bs";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

// npm i -D typescript @types/node @types/react @types/react-dom

const App = () => {

  const [rows, setRows] = useState([]);

  const [chartVar, setChart] = useState();

  const chooseChart = () => setChart(chartVar + 1)

  const increaseRows = () => {
    const newRow = {
      id: nanoid(),
      a: '',
      b: '',
      c: '',
      d: '',
      size: '3'
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
  
  const deleteRow = (id) => {
    setRows(rows.filter((row) => {
      return row.id !== id;
    }))
  }
  const deleteAll = () => {
    setRows([]);
  }

  const [png, ref] = useRechartToPng();

  const handleDownload = React.useCallback(async () => {
    FileSaver.saveAs(png, "myChart.png");
  }, [png]);

  return (
    <>
    <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/line">Line Chart</Link>
            </li>
            <li>
              <Link to="/area">Area Chart</Link>
            </li>
            <li>
              <Link to="/composed" onLoad={chooseChart} >Composed Chart</Link>
            </li>
            <li>
              <Link to="/bar">Bar Chart</Link>
            </li>
          </ul>
        </nav>
      <Switch>
        <Route exact path="/">
        <div>
        </div>
        </Route>
        <Route exact path="/line">
        
        <Container className="marginTop">
          <ResponsiveContainer className="justify-content-md-center">
            <Row>
              <LineChart width={1200} height={400} ref={ref} data={rows}
              margin={{ top: 10, right: 50, left: 5, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="c"/>
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="a" stroke="#8884d8" />
              <Line type="monotone" dataKey="b" stroke="#82ca9d" />
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
              <Col md={{ offset: 0 }}><ButtonComp variant={"danger"} text='Delete Table'  onClick={deleteAll} /></Col>
              </ButtonGroup>
            </Row>
          </Container>
          </Route>

        <Route exact path="/area">
        <Container className="marginTop">
        <AreaChart width={730} height={250} ref={ref} data={rows}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="c" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area type="monotone" dataKey="a" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
          <Area type="monotone" dataKey="b" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
        </AreaChart>
        </Container>
        
        
          <Container className="fixed scroll">
            <TableComp rows={rows} deleteRow={deleteRow} modifyRow={modifyRow}/>
          </Container>
          <Container>
            <Row>
              <ButtonGroup>
              <Col md={{ offset: 2 }}><ButtonComp variant={"primary"} onClick={increaseRows} text='Add new row'/></Col>
              <Col md={{ offset: 0 }}><ButtonComp variant={"primary"} text='Download Chart' onClick={handleDownload}/></Col>
              <Col md={{ offset: 0 }}><ButtonComp variant={"danger"} text='Delete Table'  onClick={deleteAll} /></Col>
              </ButtonGroup>
            </Row>
          </Container>
          </Route>
          <Route exact path="/composed">
        <Container className="marginTop">
        <ComposedChart width={730} height={250} ref={ref} data={rows}>
          <XAxis dataKey="c" />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid stroke="#f5f5f5" />
          <Area type="monotone" dataKey="a" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="b" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="c" stroke="#ff7300" />
        </ComposedChart>
        </Container>
        
        
          <Container className="fixed scroll">
            <TableComp rows={rows} deleteRow={deleteRow} modifyRow={modifyRow}/>
          </Container>
          <Container>
            <Row>
              <ButtonGroup>
              <Col md={{ offset: 2 }}><ButtonComp variant={"primary"} onClick={increaseRows} text='Add new row'/></Col>
              <Col md={{ offset: 0 }}><ButtonComp variant={"primary"} text='Download Chart' onClick={handleDownload}/></Col>
              <Col md={{ offset: 0 }}><ButtonComp variant={"danger"} text='Delete Table'  onClick={deleteAll} /></Col>
              </ButtonGroup>
            </Row>
          </Container>
          </Route>
          <Route exact path="/bar">
        <Container className="marginTop">
        <BarChart width={730} height={250} ref={ref} data={rows}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="c" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="a" fill="#8884d8" />
          <Bar dataKey="b" fill="#82ca9d" />
        </BarChart>
        </Container>
        
        
          <Container className="fixed scroll">
            <TableComp rows={rows} deleteRow={deleteRow} modifyRow={modifyRow}/>
          </Container>
          <Container>
            <Row>
              <ButtonGroup>
              <Col md={{ offset: 2 }}><ButtonComp variant={"primary"} onClick={increaseRows} text='Add new row'/></Col>
              <Col md={{ offset: 0 }}><ButtonComp variant={"primary"} text='Download Chart' onClick={handleDownload}/></Col>
              <Col md={{ offset: 0 }}><ButtonComp variant={"danger"} text='Delete Table'  onClick={deleteAll} /></Col>
              </ButtonGroup>
            </Row>
          </Container>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

const ButtonComp = (props) => {
  return(
    <Button block {...props}>{props.text}</Button>
  )
}
const TableComp = ({rows, deleteRow, modifyRow, chartVar}) => {
  if (rows <= 0 && chartVar === 1){
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
          <td><input className="input-style" type="number" placeholder="enter 1st value" onChange={(e) => modifyRow('a', e.target.value)}/></td>
          <td><input className="input-style" type="number" placeholder="enter 2nd value" onChange={(e) => modifyRow('b', e.target.value)}/></td>
          <td><input className="input-style" type="text" placeholder="enter name" onChange={(e) => modifyRow('c', e.target.value)}/></td>
          <td className="table-icons" onClick={deleteRow}><BsFillTrashFill  className="react-icons"/></td>
        </tr>
  )
}
ReactDOM.render(
    <App />,
  document.getElementById('root')
)