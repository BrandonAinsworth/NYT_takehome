import React from "react";
import Story from "./Story";

// abstract: "A quarter-century ago Princess Diana’s shocking death provoked outrage at the royal family. Queen Elizabeth’s passing, in contrast, has been draped in civility and respect."
// byline: "By Sarah Lyall"
// created_date: "2022-09-13T11:02:06-04:00"
// des_facet: (3) ['Royal Families', 'Funerals and Memorials', 'Politics and Government']
// geo_facet: []
// item_type: "Article"
// kicker: "London dispatch"
// material_type_facet: ""
// multimedia: (3) [{…}, {…}, {…}]
// org_facet: ['Buckingham Palace']
// per_facet: (6) ['Blair, Tony', 'Bowles, Camilla Parker', 'Diana, Princess of Wales', 'Elizabeth II, Queen of Great Britain', 'Harris, Robert Dennis (1957- )', 'Markle, Meghan']
// published_date: "2022-09-13T11:02:06-04:00"
// section: "sports"
// short_url: "https://nyti.ms/3RBNlBY"
// subsection: ""
// title: "How the Passage of Time Softened the Fury Over Diana’s Death"
// updated_date: "2022-09-13T11:34:54-04:00"
// uri: "nyt://article/52ce142b-62f5-5437-94b4-8d64faa9b130"
// url: "https://www.nytimes.com/2022/09/13/sports/princess-diana-camilla-queen-elizabeth.html"

const StoriesContainer = ({stories}) => {
  const storybook = stories.map(story => {
    if(story.section) {
    return (
      <Story
      abstract={story.abstract}
      title={story.title}
      image={story.multimedia}
      key={(Date.now() * Math.random())}
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