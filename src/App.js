import React,{useState} from 'react';

import Puzzle from './components/Puzzle';
import Header from './components/Header';


const App = () =>  {

  const user_preference_size = 5

  const [size, setSize] = useState(user_preference_size)
  

  return(
    <>
      <Header/>
      <Puzzle size={size}/>
    </>
  )
}

export default App;
