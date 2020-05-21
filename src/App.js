import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import AboutMe from './Components/AboutMe';
import Pets from './Components/Pets';

class App extends Component { // Student extends CodeNation
  state = {
    persons: [
      { personname: "Bubu", personage: 28 },
      { personname: "Dean", personage: 29 },
      { personname: "Kerry", personage: 25 }
    ],
    animals: [
      { petname: "Jack", color: "black and tan", type: "dog", species: "German Shepherd" }
    ],
    digits: [
      1, 2, 3, 4
    ],
    currentNumber: ""
  }

saveNumber = (event) => {
  console.log(event.target.value);
  this.setState({
    currentNumber: event.target.value
  })
}

addNumber = (number) => {
    this.setState({
      digits: [...this.state.digits, this.state.currentNumber],
      currentNumber: ""
    })
  }

  render() { // render method is used instead of class based components
    const eachPerson = this.state.persons.map((student, index) => {
      return <AboutMe personname={student.personname} personage={student.personage} key={index} />
    })
    const eachPet = this.state.animals.map((pet) => {
      return <Pets petname={pet.petname} color={pet.color} type={pet.type} species={pet.species} />
    })
    const eachNumber = this.state.digits.map((singleNumber, index) => {
    return <li key={index}>{singleNumber}</li>
    })
    return (
      <div className="App">
        {eachPerson}
        {eachPet}
      <ul>{eachNumber}</ul>
      <input type="number" onChange={this.saveNumber} value={this.state.currentNumber} />
      <button onClick={() => this.addNumber(10)}>Add Number</button>
      </div>
    )
  }
}
// age in react is represented in {}

export default App; // crucial lineeeee



/*
     <NavBar />
        <Heading />
        <AboutMe name="Boux" age={28}/>
        <AboutMe name={this.state.persons[0].name} age={this.state.persons[0].age} />
        {/*<AboutMe name={this.state.animals[0].name} age={this.state.animals[0].age} .}
        <AboutDave />
        <Students name="Adam" age={22}/> 
        <Students name="Kerry" age={28}/>
        <Students name="Ebuka, the god" age={76}/>
        <Movies title="Avengers" description="I dunno, I mean, it's only the best movie of all time" recommend="Yes"/>
        <Pets name="Jack" color="Black and Tan" type="Dog" species="German Shepherd" />
const Student = (props) => {
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