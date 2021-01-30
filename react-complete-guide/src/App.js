import { Component } from 'react';
import './App.css';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Person from './Person/Person';
// import UserInput from './UserInput/UserInput';
// import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    persons: [
      {id: "a1", name: "Anu", age: 22},
      {id: "a2", name: "Sasha", age: 22},
      {id: "a3", name: "Roman Reigns", age: 36}
    ],
    userName: "Anupam",
    showPersons: false
  }

  // switchNameHandler = (firstName)=> {
  //   this.setState({
  //     persons: [
  //       {name: firstName, age: 22},
  //       {name: "Banks", age: 22},
  //       {name: "Roman Reigns", age: 36}
  //     ]
  //   });
  // }

  onToggleHandler = () =>{
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});
  }

  nameChangedHandler = (event, id)=> {
    const prsnIndex = this.state.persons.findIndex(p => {
      return id === p.id;
    });
      const person = {...this.state.persons[prsnIndex]};
      person.name = event.target.value;
      const persons = [...this.state.persons];
      persons[prsnIndex] =person;
      this.setState({persons: persons});
  }

  // userNameHandler = (event)=> {
  //   this.setState({
  //     userName: event.target.value
  //   });
  // }

  personDeleteHandler(personIndex) {
    // const persons = this.state.persons.slice(); creating a copy of the list before updating it.
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  }

  render() { 
let persons = null;
if(this.state.showPersons) {
  persons = (<div>
    {this.state.persons.map((i, index) => {
      return <ErrorBoundary  key={i.id}><Person changed= {(event) => this.nameChangedHandler(event,i.id)} click={() => this.personDeleteHandler(index)} name={i.name} age={i.age}></Person></ErrorBoundary>
    })}
    {/* <Person name={this.state.persons[0].name} age= {this.state.persons[0].age}></Person>
    <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click = {() => this.switchNameHandler('Fab!')}>Hobbies: Eating</Person>
    <Person name={this.state.persons[2].name} age= {this.state.persons[2].age} changed={this.nameChangedHandler}></Person>    */}
</div>);
}

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
      <button style = {style} onClick={this.onToggleHandler}>Toggle Persons</button>
      {persons}
      {/* <button style = {style} onClick={this.switchNameHandler.bind(this, 'Awesomeness!!!')}>Switch Names</button> */}
      {/* <UserOutput name= {this.state.userName}></UserOutput>
      <UserOutput name= {this.state.userName}></UserOutput>
      <UserInput userNameChanged={this.userNameHandler} currentName={this.state.userName}/> */}
    </div>
  );}
 
}

export default App;
