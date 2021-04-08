import React from "react";
import {Link} from "react-router-dom";  
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const OurTools = () => { 
  return (
    <div className="navbar">   
        <Link to="/one-oneline">
         <button >Line Chart</button> 
        </Link> 
        <Link to="/two/line">
         <button >Two Line Chart</button> 
        </Link> 
        <Link to="/three/threeline">
         <button > Three Line Chart</button> 
        </Link> 
        <Link to="/one/onearea">
         <button >Area Chart</button> 
        </Link> 
 
   
</div> 
  )
}
export default OurTools;
/* 

 <Nav className="mr-auto">
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
            </Nav>

*/