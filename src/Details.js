import React, { useEffect, useState } from "react";
import Header from "./Header";
const Details = ({stories , title}) => {

const [story, setStory] = useState([])

useEffect(() => {
let filterStory = stories.filter(news => {
  return news.title === title
})
console.log('filterStory',filterStory)
  setStory(filterStory)
},[])

return (
  <>
  {story.length ? 
  <>
  <Header />
  <p className="details-header">{story[0].title}</p>
  <img src={story[0].multimedia[0].url}/>
  </>
  :
  <p>LOADING...</p>
}
  </>
)

}


export default Details;