import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import AboutMe from './Components/AboutMe';
import Heading from './Components/Heading';
import AboutDave from './Components/AboutDave';
import NavBar from './Components/NavBar';
import Pets from './Components/Pets';
import Students from './Components/Students';
import Movies from './Components/Movies';

class App extends Component { // Student extends CodeNation
  state = {
    persons: [
      { name: "Bubu", age: 28 },
      { name: "Dean", age: 29 },
      { name: "Kerry", age: 25 }
    ],
    animals: [
      { name: "Jack", age: 8 }
    ]
  }

  render() { // render method is used instead of class based components
    const eachPerson = this.state.persons.map((student, index) => {
      return <AboutMe name={student.name} age={student.age} />
    })
    return (
      <div className="App">
        <NavBar />
        <Heading />
        <AboutMe name="Boux" age={28}/>
        <AboutMe name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <AboutMe name={this.state.animals[0].name} age={this.state.animals[0].age} />
        {eachPerson}
        <AboutDave />
        <Students name="Adam" age={22}/> 
        <Students name="Kerry" age={28}/>
        <Students name="Ebuka, the god" age={76}/>
        <Movies title="Avengers" description="I dunno, I mean, it's only the best movie of all time" recommend="Yes"/>
        <Pets name="Jack" color="Black and Tan" type="Dog" species="German Shepherd" />

      </div>
    )
  }
}
// age in react is represented in {}

export default App; // crucial lineeeee



/*const Student = (props) => {
  return (
    <div>
      <p>
        Hello, my name is {props.name} and I'm {props.age} years young
      </p>
    </div>
  )
}*/









/*function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <p id="paragraph">Bubu is a good boy</p>
    </div>
  );
}*/
/*const AboutMe = () => {
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
}*/

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