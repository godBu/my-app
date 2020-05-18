import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';

/*function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <p id="paragraph">Bubu is a good boy</p>
    </div>
  );
}*/
const AboutMe = () => {
  return (
    <div>
    <h1>hello</h1>
    <p>I rock</p>
    </div>
  )
}

const AboutUs = () => {
  return (
    <div>
    <h1>ola</h1>
    <p>We rock</p>
    </div>
  )
}

const AboutThem = () => {
  return (
    <div>
    <h1>yo</h1>
    <p>They defo suck</p>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Hello World</h1>
      <AboutMe />
      <AboutUs />
      <AboutThem />
      </div>
    )
  }
}

export default App;

/*const App = () => {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <p>Bubu is a good boy</p>
    </div>
  );
}

export default App;*/



/*function App() {
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
      </header>
    </div>
  );
}

export default App; */