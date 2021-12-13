import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {

  const getTracks = () => {
    const tracks = [];
    axios.get('https://django-tester111.herokuapp.com/track/')
      .then(res => {
        console.log('the tracks from heroku', res)
        tracks = res;
      })

    console.log('tracks', tracks);

    return tracks.map(track => {
      return (
        <div>
          <h1>{track.title}</h1>
          <h1>{track.description}</h1>
        </div>
      )
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
        {getTracks()}
      </header>
    </div>
  );
}

export default App;
