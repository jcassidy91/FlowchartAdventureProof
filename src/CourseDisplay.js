import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import MenuItem from 'material-ui/MenuItem';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class CourseDisplay extends Component {
	getTitle() {
		if (this.props.info) {
			return this.props.info.platform
		}
	}
	getImage() {
		if (this.props.info) {
			return (
				<img src = {this.props.info.image} width='90%' style={{marginTop:"12px",marginBottom:"12px"}} alt=""/>
			)
		} else {
			return <div/>
		}
	}
	getLessons() {
		if (this.props.info && this.props.info.lessons) {
			
			return(
				<div>
				{
	            	this.props.info.lessons.map((lesson,i) => 
	            		<MenuItem key={i}> {lesson} </MenuItem>
		            )
		        }
		        </div>
			)
		} else {
			return <div>{}</div>;
		}
	}
	render() {
		return(
			<div>
				<Drawer
		            open={this.props.open}
		            openSecondary={true}
		            width={350}
		          >
		            <div>
		              <AppBar 
		                title={this.getTitle()}
		                iconElementLeft={<IconButton><NavigationClose onClick={()=>this.props.toggleLessonList(null,false)}/></IconButton>}
		                style={{
		                  backgroundColor:"rgb(218,35,35)",
		                  color:"rgb(255,255,255)",
		                  margin: "0px",
		                  fontSize:"24px"
		                }}
		              />
		              {this.getImage()}
		            </div>


		            {this.getLessons()}

		         </Drawer>
	         </div>
		)
	}
}

export default CourseDisplay;