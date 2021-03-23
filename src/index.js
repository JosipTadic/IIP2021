import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
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
          strokeWidth: 1,
          strokeOpacity: 1,
        },
        {
          id: 2,
          color: "#222555",
          firstLegendName: 'b',
          lineType: "monotone",
          strokeDash: 1,
          strokeLinecap: "butt",
          strokeWidth: 1,
          strokeOpacity: 1,
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
        <Navbar variant="light" bg="light" justify className="justify-content-between" >
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
        <Route exact path="/about">
          <div>
              <About/>
          </div>
        </Route>
        <Route exact path="/blog">
          <div>
              <Blog/>
          </div>
        </Route>
        <Route exact path="/line">
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
              strokeDasharray={params[1].strokeDash} type={params[1].lineType} dataKey="b" stroke={params[1].color} />
              </LineChart>
              </Row>
          </ResponsiveContainer>
        </Container>
        <div>
          <ParameterCustomization params={params} modifyParams={modifyParams}/>
        </div>
        
        
          <Container className="fixed scroll">
            <TableComp rows={rows} deleteRow={deleteRow} modifyRow={modifyRow}/>
          </Container>
          <Container>
            <Row>
              <ButtonGroup>
              <Col md={{ offset: 2 }}><ButtonComp variant={"primary"} text='Add new row' onClick={increaseRows}/></Col>
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
          <Area type={params[0].lineType} dataKey="a" stroke={params[0].color} fillOpacity={params[0].strokeOpacity}
           strokeWidth={params[0].strokeWidth} strokeDasharray={params[0].strokeDash} fill={params[0].color} />
          <Area type={params[1].lineType} dataKey="b" stroke={params[1].color} fillOpacity={params[1].strokeOpacity}
           strokeWidth={params[1].strokeWidth} strokeDasharray={params[1].strokeDash} fill={params[1].color} />
        </AreaChart>
        </Container>
        <div>
          <ParameterCustomization params={params} modifyParams={modifyParams}/>
        </div>
        
          <Container className="fixed scroll">
            <TableComp rows={rows} deleteRow={deleteRow} modifyRow={modifyRow}/>
          </Container>
          <Container>
            <Row>
              <ButtonGroup>
              <Col md={{ offset: 2 }}><ButtonComp variant={"primary"} text='Add new row' onClick={increaseRows}/></Col>
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
        <div>
          <ParameterCustomization params={params} modifyParams={modifyParams}/>
        </div>
        
          <Container className="fixed scroll">
            <TableComp rows={rows} deleteRow={deleteRow} modifyRow={modifyRow}/>
          </Container>
          <Container>
            <Row>
              <ButtonGroup>
              <Col md={{ offset: 2 }}><ButtonComp variant={"primary"} text='Add new row' onClick={increaseRows}/></Col>
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
          <Bar dataKey="a" fill={params[0].color} />
          <Bar dataKey="b" fill={params[1].color} />
        </BarChart>
        </Container>
        <div>
          <ParameterCustomization params={params} modifyParams={modifyParams}/>
        </div>

          <Container className="fixed scroll">
            <TableComp rows={rows} deleteRow={deleteRow} modifyRow={modifyRow}/>
          </Container>
          <Container>
            <Row>
              <ButtonGroup>
              <Col md={{ offset: 2 }}><ButtonComp variant={"primary"} text='Add new row' onClick={increaseRows}/></Col>
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