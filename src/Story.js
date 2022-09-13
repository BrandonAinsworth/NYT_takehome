import React from "react";

const Story = ({image, abstract, title}) => {
    if(image) {
return (
  <>
  <p>{title}</p>
  <p>{abstract}</p>
  <img className="story-image" src={image[2].url}/>
  </>
)
    }
}




export default Story;