import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from "react";

function App() {
  const [tracks, setTracks] = useState([])

  useEffect(() => {
    axios.get('https://django-tester111.herokuapp.com/track/')
      .then(res => {
        setTracks(res.data)
        console.log('the tracks from heroku', res.data)
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const displayTracks = () => {
    console.log('The tracks', tracks)

    return tracks.map((track) => {
      return (
        <div className="track">
          <h1>{track.title}</h1>
          <h1>{track.description}</h1>
        </div>
      )
    })
  }

  const aNewTrack = () => {
    axios.post('https://django-tester111.herokuapp.com/track/', {
      title: 'we created the track',
      description: 'Life has been given to this new track we created.'
    })
    .catch((err) => {
      console.error(err);
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button 
          className="thebtnIknow!" 
          onClick={() => aNewTrack()}
        >
          a new track.!.!.!.
        </button>
        <div className="tracks">
          {displayTracks()}
        </div>
      </header>
    </div>
  );
}

export default App;
