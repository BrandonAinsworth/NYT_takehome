import { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import { getStories } from './apiCalls';
import StoriesContainer from './StoriesContainer';

const App = () => {

 let storyParam; 

const [stories, setStories] = useState([])

useEffect(() => {
    getStories('world')
      .then(data => {
        console.log(data)
          setStories(data.results)
      })
  },[])

  return (
    <>
    <Header />
    {stories.length ? 
    <StoriesContainer stories={stories}/>
    :
    <p>LOADING...</p>
}
    </>
  );
}

export default App;
