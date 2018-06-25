import React, { Component } from 'react';
import Menu from './TopMenu/Menu';
import Primary from './Primary';
import '../styles/App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      sideDrawerOpen: false
    }
  }
  render() {
    return (
      <div className="App">
        
        <Menu didSpin={this.state.sideDrawerOpen} />
        <main>
          <Primary />
        </main>
      
      </div>
    );
  }
}

export default App;
