import React, { Component } from 'react';
import Menu from './TopMenu/Menu';
import SideDrawer from './SideDrawer/SideDrawer';
import SiteCover from './SiteCover';
import Primary from './Primary';
import '../styles/App.css';

class App extends Component {
  state = {
    isDrawerOpen: false
  }

  drawerToggleClickHandler = () => {
    this.setState( (prev) => ({isDrawerOpen: !prev.isDrawerOpen}) );
  }

  clearOverlays = () => {
    this.setState({isDrawerOpen:false});
  }
  
  render() {
    return (
      <div className="App">
        <Menu isDrawerOpen={this.state.isDrawerOpen} toggleDrawer={this.drawerToggleClickHandler} />
        
        <SideDrawer show={this.state.isDrawerOpen}/>;
        { this.state.isDrawerOpen && <SiteCover clickAction={this.clearOverlays} /> }
        
        
        <main>
          <Primary />
        </main>
      </div>
    );
  }
}

export default App;
