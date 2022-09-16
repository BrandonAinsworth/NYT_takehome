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


useEffect(() => {
  getStories('world')
  .then(data => {
    setStories(data.results)
  })
},[stories])

const searchCurrentStories = (e) => {
  e.preventDefault()
  let filterStories = stories.filter(news => {
    return news.title.toLowerCase().includes(e.target.value.toLowerCase())   
  })
  
  if(filterStories !== []) {
  setSearchedStories(filterStories)
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
