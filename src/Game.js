import React, {Component} from 'react';
import Courses from './data/Courses';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';

const myImage = new Image();
myImage.src = require('./images/characterSheet.png');
const mapImage = new Image();
mapImage.src = require('./images/adventureTimeMap.png');

var courseTiles = [
	{
		name: "javaScriptGameDesign",
		xpos: 1505,
		ypos: 600,
		width: 50,
		height: 50
	},
	{
		name: "javaScriptGameEngine",
		xpos: 2110,
		ypos: 720,
		width: 50,
		height: 50
	},
	{
		name: "IntroToWeb",
		xpos: 830,
		ypos: 770,
		width: 50,
		height: 50
	},
]

var ExerciseTiles = [
{
		name: "DrawingChallenge2",
		xpos: 1262,
		ypos: 825,
		width: 50,
		height: 50,
		difficulty: 1
	},
	{
		name: "WhileLoops2",
		xpos: 1384,
		ypos: 639,
		width: 50,
		height: 50,
		difficulty: 2
	}
]

var ctx;
var mouseX = 0;
var mouseY = 0;
const locations = ["Object Castle", "Forest Array", "Logic Mounds"];
var currentLocation = "";

class Game extends Component {
	constructor() {
		super();
		this.state = {
			register: {
				ArrowLeft: 0,
				ArrowRight: 0,
				ArrowUp: 0,
				ArrowDown: 0
			},
			x:0,
			y:0,
			camx:0,
			camy:0,
			animIndex: 0,
			imageDir: 3,
		};
		this.tick = this.tick.bind(this);
		this.init = this.init.bind(this);
	}

	componentDidMount() {
		document.addEventListener("keydown", this.handleKeyDown.bind(this), false);
		document.addEventListener("keyup", this.handleKeyUp.bind(this), false);
		document.addEventListener("mousemove", this.handleMouseMove.bind(this),false);
		requestAnimationFrame(this.init);
	}

	componentWillUnmount() {
		document.removeEventListener("keydown", this.handleKeyDown, false);
		document.removeEventListener("keyup", this.handleKeyDown, false);
		document.removeEventListener("mousemove", this.handleMouseMove,false);
	}

	handleMouseMove(e) {
		const rect = this.refs.canvas.getBoundingClientRect();
		mouseX = e.clientX - rect.left + this.state.camx;
		mouseY = e.clientY - rect.top + this.state.camy;
	}

	handleKeyDown(e) {
		this.setState((oldState) => {
			oldState.register[e.key] = 1;
		});
		e.preventDefault();
	};

	handleKeyUp(e) {
		this.setState((oldState) => {oldState.register[e.key] = 0;});
		e.preventDefault();
	}

	init() {
		ctx = this.refs.canvas.getContext('2d');

		this.setState({
			x:1442,
			y:1000,
			camx:1442-this.refs.canvas.width/2 + 32,
			camy:1000-this.refs.canvas.height/2
		})

		requestAnimationFrame(this.tick);
	}

	tick() {

		this.checkNewLocation();

		this.movePlayer();
		this.moveCamera();

		this.drawBackground();
		this.drawTiles();
        this.drawPlayer();


        ctx.font = '32px Roboto'
        ctx.fillText('(' + mouseX + ',' + mouseY + ')', 50, 50);

		requestAnimationFrame(this.tick);
	}

	checkNewLocation() {
		if (this.state.x < 930 && currentLocation !== "Web Valley"){
			this.props.setTitle("Web Valley");
			currentLocation = "Web Valley";
		}
		if (this.state.x > 1000 && this.state.x < 1980 && currentLocation !== "JavaScript Kingdom"){
			this.props.setTitle("JavaScript Kingdom");
			currentLocation = "JavaScript Kingdom";
		}
		if (this.state.x > 2050 && currentLocation !== "Unity Forest"){
			this.props.setTitle("Unity Forest");
			currentLocation = "Unity Forest";
		}
	}

