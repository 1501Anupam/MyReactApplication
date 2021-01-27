import { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: "Anu", age: 22},
      {name: "Roman Reigns", age: 36}
    ]
  }
  render() { return (
    <div className="App">
      <h2>Hi I am react app!</h2>
      <Person name={this.state.persons[0].name} age= {this.state.persons[0].age}></Person>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Hobbies: Eating</Person>
    </div>
  );}
 
}

export default App;
