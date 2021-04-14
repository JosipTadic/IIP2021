import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import CreateNewPost from './blog/CreateNewPost';
import Container from 'react-bootstrap/Container';
import {nanoid} from 'nanoid';
import './index.css';
import { ResponsiveContainer, LineChart, Line, Area, AreaChart, CartesianGrid, LabelList,
   ScatterChart, Scatter, ComposedChart, BarChart, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import { ButtonGroup } from 'react-bootstrap';
import { useRechartToPng } from "recharts-to-png";
//import FileSaver from "file-saver";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import TableComp from './components/TableComp';
import ParameterCustomization from './components/ParameterCustomization';
import ButtonComp from './components/ButtonComp';

import PostDetails from './blog/PostDetails'; 
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import {createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'
import {reduxFirestore, getFirestore} from 'redux-firestore'
import {reactReduxFirebase, getFirebase} from 'react-redux-firebase'
import fbConfig from './config/fbConfig'
// npm i -D typescript @types/node @types/react @types/react-do  
import domtoimage from 'dom-to-image';
import fileDownload from "js-file-download"; 
import {Redirect} from 'react-router-dom';
import Cards from './components/Cards';
import SubNavBar from './components/SubNavBar';
 

const App = () => {


  const [rows, setRows] = useState([{
      id: nanoid(),
      a: '',
      b: '',
      c: '',
      labelName: '',
  }]);

  const [params, setParams] = useState(
    [
        {
          id: 1,
          color: "#111222",
          legendName: 'a',
          lineType: "monotone",
          strokeDash: 0,
          strokeWidth: 1,
          strokeOpacity: 1,
        },
        {
          id: 2,
          color: "#222555",
          legendName: 'b',
          lineType: "monotone",
          strokeDash: 0,
          strokeWidth: 1,
          strokeOpacity: 1,
        },
        {
          id: 3,
          color: "#333666",
          legendName: 'c',
          lineType: "monotone",
          strokeDash: 0,
          strokeWidth: 1,
          strokeOpacity: 1,
        }
    ]
  )

  const [chartState, setChartState] = useState({
    numberOfVariables: 2,
    dash: false,
    type: false,
    width: false,
    opacity: false,
    colorChoice: false
  })

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
      labelName: '',
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

 //const [png, ref] = useRechartToPng();

   /*const handleDownload = React.useCallback(async () => {
    FileSaver.saveAs(png, "myChart.png");
  }, [png]);*/

  var handleSaveClick = (idOfChart) => {
    domtoimage.toBlob(document.getElementById(idOfChart))
       .then(function (blob) {
          fileDownload(blob, 'dom-to-image.png');
       });
   }

   const chartsSetter = ({nov,dash,type,width,opacity,color}) =>
   setChartState({ 
     numberOfVariables: nov,
     dash: dash,
     type: type,
     width: width,
     opacity: opacity,
     colorChoice: color
   })

  return(
  <>
    <Router>
      <Navbar variant="light" bg="light" justify className="justify-content-between" >
        <Navbar.Brand as={Link}  to="/"><b>D-Wiz</b></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav className="mr-auto">
            <Nav.Link as={Link}  to="/one"><b>One Value</b></Nav.Link>
            <Nav.Link as={Link}  to="/two"><b>Two Values</b></Nav.Link>
            <Nav.Link as={Link}  to="/three"><b>Three Values</b></Nav.Link>
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
        <Route exact path="/signin">
          <div>
              <SignIn />
          </div>
        </Route>
        <Route exact path="/signup">
          <div>
              <SignUp />
          </div>
        </Route>
        <Route exact path="/one">
          <Cards variableNumber={1} chartsSetter={chartsSetter}/>
        </Route>
        <Route exact path="/two">
          <Cards variableNumber={2} chartsSetter={chartsSetter}/>
        </Route>
        <Route exact path="/three">
          <Cards variableNumber={3} chartsSetter={chartsSetter}/>
        </Route>
        <Route exact path="/create">
          <div>
              <CreateNewPost/>
          </div>
        </Route>
        <Route exact path="/blogs/:id">
          <div>
              <PostDetails/>
          </div>

        </Route> 
          
        <Route exact path="/one/oneline">
          <SubNavBar variableNumber={1} chartsSetter={chartsSetter} />
          <div id="blob1">
            <Container className="marginTop">
              <ResponsiveContainer className="justify-content-md-center">
                <Row>
                  <LineChart width={1400} height={350} data={rows}
                  margin={{ top: 5, right: 100, left: 5, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="labelName"/>
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line strokeWidth={params[0].strokeWidth} name={params[0].legendName}
                   strokeDasharray={params[0].strokeDash} type={params[0].lineType} dataKey="a" stroke={params[0].color}/>
                  </LineChart>
                </Row>
              </ResponsiveContainer>
            </Container>
          </div>
          <div>
            <ParameterCustomization params={params} modifyParams={modifyParams} chartState={chartState}/>
          </div>              
          <Container className="fixed scroll">
            <TableComp rows={rows} deleteRow={deleteRow} modifyRow={modifyRow} chartState={chartState}/>
          </Container>
          <Container className="buttonContainer">
            <Row>
              <ButtonGroup>
               <Col md={{ offset: 2 }}><ButtonComp variant={"primary"} text='Add new row' onClick={increaseRows}/></Col>
               <Col md={{ offset: 0 }}><ButtonComp variant={"primary"} text='Download Chart' onClick={() => handleSaveClick("blob1")}/></Col>
               <Col md={{ offset: 0 }}><ButtonComp variant={"danger"} text='Delete Table'  onClick={deleteAll} /></Col>
              </ButtonGroup>
            </Row>
          </Container>         
        </Route>

        <Route exact path="/two/line">
          <SubNavBar variableNumber={2} chartsSetter={chartsSetter} />
          <div id="blob2">
            <Container className="marginTop">
              <ResponsiveContainer className="justify-content-md-center">
                <Row>
                  <LineChart width={1400} height={350} data={rows}
                  margin={{ top: 5, right: 100, left: 5, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="labelName"/>
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line strokeWidth={params[0].strokeWidth} name={params[0].legendName}
                   strokeDasharray={params[0].strokeDash} type={params[0].lineType} dataKey="a" stroke={params[0].color}/>
                  <Line strokeWidth={params[1].strokeWidth} name={params[1].legendName}
                  strokeDasharray={params[1].strokeDash} type={params[1].lineType} dataKey="b" stroke={params[1].color} />
                  </LineChart>
                </Row>
              </ResponsiveContainer>
            </Container>
          </div>
          <div>
            <ParameterCustomization params={params} modifyParams={modifyParams} chartState={chartState}/>
          </div>
          <Container className="fixed scroll">
            <TableComp rows={rows} deleteRow={deleteRow} modifyRow={modifyRow} chartState={chartState}/>
          </Container>
          <Container className="buttonContainer">
            <Row>
              <ButtonGroup>
              <Col md={{ offset: 2 }}><ButtonComp variant={"primary"} text='Add new row' onClick={increaseRows}/></Col>
              <Col md={{ offset: 0 }}><ButtonComp variant={"primary"} text='Download Chart 1' onClick={() => handleSaveClick("blob2")}/></Col>
              <Col md={{ offset: 0 }}><ButtonComp variant={"danger"} text='Delete Table'  onClick={deleteAll} /></Col>
              </ButtonGroup>
            </Row>
          </Container>
        </Route>

        <Route exact path="/three/threeline">
          <SubNavBar variableNumber={3} chartsSetter={chartsSetter} />
          <div id="blob3">
            <Container className="marginTop">
              <ResponsiveContainer className="justify-content-md-center">
                <Row>
                  <LineChart width={1400} height={350} data={rows}
                  margin={{ top: 5, right: 100, left: 5, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="labelName"/>
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line strokeWidth={params[0].strokeWidth} name={params[0].legendName}
                   strokeDasharray={params[0].strokeDash} type={params[0].lineType} dataKey="a" stroke={params[0].color}/>
                  <Line strokeWidth={params[1].strokeWidth} strokeLinecap={params[1].strokeLinecap} name={params[1].legendName}
                  strokeDasharray={params[1].strokeDash} type={params[1].lineType} dataKey="b" stroke={params[1].color} />
                  <Line strokeWidth={params[2].strokeWidth} strokeLinecap={params[2].strokeLinecap} name={params[2].legendName}
                  strokeDasharray={params[2].strokeDash} type={params[2].lineType} dataKey="c" stroke={params[2].color} />
                  </LineChart>
                  </Row>
              </ResponsiveContainer>
            </Container>
          </div>
          <div>
            <ParameterCustomization params={params} modifyParams={modifyParams} chartState={chartState}/>
          </div>
          <Container className="fixed scroll">
            <TableComp rows={rows} deleteRow={deleteRow} modifyRow={modifyRow} chartState={chartState}/>
          </Container>
          <Container  className="buttonContainer">
            <Row>
              <ButtonGroup>
              <Col md={{ offset: 2 }}><ButtonComp variant={"primary"} text='Add new row' onClick={increaseRows}/></Col>
              <Col md={{ offset: 0 }}><ButtonComp variant={"primary"} text='Download Chart' onClick={() => handleSaveClick("blob3")}/></Col>
              <Col md={{ offset: 0 }}><ButtonComp variant={"danger"} text='Delete Table'  onClick={deleteAll} /></Col>
              </ButtonGroup>
            </Row>
          </Container>
        </Route>

        <Route exact path="/one/onearea">
          <SubNavBar variableNumber={1} chartsSetter={chartsSetter} />
          <div id="blob4">
            <Container className="marginTop">
              <AreaChart width={1400} height={350} data={rows}
                    margin={{ top: 5, right: 100, left: 5, bottom: 5 }}>
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="10%" stopColor={params[0].color} stopOpacity={0.9}/>
                    <stop offset="97%" stopColor={params[0].color} stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="labelName" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Area type={params[0].lineType} dataKey="a" stroke={params[0].color} fillOpacity={params[0].strokeOpacity}
                 strokeWidth={params[0].strokeWidth} strokeDasharray={params[0].strokeDash} fill="url(#colorUv)" name={params[0].legendName}/>
              </AreaChart>
            </Container>
          </div>
          <div>
            <ParameterCustomization params={params} modifyParams={modifyParams} chartState={chartState}/>
          </div>
          <Container className="fixed scroll">
            <TableComp rows={rows} deleteRow={deleteRow} modifyRow={modifyRow} chartState={chartState}/>
          </Container>
          <Container  className="buttonContainer">
            <Row>
              <ButtonGroup>
                <Col md={{ offset: 2 }}><ButtonComp variant={"primary"} text='Add new row' onClick={increaseRows}/></Col>
                <Col md={{ offset: 0 }}><ButtonComp variant={"primary"} text='Download Chart' onClick={() => handleSaveClick("blob4")}/></Col>
                <Col md={{ offset: 0 }}><ButtonComp variant={"danger"} text='Delete Table'  onClick={deleteAll} /></Col>
              </ButtonGroup>
            </Row>
          </Container>
        </Route>

        <Route exact path="/two/area">
          <SubNavBar variableNumber={2} chartsSetter={chartsSetter} />
          <div id="blob5">
            <Container className="marginTop">
              <AreaChart width={1400} height={350} data={rows}
                    margin={{ top: 5, right: 100, left: 5, bottom: 5 }}>
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="10%" stopColor={params[0].color} stopOpacity={0.9}/>
                    <stop offset="97%" stopColor={params[0].color} stopOpacity={0.1}/>
                  </linearGradient>
                  <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="10%" stopColor={params[1].color} stopOpacity={0.9}/>
                    <stop offset="97%" stopColor={params[1].color} stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="labelName" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Area type={params[0].lineType} dataKey="a" stroke={params[0].color} fillOpacity={params[0].strokeOpacity}
                 strokeWidth={params[0].strokeWidth} strokeDasharray={params[0].strokeDash} fill="url(#colorUv)" name={params[0].legendName}/>
                <Area type={params[1].lineType} dataKey="b" stroke={params[1].color} fillOpacity={params[1].strokeOpacity}
                 strokeWidth={params[1].strokeWidth} strokeDasharray={params[1].strokeDash} fill="url(#colorPv)" name={params[1].legendName}/>
              </AreaChart>
            </Container>
          </div>
          <div>
            <ParameterCustomization params={params} modifyParams={modifyParams} chartState={chartState}/>
          </div>
          <Container className="fixed scroll">
            <TableComp rows={rows} deleteRow={deleteRow} modifyRow={modifyRow} chartState={chartState}/>
          </Container>
          <Container className="buttonContainer">
            <Row>
              <ButtonGroup>
                <Col md={{ offset: 2 }}><ButtonComp variant={"primary"} text='Add new row' onClick={increaseRows}/></Col>
                <Col md={{ offset: 0 }}><ButtonComp variant={"primary"} text='Download Chart' onClick={() => handleSaveClick("blob5")}/></Col>
                <Col md={{ offset: 0 }}><ButtonComp variant={"danger"} text='Delete Table'  onClick={deleteAll} /></Col>
              </ButtonGroup>
            </Row>
          </Container>
        </Route>

        <Route exact path="/three/threearea">
          <SubNavBar variableNumber={3} chartsSetter={chartsSetter} />
          <div id="blob6">
            <Container className="marginTop">
              <AreaChart width={1400} height={350} data={rows}
                    margin={{ top: 5, right: 100, left: 5, bottom: 5 }}>
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="10%" stopColor={params[0].color} stopOpacity={0.9}/>
                    <stop offset="97%" stopColor={params[0].color} stopOpacity={0.1}/>
                  </linearGradient>
                  <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="10%" stopColor={params[1].color} stopOpacity={0.9}/>
                    <stop offset="97%" stopColor={params[1].color} stopOpacity={0.1}/>
                  </linearGradient>
                  <linearGradient id="colorZv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="10%" stopColor={params[2].color} stopOpacity={0.9}/>
                    <stop offset="97%" stopColor={params[2].color} stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="labelName" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Area type={params[0].lineType} dataKey="a" stroke={params[0].color} fillOpacity={params[0].strokeOpacity}
                 strokeWidth={params[0].strokeWidth} strokeDasharray={params[0].strokeDash} fill="url(#colorUv)" name={params[0].legendName}/>
                <Area type={params[1].lineType} dataKey="b" stroke={params[1].color} fillOpacity={params[1].strokeOpacity}
                 strokeWidth={params[1].strokeWidth} strokeDasharray={params[1].strokeDash} fill="url(#colorPv)" name={params[1].legendName}/>
                 <Area type={params[2].lineType} dataKey="c" stroke={params[2].color} fillOpacity={params[2].strokeOpacity}
                 strokeWidth={params[2].strokeWidth} strokeDasharray={params[2].strokeDash} fill="url(#colorZv)" name={params[2].legendName}/>
              </AreaChart>
            </Container>
          </div>
          <div>
            <ParameterCustomization params={params} modifyParams={modifyParams} chartState={chartState}/>
          </div>
        
          <Container className="fixed scroll">
            <TableComp rows={rows} deleteRow={deleteRow} modifyRow={modifyRow} chartState={chartState}/>
          </Container>
          <Container className="buttonContainer">
            <Row>
              <ButtonGroup>
                <Col md={{ offset: 2 }}><ButtonComp variant={"primary"} text='Add new row' onClick={increaseRows}/></Col>
                <Col md={{ offset: 0 }}><ButtonComp variant={"primary"} text='Download Chart' onClick={() => handleSaveClick("blob6")}/></Col>
                <Col md={{ offset: 0 }}><ButtonComp variant={"danger"} text='Delete Table'  onClick={deleteAll} /></Col>
              </ButtonGroup>
            </Row>
          </Container>
        </Route>
        
        <Route exact path="/one/onebar">
          <SubNavBar variableNumber={1} chartsSetter={chartsSetter} />
          <div id="blob7">
            <Container className="marginTop">
              <BarChart width={1400} height={350} data={rows}
                    margin={{ top: 5, right: 100, left: 5, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="labelName" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="a" fill={params[0].color} fillOpacity={params[0].strokeOpacity} maxBarSize={150} name={params[0].legendName}>
                  <LabelList dataKey="labelName" position="center" angle="15" />
                </Bar>
              </BarChart>
            </Container>
          </div>
          <div>
            <ParameterCustomization params={params} modifyParams={modifyParams} chartState={chartState}/>
          </div>
          <Container className="fixed scroll">
            <TableComp rows={rows} deleteRow={deleteRow} modifyRow={modifyRow} chartState={chartState}/>
          </Container>
          <Container className="buttonContainer">
            <Row>
              <ButtonGroup>
                <Col md={{ offset: 2 }}><ButtonComp variant={"primary"} text='Add new row' onClick={increaseRows}/></Col>
                <Col md={{ offset: 0 }}><ButtonComp variant={"primary"} text='Download Chart' onClick={() => handleSaveClick("blob7")}/></Col>
                <Col md={{ offset: 0 }}><ButtonComp variant={"danger"} text='Delete Table'  onClick={deleteAll} /></Col>
              </ButtonGroup>
            </Row>
          </Container>
        </Route>

        <Route exact path="/two/bar">
          <SubNavBar variableNumber={2} chartsSetter={chartsSetter} />
          <div id="blob8">
            <Container className="marginTop">
              <BarChart width={1400} height={350} data={rows}
                    margin={{ top: 5, right: 100, left: 5, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="labelName" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="a" fill={params[0].color} fillOpacity={params[0].strokeOpacity} maxBarSize={150} name={params[0].legendName}>
                </Bar>
                <Bar dataKey="b" fill={params[1].color} fillOpacity={params[1].strokeOpacity} maxBarSize={150} name={params[1].legendName}>
                </Bar>
              </BarChart>
            </Container>
          </div>
          <div>
            <ParameterCustomization params={params} modifyParams={modifyParams} chartState={chartState}/>
          </div>
          <Container className="fixed scroll">
            <TableComp rows={rows} deleteRow={deleteRow} modifyRow={modifyRow} chartState={chartState}/>
          </Container>
          <Container  className="buttonContainer">
            <Row>
              <ButtonGroup>
                <Col md={{ offset: 2 }}><ButtonComp variant={"primary"} text='Add new row' onClick={increaseRows}/></Col>
                <Col md={{ offset: 0 }}><ButtonComp variant={"primary"} text='Download Chart' onClick={() => handleSaveClick("blob8")}/></Col>
                <Col md={{ offset: 0 }}><ButtonComp variant={"danger"} text='Delete Table'  onClick={deleteAll} /></Col>
              </ButtonGroup>
            </Row>
          </Container>
        </Route>
        
        <Route exact path="/three/threebar">
          <SubNavBar variableNumber={3} chartsSetter={chartsSetter} />
          <div id="blob9">
            <Container className="marginTop">
              <BarChart width={1400} height={350} data={rows}
                    margin={{ top: 5, right: 100, left: 5, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="labelName" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="a" fill={params[0].color} fillOpacity={params[0].strokeOpacity} maxBarSize={150} name={params[0].legendName}>
                </Bar>
                <Bar dataKey="b" fill={params[1].color} fillOpacity={params[1].strokeOpacity} maxBarSize={150} name={params[1].legendName}>
                </Bar>
                <Bar dataKey="c" fill={params[2].color} fillOpacity={params[2].strokeOpacity} maxBarSize={150} name={params[2].legendName}>
                </Bar>
              </BarChart>
            </Container>
          </div>
          <div>
            <ParameterCustomization params={params} modifyParams={modifyParams} chartState={chartState}/>
          </div>
          <Container className="fixed scroll">
            <TableComp rows={rows} deleteRow={deleteRow} modifyRow={modifyRow} chartState={chartState}/>
          </Container>
          <Container  className="buttonContainer">
            <Row>
              <ButtonGroup>
                <Col md={{ offset: 2 }}><ButtonComp variant={"primary"} text='Add new row' onClick={increaseRows}/></Col>
                <Col md={{ offset: 0 }}><ButtonComp variant={"primary"} text='Download Chart' onClick={() => handleSaveClick("blob9")}/></Col>
                <Col md={{ offset: 0 }}><ButtonComp variant={"danger"} text='Delete Table'  onClick={deleteAll} /></Col>
              </ButtonGroup>
            </Row>
          </Container>
        </Route>

        <Route exact path="/two/composed">
          <SubNavBar variableNumber={2} chartsSetter={chartsSetter} />
          <div id="blob10">
            <Container className="marginTop">
              <ComposedChart width={1400} height={350} data={rows}
                    margin={{ top: 5, right: 100, left: 5, bottom: 5 }}>
                <defs>
                  <linearGradient id="cGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="10%" stopColor={params[0].color} stopOpacity={0.9}/>
                    <stop offset="97%" stopColor={params[0].color} stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="labelName" />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid stroke="#f5f5f5" />
                <Area type={params[0].lineType} dataKey="a" stroke={params[0].color} fillOpacity={params[0].strokeOpacity}
                 strokeWidth={params[0].strokeWidth} strokeDasharray={params[0].strokeDash} fill="url(#cGrad)" name={params[0].legendName}/>
                <Bar dataKey="b" fill={params[1].color} fillOpacity={params[1].strokeOpacity} 
                 maxBarSize={150} name={params[1].legendName}/>
              </ComposedChart>
            </Container>
          </div>
          <div>
            <ParameterCustomization params={params} modifyParams={modifyParams} chartState={chartState}/>
          </div>
          <Container className="fixed scroll">
            <TableComp rows={rows} deleteRow={deleteRow} modifyRow={modifyRow} chartState={chartState}/>
          </Container>
          <Container  className="buttonContainer">
            <Row>
              <ButtonGroup>
                <Col md={{ offset: 2 }}><ButtonComp variant={"primary"} text='Add new row' onClick={increaseRows}/></Col>
                <Col md={{ offset: 0 }}><ButtonComp variant={"primary"} text='Download Chart' onClick={() => handleSaveClick("blob10")}/></Col>
                <Col md={{ offset: 0 }}><ButtonComp variant={"danger"} text='Delete Table'  onClick={deleteAll} /></Col>
              </ButtonGroup>
            </Row>
          </Container>
        </Route>

        <Route exact path="/three/composed">
          <SubNavBar variableNumber={3} chartsSetter={chartsSetter} />
          <div id="blob11">
            <Container className="marginTop">
              <ComposedChart width={1400} height={350} data={rows}
                    margin={{ top: 5, right: 100, left: 5, bottom: 5 }}>
                <defs>
                  <linearGradient id="cGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="10%" stopColor={params[0].color} stopOpacity={0.9}/>
                    <stop offset="97%" stopColor={params[0].color} stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="labelName" />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid stroke="#f5f5f5" />
                <Area type={params[0].lineType} dataKey="a" stroke={params[0].color} fillOpacity={params[0].strokeOpacity}
                 strokeWidth={params[0].strokeWidth} strokeDasharray={params[0].strokeDash} fill="url(#cGrad)" name={params[0].legendName}/>
                <Bar dataKey="b" fill={params[1].color} fillOpacity={params[1].strokeOpacity} 
                 maxBarSize={150} name={params[1].legendName}/>
                <Line strokeWidth={params[2].strokeWidth} strokeLinecap={params[2].strokeLinecap} name={params[2].legendName}
                    strokeDasharray={params[2].strokeDash} type={params[2].lineType} dataKey="c" stroke={params[2].color} />
              </ComposedChart>
            </Container>
          </div>
          <div>
            <ParameterCustomization params={params} modifyParams={modifyParams} chartState={chartState}/>
          </div>        
          <Container className="fixed scroll">
            <TableComp rows={rows} deleteRow={deleteRow} modifyRow={modifyRow} chartState={chartState}/>
          </Container>
          <Container className="buttonContainer">
            <Row>
              <ButtonGroup>
                <Col md={{ offset: 2 }}><ButtonComp variant={"primary"} text='Add new row' onClick={increaseRows}/></Col>
                <Col md={{ offset: 0 }}><ButtonComp variant={"primary"} text='Download Chart' onClick={() => handleSaveClick("blob11")}/></Col>
                <Col md={{ offset: 0 }}><ButtonComp variant={"danger"} text='Delete Table'  onClick={deleteAll} /></Col>
              </ButtonGroup>
            </Row>
          </Container>
        </Route>

        <Route exact path="/three/composed2">
          <SubNavBar variableNumber={3} chartsSetter={chartsSetter} />
          <div id="blob12">
            <Container className="marginTop">
              <ComposedChart width={1400} height={350} data={rows}
                    margin={{ top: 5, right: 100, left: 5, bottom: 5 }}>
                <defs>
                  <linearGradient id="c2grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="10%" stopColor={params[0].color} stopOpacity={0.9}/>
                    <stop offset="97%" stopColor={params[0].color} stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="labelName" />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid stroke="#f5f5f5" />
                <Area type={params[0].lineType} dataKey="a" stroke={params[0].color} fillOpacity={params[0].strokeOpacity}
                 strokeWidth={params[0].strokeWidth} strokeDasharray={params[0].strokeDash} fill="url(#c2grad)" name={params[0].legendName}/>
                <Scatter dataKey="b" stroke={params[1].color} fillOpacity={params[1].strokeOpacity}
                 strokeWidth={params[1].strokeWidth} fill={params[1].color} name={params[1].legendName}/>
                <Line strokeWidth={params[2].strokeWidth} strokeLinecap={params[2].strokeLinecap} name={params[2].legendName}
                    strokeDasharray={params[2].strokeDash} type={params[2].lineType} dataKey="c" stroke={params[2].color} />
              </ComposedChart>
            </Container>
          </div>
          <div>
            <ParameterCustomization params={params} modifyParams={modifyParams} chartState={chartState}/>
          </div>        
          <Container className="fixed scroll">
            <TableComp rows={rows} deleteRow={deleteRow} modifyRow={modifyRow} chartState={chartState}/>
          </Container>
          <Container className="buttonContainer">
            <Row>
              <ButtonGroup>
                <Col md={{ offset: 2 }}><ButtonComp variant={"primary"} text='Add new row' onClick={increaseRows}/></Col>
                <Col md={{ offset: 0 }}><ButtonComp variant={"primary"} text='Download Chart' onClick={() => handleSaveClick("blob12")}/></Col>
                <Col md={{ offset: 0 }}><ButtonComp variant={"danger"} text='Delete Table'  onClick={deleteAll} /></Col>
              </ButtonGroup>
            </Row>
          </Container>
        </Route>

        <Route exact path="/three/composed3">
          <SubNavBar variableNumber={3} chartsSetter={chartsSetter} />
          <div id="blob13">
            <Container className="marginTop">
              <ComposedChart width={1400} height={350} data={rows}
                    margin={{ top: 5, right: 100, left: 5, bottom: 5 }}>
                <defs>
                  <linearGradient id="c3grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="10%" stopColor={params[0].color} stopOpacity={0.9}/>
                    <stop offset="97%" stopColor={params[0].color} stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="labelName" />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid stroke="#f5f5f5" />
                <Area type={params[0].lineType} dataKey="a" stroke={params[0].color} fillOpacity={params[0].strokeOpacity}
                 strokeWidth={params[0].strokeWidth} strokeDasharray={params[0].strokeDash} fill="url(#c3grad)" name={params[0].legendName}/>
                <Scatter dataKey="b" stroke={params[1].color} fillOpacity={params[1].strokeOpacity}
                 strokeWidth={params[1].strokeWidth} fill={params[1].color} name={params[1].legendName}/>
                <Bar dataKey="c" fill={params[2].color} fillOpacity={params[2].strokeOpacity} 
                 maxBarSize={150} name={params[2].legendName}/>
              </ComposedChart>
            </Container>
          </div>
          <div>
            <ParameterCustomization params={params} modifyParams={modifyParams} chartState={chartState}/>
          </div>      
          <Container className="fixed scroll">
            <TableComp rows={rows} deleteRow={deleteRow} modifyRow={modifyRow} chartState={chartState}/>
          </Container>
          <Container className="buttonContainer">
            <Row>
              <ButtonGroup> 
                <Col md={{ offset: 2 }}><ButtonComp variant={"primary"} text='Add new row' onClick={increaseRows}/></Col>
                <Col md={{ offset: 0 }}><ButtonComp variant={"primary"} text='Download Chart' onClick={() => handleSaveClick("blob13")}/></Col>
                <Col md={{ offset: 0 }}><ButtonComp variant={"danger"} text='Delete Table'  onClick={deleteAll} /></Col>
              </ButtonGroup>
            </Row>
          </Container>
        </Route>

        <Route exact path="/one/onescatter">
          <SubNavBar variableNumber={1} chartsSetter={chartsSetter} />
          <div id="blob14">
            <Container className="marginTop">
              <ScatterChart width={1400} height={350} data={rows}
                  margin={{ top: 5, right: 100, left: 5, bottom: 5 }}>
               <CartesianGrid strokeDasharray="3 3" />
               <XAxis dataKey="labelName" name="value"/>
               <YAxis />
               <Tooltip  cursor={{ strokeDasharray: '10  3' }} />
               <Legend />
               <Scatter dataKey="a" stroke={params[0].color} fillOpacity={params[0].strokeOpacity}
               strokeWidth={params[0].strokeWidth} fill={params[0].color} name={params[0].legendName}/>      
              </ScatterChart>
            </Container>
          </div>
          <div>
            <ParameterCustomization params={params} modifyParams={modifyParams} chartState={chartState}/>
          </div>
          <Container className="fixed scroll">
            <TableComp rows={rows} deleteRow={deleteRow} modifyRow={modifyRow} chartState={chartState}/>
          </Container>
          <Container className="buttonContainer">
            <Row>
              <ButtonGroup>
                <Col md={{ offset: 2 }}><ButtonComp variant={"primary"} text='Add new row' onClick={increaseRows}/></Col>
                <Col md={{ offset: 0 }}><ButtonComp variant={"primary"} text='Download Chart' onClick={() => handleSaveClick("blob14")}/></Col>
                <Col md={{ offset: 0 }}><ButtonComp variant={"danger"} text='Delete Table'  onClick={deleteAll} /></Col>
              </ButtonGroup>
            </Row>
          </Container>
        </Route>
          
        <Route exact path="/two/scatter">
          <SubNavBar variableNumber={2} chartsSetter={chartsSetter} />
          <div id="blob15">
            <Container className="marginTop">
              <ScatterChart width={1400} height={350} data={rows}
                  margin={{ top: 5, right: 100, left: 5, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="labelName" name="value"/>
                <YAxis />
                <Tooltip cursor={{ strokeDasharray: '10  3' }} />
                <Legend />
                <Scatter dataKey="a" stroke={params[0].color} fillOpacity={params[0].strokeOpacity}
                strokeWidth={params[0].strokeWidth} fill={params[0].color} name={params[0].legendName}/>
                <Scatter dataKey="b" stroke={params[1].color} fillOpacity={params[1].strokeOpacity}
                strokeWidth={params[1].strokeWidth} fill={params[1].color} name={params[1].legendName}/>   
              </ScatterChart>
            </Container>
          </div>
          <div>
            <ParameterCustomization params={params} modifyParams={modifyParams} chartState={chartState}/>
          </div>
          <Container className="fixed scroll">
            <TableComp rows={rows} deleteRow={deleteRow} modifyRow={modifyRow} chartState={chartState}/>
          </Container>
          <Container className="buttonContainer">
            <Row>
              <ButtonGroup>
                <Col md={{ offset: 2 }}><ButtonComp variant={"primary"} text='Add new row' onClick={increaseRows}/></Col>
                <Col md={{ offset: 0 }}><ButtonComp variant={"primary"} text='Download Chart' onClick={() => handleSaveClick("blob15")}/></Col>
                <Col md={{ offset: 0 }}><ButtonComp variant={"danger"} text='Delete Table'  onClick={deleteAll} /></Col>
              </ButtonGroup>
            </Row>
          </Container>
        </Route>
        <Route exact path="/three/threescatter">
          <SubNavBar variableNumber={3} chartsSetter={chartsSetter} />
          <div id="blob16">
            <Container className="marginTop">
              <ScatterChart width={1400} height={350} data={rows}
                  margin={{ top: 5, right: 100, left: 5, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="labelName" name="value"/>
                <YAxis />
                <Tooltip cursor={{ strokeDasharray: '10  3' }} />
                <Legend />
                <Scatter dataKey="a" stroke={params[0].color} fillOpacity={params[0].strokeOpacity}
                strokeWidth={params[0].strokeWidth} fill={params[0].color} name={params[0].legendName}/>
                <Scatter dataKey="b" stroke={params[1].color} fillOpacity={params[1].strokeOpacity}
                strokeWidth={params[1].strokeWidth} fill={params[1].color} name={params[1].legendName}/>
                <Scatter dataKey="c" stroke={params[2].color} fillOpacity={params[2].strokeOpacity}
                strokeWidth={params[2].strokeWidth} fill={params[2].color} name={params[2].legendName}/>
              </ScatterChart>
            </Container>
          </div>
          <div>
            <ParameterCustomization params={params} modifyParams={modifyParams} chartState={chartState}/>
          </div>
          <Container className="fixed scroll">
            <TableComp rows={rows} deleteRow={deleteRow} modifyRow={modifyRow} chartState={chartState}/>
          </Container>
          <Container className="buttonContainer">
            <Row>
              <ButtonGroup>
                <Col md={{ offset: 2 }}><ButtonComp variant={"primary"} text='Add new row' onClick={increaseRows}/></Col>
                <Col md={{ offset: 0 }}><ButtonComp variant={"primary"} text='Download Chart' onClick={() => handleSaveClick("blob16")}/></Col>
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

const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})), 
    reactReduxFirebase(fbConfig, {useFirestoreForProfile: true, userProfile: 'users'}), // redux binding for firebase
    reduxFirestore(fbConfig ) // redux bindings for firestore
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

/* const DashSelect = ({modifyParams, param}) => {
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
/* Pie, PieChart, RadarChart, PolarGrid, 
  PolarAngleAxis, PolarRadiusAxis, Radar,
<Nav.Link as={Link}  to="/pie" onClick={pieChartSetter}><b>Pie Chart</b></Nav.Link>
<Nav.Link as={Link}  to="/radar" onClick={radarChartSetter}><b>Radar Chart</b></Nav.Link>
<Route exact path="/radar">
        <Container className="marginTop">
        <RadarChart outerRadius={90} width={730} height={250} data={rows}>
          <PolarGrid />
          <PolarAngleAxis dataKey="labelName" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar name="Mike" dataKey="a" stroke="#8884d8" fill={params[0].color} fillOpacity={params[0].strokeOpacity} />
          <Radar name="Lily" dataKey="b" stroke="#82ca9d" fill={params[1].color} fillOpacity={params[1].strokeOpacity} />
          <Legend />
        </RadarChart>
        </Container>
        <div>
          <ParameterCustomization params={params} modifyParams={modifyParams} chartState={chartState}/>
        </div>
        
          <Container className="fixed scroll">
            <TableComp rows={rows} deleteRow={deleteRow} modifyRow={modifyRow} chartState={chartState}/>
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
<Route exact path="/pie">
        <Container className="marginTop">
          <ResponsiveContainer className="justify-content-md-center">
            <Row>
            <PieChart width={730} height={250}>
              <Pie data={rows} dataKey="a" nameKey="labelName" cx="50%" cy="50%" outerRadius={50} fill={params[0].color} />
            </PieChart>
            </Row>
          </ResponsiveContainer>
        </Container>
        <div>
          <ParameterCustomization params={params} modifyParams={modifyParams} chartState={chartState}/>
        </div>
        
        
          <Container className="fixed scroll">
            <TableComp rows={rows} deleteRow={deleteRow} modifyRow={modifyRow} chartState={chartState}/>
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
*/
/*  const [isLabel, setIsLabel] = useState(true)
  const showLabel = (props) => {
    if(!props.isLabel){return(null)}
    return(
      <>
      {props.dataKey="labelName"} {props.position="center"} {props.angle="15"}
      </>
    )
  }
              <Nav.Link as={Link}  to="/one/oneline" onClick={onelineChartSetter}><b>Line Chart</b></Nav.Link>
              <Nav.Link as={Link}  to="/two/line" onClick={lineChartSetter}><b>Line Chart</b></Nav.Link>
              <Nav.Link as={Link}  to="/three/threeline" onClick={threelineChartSetter}><b>Line Chart</b></Nav.Link>
              <Nav.Link as={Link}  to="/one/onearea" onClick={oneareaChartSetter}><b>Area Chart</b></Nav.Link>
              <Nav.Link as={Link}  to="/two/area" onClick={areaChartSetter}><b>Area Chart</b></Nav.Link>
              <Nav.Link as={Link}  to="/three/threearea" onClick={threeareaChartSetter}><b>Area Chart</b></Nav.Link>
              <Nav.Link as={Link}  to="/one/onebar" onClick={onebarChartSetter}><b>Bar Chart</b></Nav.Link>
              <Nav.Link as={Link}  to="/two/bar" onClick={barChartSetter}><b>Bar Chart</b></Nav.Link>
              <Nav.Link as={Link}  to="/three/threebar" onClick={threebarChartSetter}><b>Bar Chart</b></Nav.Link>
              <Nav.Link as={Link}  to="/one/onescatter" onClick={onescatterChartSetter}><b>Scatter Chart</b></Nav.Link>
              <Nav.Link as={Link}  to="/two/scatter" onClick={scatterChartSetter}><b>Scatter Chart</b></Nav.Link>
              <Nav.Link as={Link}  to="/three/threescatter" onClick={threescatterChartSetter}><b>Scatter Chart</b></Nav.Link>
              <Nav.Link as={Link}  to="/three/composed" onClick={composedChartSetter}><b>Composed Chart</b></Nav.Link>
              <Nav.Link as={Link}  to="/three/composed2" onClick={composedChartSetter}><b>Composed 2 Chart</b></Nav.Link>
              <Nav.Link as={Link}  to="/three/composed3" onClick={composedChartSetter}><b>Composed 3 Chart</b></Nav.Link>
  */