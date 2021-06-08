import React from 'react';
import {Link} from "react-router-dom";
import './design.css';
import { Nav, Navbar } from 'react-bootstrap';

const SubNavBar = ({variableNumber, chartsSetter}) => {
  switch(variableNumber)
  {
    case 1:
      return(
        <Navbar variant="light" bg="light" justify className="justify-content-between" >
          <Nav.Link as={Link}  to="/one/oneline" onClick={()=>chartsSetter({nov:1,dash:true,type:true,width:true,opacity:false,color:true})}><b>Line Chart</b></Nav.Link>
          <Nav.Link as={Link}  to="/one/onearea" onClick={()=>chartsSetter({nov:1,dash:true,type:true,width:true,opacity:true,color:true})}><b>Area Chart</b></Nav.Link>
          <Nav.Link as={Link}  to="/one/onebar" onClick={()=>chartsSetter({nov:1,dash:false,type:false,width:false,opacity:true,color:true})}><b>Bar Chart</b></Nav.Link>
          <Nav.Link as={Link}  to="/one/onescatter" onClick={()=>chartsSetter({nov:1,dash:false,type:false,width:true,opacity:true,color:true})}><b>Scatter Chart</b></Nav.Link>
        </Navbar>
      )
    case 3:
      return(
        <Navbar variant="light" bg="light" justify className="justify-content-between" >
          <Nav.Link as={Link}  to="/three/threeline" onClick={()=>chartsSetter({nov:3,dash:true,type:true,width:true,opacity:false,color:true})}><b>Line Chart</b></Nav.Link>
          <Nav.Link as={Link}  to="/three/threearea" onClick={()=>chartsSetter({nov:3,dash:true,type:true,width:true,opacity:true,color:true})}><b>Area Chart</b></Nav.Link>
          <Nav.Link as={Link}  to="/three/threebar" onClick={()=>chartsSetter({nov:3,dash:false,type:false,width:false,opacity:true,color:true})}><b>Bar Chart</b></Nav.Link>
          <Nav.Link as={Link}  to="/three/threescatter" onClick={()=>chartsSetter({nov:3,dash:false,type:false,width:true,opacity:true,color:true})}><b>Scatter Chart</b></Nav.Link>
          <Nav.Link as={Link}  to="/three/composed" onClick={()=>chartsSetter({nov:3,dash:true,type:true,width:true,opacity:true,color:true})}><b>Composed Chart</b></Nav.Link>
          <Nav.Link as={Link}  to="/three/composed2" onClick={()=>chartsSetter({nov:3,dash:true,type:true,width:true,opacity:true,color:true})}><b>Composed Chart 2</b></Nav.Link>
          <Nav.Link as={Link}  to="/three/composed3" onClick={()=>chartsSetter({nov:3,dash:true,type:true,width:true,opacity:true,color:true})}><b>Composed Chart 3</b></Nav.Link>
        </Navbar>
      )
    default:
      return(
        <Navbar variant="light" bg="light" justify className="justify-content-between" >
          <Nav.Link as={Link}  to="/two/line" onClick={()=>chartsSetter({nov:2,dash:true,type:true,width:true,opacity:false,color:true})}><b>Line Chart</b></Nav.Link>
          <Nav.Link as={Link}  to="/two/area" onClick={()=>chartsSetter({nov:2,dash:true,type:true,width:true,opacity:true,color:true})}><b>Area Chart</b></Nav.Link>
          <Nav.Link as={Link}  to="/two/bar" onClick={()=>chartsSetter({nov:2,dash:false,type:false,width:true,opacity:true,color:true})}><b>Bar Chart</b></Nav.Link>
          <Nav.Link as={Link}  to="/two/scatter" onClick={()=>chartsSetter({nov:2,dash:false,type:false,width:true,opacity:true,color:true})}><b>Scatter Chart</b></Nav.Link>
          <Nav.Link as={Link}  to="/two/composed" onClick={()=>chartsSetter({nov:2,dash:true,type:true,width:true,opacity:true,color:true})}><b>Composed Chart</b></Nav.Link>
        </Navbar>
      )
  }
}
export default SubNavBar;