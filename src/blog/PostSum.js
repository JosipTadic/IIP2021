import React from 'react'

const ProjectSum = ({project}) => {
    return (

      <div class="blog-card">
        <div class="meta">
          <div > <img class="blogPhoto" src={project.image} alt=""/> </div>
          <ul class="details">             
            <li class="date">{project.createdAt.toDate().toDateString()}</li> 
            <li class="date">{project.description}</li>            
          </ul>
        </div>


        <div class="description">
          <h1 style={{textDecoration:"underline overline",textDecorationColor:"white"}}>{project.title} </h1>
          <p className="author" style={{textDecoration:"underline overline", textDecorationColor:"white" }}>Author: {project.authorFirstName} {project.authortLastName}</p> 
        </div>
      </div>
 
    )
  }
  
  export default ProjectSum


  