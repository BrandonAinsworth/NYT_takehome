import React from "react";
import './Story.css'

const Story = ({image, abstract, title}) => {
    if(image) {
return (
  <>
  <div className="story-wrapper">
  <div className="image-container">
  <img className="story-image" src={image[2].url}/>
  </div>
  <div className="info-container">
  <p className="story-title">{title}</p>
  <p className="story-abstract">{abstract}</p>
  </div>
  </div>
  <hr></hr>
  </>
)
    }
}




export default Story;