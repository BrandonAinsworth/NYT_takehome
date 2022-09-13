import React from "react";
import Story from "./Story";


const StoriesContainer = ({stories}) => {
  const storybook = stories.map(story => {
    if(story.section) {
    return (
      <Story
      image={story.multimedia}
      />
    )
    }
  })

  return(
   <div className="story-container">
    {storybook}
  </div>
  )
}

export default StoriesContainer