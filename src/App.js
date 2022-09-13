import { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import { getStories } from './apiCalls';

const App = () => {

 let storyParam; 

const [stories, setStories] = useState([])

useEffect(() => {
    getStories('world')
      .then(data => {
        console.log(data)
          setStories(data)
      })
  },[])

  return (
    <>
    <Header />
    <p>Hello</p>
    </>
  );
}

export default App;
