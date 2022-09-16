import React, { useEffect, useState } from "react";
import Header from "./Header";
import './Details.css'
const Details = ({stories , title}) => {

const [story, setStory] = useState([])

useEffect(() => {
let filterStory = stories.filter(news => {
  return news.title === title
})
console.log('filterStory',filterStory)
  setStory(filterStory)
},[stories, title])

return (
  <>
  {story.length ? 
  <>
  <Header />
  <p className="details-title">{story[0].title}</p>
  <p className="byline">{story[0].byline}</p>
  <div className="details-image-wrapper">
  <img className="details-image" alt={story[0].title} src={story[0].multimedia[0].url}/>
  </div>
  <p className="details-abstract">{story[0].abstract}</p>
  <p className="cta">See the full story <a href={story[0].url} target='_blank' rel="noreferrer">here!</a></p>
  </>
  :
  <>
  <Header />
  <p>LOADING...</p>
  </>
}
  </>
)

}


export default Details;