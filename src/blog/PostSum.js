import React from 'react'

const ProjectSum = ({project}) => {
    return (

      <div class="blog-card">
        <div class="meta">
          <div class="blogPhoto"></div>
          <ul class="details">             
            <li class="date">Aug. 24, 2015</li>            
          </ul>
        </div>


        <div class="description">
          <h1>{project.title} </h1>
          <p className="author">Author: {project.authorFirstName} {project.authortLastName}</p> 
        </div>
      </div>
 
    )
  }
  
  export default ProjectSum


  