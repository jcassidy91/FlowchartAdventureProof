import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Snackbar from 'material-ui/Snackbar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';

import CourseDisplay from './CourseDisplay.js'
import './App.css';
import Game from './Game.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "MVCode Adventure!",
      snackbar: false,
      lessonList: true,
      waitForTimeOut: false,
      lessonInfo: {},
    }
  }

  setTitle(title) {
    this.setState(
      {
        title: title,
        snackbar: true
      }
    );
  }

  handleRequestClose() {
    this.setState({
      snackbar: false,
    });
  }

  toggleWalls() {
    this.setState({drawWalls: !this.state.drawWalls});
  }

  toggleLessonList(info,open) {
    if (!this.state.waitForTimeOut) {
      this.setState({
        lessonList: open,
        waitForTimeOut: true,
        lessonInfo: info
      });
      setTimeout(()=>{this.setState({waitForTimeOut:false})},250);
    }
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
            iconElementLeft={<DebugMenu toggleWalls={this.toggleWalls.bind(this)}/>}
          />
          <CourseDisplay info = {this.state.lessonInfo} open = {this.state.lessonList} toggleLessonList={this.toggleLessonList.bind(this)}/>
          <Game drawWalls = {this.state.drawWalls} setTitle={this.setTitle.bind(this)} toggleLessonList = {this.toggleLessonList.bind(this)}/>

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

const DebugMenu = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Show Colliders" onClick={props.toggleWalls}/>
  </IconMenu>
)

