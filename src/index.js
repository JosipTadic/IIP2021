import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './components/Home';
//import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import {nanoid} from 'nanoid';
import './index.css';
import { ResponsiveContainer, LineChart, Line, Area, AreaChart, CartesianGrid, ComposedChart, BarChart, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import { ButtonGroup } from 'react-bootstrap';
import { useRechartToPng } from "recharts-to-png";
import FileSaver from "file-saver";
//import { BsFillTrashFill } from "react-icons/bs";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import TableComp from './components/TableComp';
import ParameterCustomization from './components/ParameterCustomization';
import ButtonComp from './components/ButtonComp';

// npm i -D typescript @types/node @types/react @types/react-dom

const App = () => {

  const [rows, setRows] = useState([]);

  const [params, setParams] = useState(
    [
        {
          id: 1,
          color: "#111222",
          firstLegendName: 'a',
          lineType: "monotone",
          strokeDash: 1,
          strokeLinecap: "butt",
          strokeWidth: 1
          //secondDash: 1
        },
        {
          id: 2,
          color: "#222555",
          firstLegendName: 'b',
          strokeWidth: 1
        }
    ]
  )
  const modifyParams = (id, selectedParam, newValue) => {
    setParams(params.map(param => {
      if (param.id === id) {
        param[selectedParam] = newValue;
      }
      return param;
    }));
  }
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
        <Navbar variant="light" bg="light" justify className="justify-content-between">
        <Navbar.Brand as={Link}  to="/"><b>D-Wiz</b></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav className="mr-auto">
            <Nav.Link as={Link}  to="/area"><b>Area Chart</b></Nav.Link>
            <Nav.Link as={Link}  to="/line"><b>Line Chart</b></Nav.Link>
            <Nav.Link as={Link}  to="/bar"><b>Bar Chart</b></Nav.Link>
            <Nav.Link as={Link}  to="/composed"><b>Composed Chart</b></Nav.Link>
            </Nav>
        </Navbar>
      <Switch>
        <Route exact path="/">
        <div>
          <Home/> 
        </div>
        </Route>
        <Route exact path="/line">
          <div>
            <ParameterCustomization params={params} modifyParams={modifyParams}/>
            
          </div>
        <Container className="marginTop">
          <ResponsiveContainer className="justify-content-md-center">
            <Row>
              <LineChart width={1400} height={350} ref={ref} data={rows}
              margin={{ top: 10, right: 130, left: 5, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="c"/>
              <YAxis />
              <Tooltip />
              <Legend />
              <Line strokeWidth={params[0].strokeWidth} 
               strokeDasharray={params[0].strokeDash} type={params[0].lineType} dataKey="a" stroke={params[0].color}/>
              <Line strokeWidth={params[1].strokeWidth} strokeLinecap={params[1].strokeLinecap} 
              strokeDasharray={params[0].strokeDash} type={params[0].lineType} dataKey="b" stroke={params[1].color} />
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
        <AreaChart width={1400} height={350} ref={ref} data={rows}
              margin={{ top: 10, right: 130, left: 5, bottom: 10 }}>
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
        <ComposedChart width={1400} height={350} ref={ref} data={rows}
              margin={{ top: 10, right: 130, left: 5, bottom: 10 }}>
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
        <BarChart width={1400} height={350} ref={ref} data={rows}
              margin={{ top: 10, right: 130, left: 5, bottom: 10 }}>
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
/*const ParameterCustomization = ({params,modifyParams}) => {
  return( 
  <>
  {
    params.map(param => <InputComp key={param.id} modifyParams={modifyParams} param={param}/>)
  }
  {
    <LineSelect key={params[0].id} modifyParams={modifyParams}/>
  }
  {
    <DashSelect key={params[0].id} modifyParams={modifyParams}/>
  }
  {
    params.map(param => <WidthSelect key={param.id} modifyParams={modifyParams} param={param}/>)
  }
  {
    <OpacitySelect key={params[0].id} modifyParams={modifyParams}/>
  }
  </>
  )}
const InputComp = ({modifyParams,param}) => {
  //<input className="input-style" type="text"  placeholder="enter 1st name" onChange={e => modifyParams(param.id, 'firstLegendName', e.target.value)}/>
  return(
    <>
      <input type="color" name="color"  onChange={e => modifyParams(param.id, 'color', e.target.value)}/>
    </>
  )
}
const OpacitySelect = ({modifyParams}) => {
  return(
  <>
    <input type="number" placeholder="opacity" name="opacity" onChange={e => modifyParams(1, 'strokeOpacity', e.target.value)}/>
  </>
  )
}
const WidthSelect = ({modifyParams,param}) => {
  return(
  <>
    <input type="number" placeholder="Width" name="strokeWidth" onChange={e => modifyParams(param.id, 'strokeWidth', e.target.value)}/>
  </>
  )
}
const DashSelect = ({modifyParams}) => {
return(
<>
  <input type="number" placeholder="Dash" name="strokeDash" onChange={e => modifyParams(1, 'strokeDash', e.target.value)}/>
</>
)
}
/*const LineSelect = ({modifyParams}) => {
  return(
    <>
      <select onChange={e => modifyParams(1, 'lineType', e.target.value)}>
            <option value="monotone">Monotone</option>
            <option value="basis">Basis</option>
            <option value="linear">Linear</option>
            <option value="natural">Natural</option>
            <option value="step">Step</option>
            <option value="basisClosed">Basis closed</option>
            <option value="basisOpen">Basis open</option>
            <option value="monotoneX">Monotone X</option>
            <option value="monotoneY">Monotone Y</option>
            <option value="stepBefore">Step before</option>
            <option value="stepAfter">Step after</option>
        </select>
    </>
  )
}*/
/*const ButtonComp = (props) => {
  return(
    <Button block {...props}>{props.text}</Button>
  )
}*/
/*const TableComp = ({rows, deleteRow, modifyRow}) => {
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
          <td><input className="input-style" type="number" placeholder="enter 1st value" onChange={(e) => modifyRow('a', e.target.value)}/></td>
          <td><input className="input-style" type="number" placeholder="enter 2nd value" onChange={(e) => modifyRow('b', e.target.value)}/></td>
          <td><input className="input-style" type="text" placeholder="enter name" onChange={(e) => modifyRow('c', e.target.value)}/></td>
          <td className="table-icons" onClick={deleteRow}><BsFillTrashFill  className="react-icons"/></td>
        </tr>
  )
}*/
ReactDOM.render(
    <App />,
  document.getElementById('root')
)
/*const DashSelect = ({modifyParams, param}) => {
return(
<>
  <input type="number" placeholder="Dash" name="strokeDash" onChange={e => modifyParams(param.id, 'strokeDash', e.target.value)}/>
  <select onChange={e => modifyParams(param.id, 'strokeLinecap', e.target.value)}>
            <option value="butt">Butt</option>
            <option value="round">Round</option>
            <option value="square">Square</option>
        </select>
  <input type="number" placeholder="Opacity" name="stroke_Opacity" onChange={e => modifyParams(param.id, 'stroke_Opacity', e.target.value)}/>
  <input type="number" placeholder="Width" name="strokeWidth" onChange={e => modifyParams(param.id, 'strokeWidth', e.target.value)}/>
</>
<Line strokeWidth={params[0].strokeWidth} stroke-opacity={params[0].stroke_Opacity} strokeLinecap={params[0].strokeLinecap}
               strokeDasharray={params[0].firstDash} type={params[0].lineType} dataKey="a" stroke={params[0].color} fill={params[0].color}/>
)
}*/