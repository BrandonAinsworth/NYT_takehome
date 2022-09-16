import React from "react";
import { Link } from "react-router-dom";
import './Story.css'

const Story = ({image, abstract, title}) => {
    if(image) {
return (
  <>
  <Link to={`${title}`}>
  <div className="story-wrapper">
  <div className="image-container">
  <img className="story-image" alt={title} src={image[2].url}/>
  </div>
  <div className="info-container">
  <p className="story-title">{title}</p>
  <p className="story-abstract">{abstract}</p>
  </div>
  </div>
  </Link>
  <hr className="hr"></hr>
  </>
)
    }
}




export default Story;