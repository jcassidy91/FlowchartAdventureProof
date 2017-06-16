import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Snackbar from 'material-ui/Snackbar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';
import Slider from 'material-ui/Slider';
import Checkbox from 'material-ui/Checkbox';

import CourseDisplay from './CourseDisplay.js';
import './App.css';
import Game from './Game.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "MVCode Adventure!",
      snackbar: false,
      lessonList: true,
      waitForTimeOut: false,
      lessonInfo: {},
      HUDColor: "rgb(218,35,35)",
      drawWalls: false,
      drawMousePos: false,
      studentRank: 0,
      placeWalls: false,
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
    this.setState({placeWalls: !this.state.placeWalls});
  }

  toggleDrawWalls() {
    this.setState({drawWalls: !this.state.drawWalls});
  }

  toggleMousePos() {
    this.setState({drawMousePos: !this.state.drawMousePos});
  }

  updateColor(color) {
    this.setState({HUDColor: color});
  }

  updateRank(rank) {
    this.setState({studentRank: rank});
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
              backgroundColor:this.state.HUDColor,
            }}
            iconElementLeft={
              <DebugMenu 
                toggleWalls={this.toggleWalls.bind(this)}
                placeWalls = {this.state.placeWalls}
                toggleDrawWalls={this.toggleDrawWalls.bind(this)}
                drawWalls={this.state.drawWalls}
                toggleMousePos={this.toggleMousePos.bind(this)}
                showMouse={this.state.drawMousePos}
                updateColor={this.updateColor.bind(this)}
                updateRank={this.updateRank.bind(this)}
                studentRank={this.state.studentRank}
              />
            }
          />
          <CourseDisplay 
            info = {this.state.lessonInfo} 
            open = {this.state.lessonList} 
            toggleLessonList={this.toggleLessonList.bind(this)}
            backgroundColor= {this.state.HUDColor}
          />
          <Game 
            drawMousePos = {this.state.drawMousePos}
            placeWalls = {this.state.placeWalls}
            drawWalls = {this.state.drawWalls} 
            setTitle={this.setTitle.bind(this)} 
            toggleLessonList = {this.toggleLessonList.bind(this)}
          />

          <Snackbar
            open={this.state.snackbar}
            message={this.state.title}
            autoHideDuration={2000}
            onRequestClose={this.handleRequestClose.bind(this)}
            bodyStyle={{
              position: "relative",
              backgroundColor: this.state.HUDColor,
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
    touchTapCloseDelay = {0}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'middle', vertical: 'top'}}
    anchorOrigin={{horizontal: 'middle', vertical: 'bottom'}}
  >
    <MenuItem onClick={props.toggleWalls}>
      <Checkbox 
        label="Wall Collision" 
        labelPosition="left" 
        checked={props.placeWalls} 
      />
    </MenuItem>
    <MenuItem onClick={props.toggleDrawWalls}>
      <Checkbox 
        label="Show Colliders" 
        labelPosition="left" 
        checked={props.drawWalls}
      />
    </MenuItem>
    <MenuItem onClick={props.toggleMousePos}>
      <Checkbox 
        label="Show Mouse Position" 
        labelPosition="left" 
        checked={props.showMouse}
      />
    </MenuItem>
    <MenuItem>
      Color Settings:
      {showColorSettings(props.updateColor, props.studentRank)}
    </MenuItem>
    <MenuItem>
      Rank: {getRankName(props.studentRank)}
      <Slider step = {0.25} max={0.75} defaultValue = {props.studentRank/4} onChange={(event,value)=> {props.updateRank(value*4)}}/>
    </MenuItem>
  </IconMenu>
)

const showColorSettings = (updateColor, studentRank) => {
  function handleClick(color) {
    updateColor(color);
  }
  const list = colorList(studentRank).map((e,index) => {
    if (e.req) {
      return (
        <button className="colorBox" onClick={() => {handleClick(e.color)}} style={{backgroundColor: e.color}}></button>
      )
    } 
  })
  return (
    <div>
      {list}
    </div>
  )
}

const colorList = (studentRank) => {
  return (
    [{
      req: (studentRank >= 0),
      color: "rgb(218,35,35)"
    },
    {
      req: (studentRank >= 1),
      color: "rgb(25,200,25)"
    },
    {
      req: (studentRank >= 2),
      color: "rgb(255,150,0)"
    },
    {
      req: (studentRank >= 2),
      color: "rgb(11,136,210)"
    },
    {
      req: (studentRank >= 3),
      color: "rgb(180,20,220)"
    },
    {
      req: (studentRank >= 3),
      color: "rgb(50,50,50)"
    }]
  )
}

const getRankName = (rank) => {
  switch(rank) {
    case 0:
      return "Neophyte";
    case 1:
      return "Hacker";
    case 2:
      return "Coder";
    case 3:
      return "Developer";
    default:
      return "Rank is somehow: " + rank
  }
}