import React from "react";

const Story = ({image}) => {
    if(image) {
return (
  <>
  <img className="story-image" src={image[2].url}/>
  </>
)
    }
}




export default Story;