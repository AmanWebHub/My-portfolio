import React from 'react'

const PoroectCard = (props) => {
  return (
    <>
      <div class="col-lg-4 col-md-6">
          <div class="project-card">
            <img src={props.image} class="project-image" alt={props.name}/>
            <div class="project-overlay">
              <h5>{props.description}</h5>
              <a href={props.url} class="btn btn-outline-light">View Project</a>
            </div>
          </div>
        </div>
    </>
  )
}

export default PoroectCard