import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Snackbar from 'material-ui/Snackbar';
import Drawer from 'material-ui/Drawer';
import './App.css';
import Game from './Game.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "MVCode Adventure!",
      snackbar: false,
      menu: true
    }
  }

  setTitle(title) {
    this.setState({title});
    this.state.snackbar = true;
  }

  handleRequestClose() {
    this.setState({
      snackbar: false,
    });
  }

  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
        <div>
          <AppBar 
            title={this.state.title}
            style={{
              backgroundColor:"rgb(218,35,35)",
            }}
          />

          <Game setTitle={this.setTitle.bind(this)}/>

          <Snackbar
            open={this.state.snackbar}
            message={this.state.title}
            autoHideDuration={2000}
            onRequestClose={this.handleRequestClose.bind(this)}
            bodyStyle={{
              position:"relative",
              backgroundColor:"rgb(218,35,35)",
            }}
            contentStyle={{
              color:"rgb(250,250,250)",
              fontSize:"24px"
            }}
          />
        </div>
        </MuiThemeProvider>
        
      </div>
    );
  }
}

export default App;
