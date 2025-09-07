import React from 'react'

const PoroectCard = (props) => {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="project-card">
        <img src={props.image} className="project-image" alt={props.name} />
        <div className="project-overlay">
          <h4 className="project-title">{props.name}</h4>
          <p className="project-desc">{props.description}</p>
          <a href={props.url} className="btn btn-outline-light">
            View Project
          </a>
        </div>
      </div>
    </div>
  )
}

export default PoroectCard
