import { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import { getStories } from './apiCalls';
import StoriesContainer from './StoriesContainer';
import { Route } from 'react-router-dom';
import Details from './Details';
const App = () => {


const [stories, setStories] = useState([])
const [searchedStories, setSearchedStories] = useState([])
const [result, setResult] = useState(true)

useEffect(() => {
  getStories('world')
  .then(data => {
    setStories(data.results)
  })
},[])

const searchCurrentStories = (e) => {
  e.preventDefault()
  let filterStories = stories.filter(news => {
     if(news.title.toLowerCase().includes(e.target.value.toLowerCase())) {
      return news
     } else if (news.title.toLowerCase().includes(e.target.value.toLowerCase())){
      return []
     }
  })
  if(filterStories !== []) {
  setSearchedStories(filterStories)
  } else {
    setResult(false)
  }
}

  return (
    <>
    <Route exact path='/'>
    <Header setStories={setStories}/>
    {stories.length
    ? 
    <>
    <input
    type='text'
    data-cy='search'
    placeholder="Search by Keyword"
    name='search-form'
    className='search'
    aria-label='search movies'
    onChange={e => searchCurrentStories(e)}
    />
    {!searchedStories.length ?
    <StoriesContainer stories={stories}/>
    :
    <StoriesContainer stories={searchedStories}/>
}
    </>
    :
    <p>LOADING...</p>
}

    </Route>
    <Route exact path='/:title' render={({match}) => {
      return <Details title={match.params.title} stories={stories}/>
    }}>


    </Route>

    </>
  );
}

export default App;
