import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserName from './UserOutput/UserOutput';

class App extends Component {
  
state = {
  username: "Horsie"
}

usernameSwitchHandler = (event) => {
  this.setState({username: event.target.value})
}
  

  render() {
    return (
      <div className="App">
        <UserInput
        changed={this.usernameSwitchHandler}
        currentUsername={this.state.username}
        />
        <UserName username={this.state.username}/>
        <UserName username="Ronnie"/>
       
      </div>
    );
  }
}

export default App;
