import React from "react";
import './Nav.css'
import { getStories } from "./apiCalls";

const Nav = ({setStories}) => {

const updateStory = (e) => {
 e.preventDefault()
 let lowerCase = (e.target.innerHTML).toLowerCase()
  getStories(lowerCase)
  .then(data => {
    setStories(data.results)
  })
}

  return (

    <>
    <div className="categories">
    <p className="category arts" onClick={(e) => updateStory(e)}>Arts</p>
    <p className="category automobiles" onClick={(e) => updateStory(e)}>Automobiles</p>
    <p className="category business" onClick={(e) => updateStory(e)}>Business</p>
    <p className="category fashion" onClick={(e) => updateStory(e)}>Fashion</p>
    <p className="category food" onClick={(e) => updateStory(e)}>Food</p>
    <p className="category health" onClick={(e) => updateStory(e)}>Health</p>
    <p className="category insider" onClick={(e) => updateStory(e)}>Insider</p>
    <p className="category magazine" onClick={(e) => updateStory(e)}>Magazine</p>
    <p className="category movies" onClick={(e) => updateStory(e)}>Movies</p>
    <p className="category newyork" onClick={(e) => updateStory(e)}>New York</p>
    <p className="category obit" onClick={(e) => updateStory(e)}>Obituaries</p>
    <p className="category opinion" onClick={(e) => updateStory(e)}>Opinion</p>
    <p className="category politics" onClick={(e) => updateStory(e)}>Politics</p>
    <p className="category real" onClick={(e) => updateStory(e)}>Real Estate</p>
    <p className="category science" onClick={(e) => updateStory(e)}>Science</p>
    <p className="category sports" onClick={(e) => updateStory(e)}>Sports</p>
    <p className="category tech" onClick={(e) => updateStory(e)}>Technology</p>
    <p className="category theatre" onClick={(e) => updateStory(e)}>Theatre</p>
    <p className="category travel" onClick={(e) => updateStory(e)}>Travel</p>
    <p className="category us" onClick={(e) => updateStory(e)}>US</p>
    <p className="category world" onClick={(e) => updateStory(e)}>World</p>
    </div>
    </>
  )

}


export default Nav;

// arts, automobiles, books, business, 
// fashion, food, health, home, insider, magazine, movies, nyregion, obituaries, opinion, politics,
// realestate, science, sports, sundayreview, technology, theater, t-magazine, travel, upshot, us, world