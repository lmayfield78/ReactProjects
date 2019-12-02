import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'item1', name: 'Larnz', age: 23 },
      { id: 'item2', name: 'horse', age: 33 },
      { id: 'item3', name: 'JimJam', age: 26 }
    ],
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    //const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});

  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(
      p => {return p.id=== id}
    );

    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }


  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            click = {() => this.deletePersonHandler(index)}
            name = {person.name} 
            age = {person.age}
            key = {person.id}
            changed ={(event) => this.nameChangeHandler(event, person.id)}
            />
          })}
        </div>);
    }


    return (
      <div className="App">
        <h1>Hi, You are cool bro!!!</h1>
        <p>I love you man!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );

    // return React.createElement('div', {className:'App'}, React.createElement('h1',null, 'Hi, You are cool brosky'))
  }
}

export default App;
