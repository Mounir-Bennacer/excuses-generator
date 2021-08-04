import './App.css';
import axios from 'axios'
import { useState } from 'react';
import Questions from './Questions';

function App() {
  const [intro, setIntro] = useState([])
  // fetch data
  const fetchIntros = (e) => {
    e.preventDefault()
    axios.get('localhost:8800/intro/get').then( (req, res) => {
      try {
        setIntro(res.data)
        console.log(res.data)
      } catch (error) {
        console.log(error)
      }
    })
  }

  return (
    <div className="App">
      <h1></h1>
      <Questions />
    </div>
  );
}

export default App;