	drawTiles() {
		
		const offx = this.state.camx;
		const offy = this.state.camy;

		let check = false;
		ctx.fillStyle = "rgb(0,0,255";
		courseTiles.forEach((tile) => {
			ctx.fillRect(tile.xpos-offx,tile.ypos-offy,tile.width,tile.height);

			if(this.collision(tile)) {
				if (this.state.register['e']) {
		        	this.props.toggleLessonList(Courses[tile.name],true);
		        }
		        check = true;
			}
		})
		ctx.fillStyle = "rgb(255,0,0";
		ExerciseTiles.forEach((tile) => {
			ctx.fillRect(tile.xpos-offx,tile.ypos-offy,tile.width,tile.height);
		})

		if (!check) {
			this.props.toggleLessonList(null,false);
		}
	}

	collision(tile) {
		const obj1 = {x: this.state.x, y: this.state.y, w:64, h:64};
		const obj2 = {x: tile.xpos, y: tile.ypos, w:tile.width, h:tile.height};

		if (obj1.x + obj1.w > obj2.x &&
		    obj1.x < obj2.x + obj2.w &&
		    obj1.y + obj1.h > obj2.y &&
		    obj1.y < obj2.y + obj2.h) {
			console.log("collision!")
			return true;
		} else {
			return false;
		}
	}

	drawPlayer() {
		const animSpeed = 40;
        const sx = Math.floor((this.state.animIndex % animSpeed) / (animSpeed/4))*64;
		ctx.drawImage(myImage,sx,this.state.imageDir*64,64,64,this.state.x-this.state.camx,this.state.y-this.state.camy,64,64);
	}

	moveCamera() {
		const sw = this.refs.canvas.width;
		const sh = this.refs.canvas.height;
		const bounds = {x:sw*.3,y:sh*.3};
		this.setState((o) => {

			const localx = this.state.x - this.state.camx;
			const localy = this.state.y - this.state.camy;

			if(localx > sw-bounds.x-32) {
				o.camx = this.state.x - sw + bounds.x + 32;
			}
			if(localx < bounds.x) {
				o.camx = this.state.x - bounds.x;
			}

			if(localy > sh-bounds.y-64) {
				o.camy = this.state.y - sh + bounds.y+64;
			}
			if(localy < bounds.y) {
				o.camy = this.state.y - bounds.y;
			}

			if (localx > sw-bounds.x-96 && o.register['ArrowRight'] === 0) {
				o.camx += Math.min(3, localx - (sw-bounds.x-96));
			}
			if (localx < bounds.x+64 && o.register['ArrowLeft'] === 0) {
				o.camx -= Math.min(3,localx - bounds.x+64);;
			}

			if (localy > sh-bounds.y-128 && o.register['ArrowDown'] === 0) {
				o.camy += Math.min(3, localy - (sh-bounds.y-128));
			}
			if (localy < bounds.y+64 && o.register['ArrowUp'] === 0) {
				o.camy -= Math.min(3,localy - bounds.y+64);;
			}

			o.camx = Math.min(Math.max(0,o.camx),3200-sw);
			o.camy = Math.min(Math.max(0,o.camy),1800-sh);
		})
	}

	movePlayer() {
		this.setState((o) => {
			
			const hdir = o.register['ArrowRight'] - o.register['ArrowLeft'];
			const vdir = o.register['ArrowDown'] - o.register['ArrowUp'];
			const speed = (hdir !== 0 && vdir !== 0)?(3 * Math.sin(Math.PI/4)):3;
			o.x += hdir*speed;
			o.y += vdir*speed;

			if (hdir !== 0 || vdir !== 0) {
				o.animIndex++;
			}else{
				o.animIndex=9;
			}

			o.imageDir = getImageDir(hdir,vdir,o.imageDir);
		});
	}

	drawBackground() {
		ctx.drawImage(mapImage,0-this.state.camx,0-this.state.camy);
	}

	render() {
		const style = {
			borderWidth: 1, 
			borderStyle: 'solid', 
			position: "relative"
		}
		const width = Math.max(window.innerWidth*.8,640);
		const height = Math.max(window.innerHeight - 100,380);
		return (
			<div>
			    <canvas ref="canvas" width={width} height={height} style={style}/>
		    </div>
		);
	}
};

export default Game

const getImageDir = function(h,v,last) {
	if (v === -1) {
		return 3;
	} else if (v === 1) {
		return 0;
	} else if (h === 1) {
		return 2;
	} else if (h === -1) {
		return 1;
	} else {
		return last;
	}
}