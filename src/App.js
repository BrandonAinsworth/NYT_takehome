import { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import { getStories } from './apiCalls';
import StoriesContainer from './StoriesContainer';
import { Route } from 'react-router-dom';
import Details from './Details';
const App = () => {


const [stories, setStories] = useState([])

useEffect(() => {
    getStories('world')
      .then(data => {
          setStories(data.results)
      })
  },[])

  return (
    <>
    <Route exact path='/'>
    <Header setStories={setStories}/>
    {stories.length ? 
    <StoriesContainer stories={stories}/>
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
