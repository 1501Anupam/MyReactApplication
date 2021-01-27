import { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: "Anu", age: 22},
      {name: "Sasha", age: 22},
      {name: "Roman Reigns", age: 36}
    ]
  }

  switchNameHandler = (firstName)=> {
    this.setState({
      persons: [
        {name: firstName, age: 22},
        {name: "Banks", age: 22},
        {name: "Roman Reigns", age: 36}
      ]
    });
  }

  nameChangedHandler = (event)=> {
    this.setState({
      persons: [
        {name: "Anu", age: 22},
        {name: "Roman Reigns", age: 22},
        {name: event.target.value, age: 36}
      ]
    });
  }

  render() { 
    const style = {
      backgroundColor : 'olive',
      color: 'white',
      border: '1px solid #000',
      padding: '10px',
      cursor: 'pointer'

    };

    return (
    <div className="App">
      <h2>Hi I am react app!</h2>
      <button style = {style} onClick={this.switchNameHandler.bind(this, 'Awesomeness!!!')}>Switch Names</button>
      <Person name={this.state.persons[0].name} age= {this.state.persons[0].age}></Person>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click = {() => this.switchNameHandler('Fab!')}>Hobbies: Eating</Person>
      <Person name={this.state.persons[2].name} age= {this.state.persons[2].age} changed={this.nameChangedHandler}></Person>
    </div>
  );}
 
}

export default App;
