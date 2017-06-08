import React, {Component} from 'react';

const myImage = new Image();
myImage.src = require('./images/characterSheet.png');
const mapImage = new Image();
mapImage.src = require('./images/adventureTimeMap.png');

var ctx;
const bounds = 220;
const locations = ["Object Castle", "Forest Array", "Logic Mounds"];

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
			x:1442,
			y:1000,
			camx:1442-320,
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
		requestAnimationFrame(this.init);
	}

	componentWillUnmount() {
		document.removeEventListener("keydown", this.handleKeyDown, false);
		document.removeEventListener("keyup", this.handleKeyDown, false);
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
		this.props.setTitle("boogey");
		ctx = this.refs.canvas.getContext('2d');
		requestAnimationFrame(this.tick);
	}

	tick() {

		this.movePlayer();
		this.moveCamera();
		this.drawBackground();
        this.drawPlayer();

        if (this.state.register['e']) {
        	this.props.setTitle(locations[Math.floor(Math.random() * 2.9)]);
        }

		requestAnimationFrame(this.tick);
	}

	drawPlayer() {
		const animSpeed = 40;
        const sx = Math.floor((this.state.animIndex % animSpeed) / (animSpeed/4))*64;
		ctx.drawImage(myImage,sx,this.state.imageDir*64,64,64,this.state.x-this.state.camx,this.state.y-this.state.camy,64,64);
	}

	moveCamera() {
		this.setState((o) => {
			const localx = this.state.x - this.state.camx;
			const localy = this.state.y - this.state.camy;
			if(localx > 640-bounds) {
				o.camx = Math.min(Math.max(0,this.state.x - 640 + bounds),3200-640);
			}
			if(localx < bounds) {
				o.camx = Math.min(Math.max(0,this.state.x - bounds),3200-640);
			}

			if(localy > 480-bounds) {
				o.camy = Math.min(Math.max(0,this.state.y - 480 + bounds),1800-480);
			}
			if(localy < bounds) {
				o.camy = Math.min(Math.max(0,this.state.y - bounds),1800-480);
			}

			if (localx > 640-bounds-64 && o.register['ArrowRight'] === 0) {
				o.camx += Math.min(3, localx - (640-bounds-64));
			}
			if (localx < bounds+64 && o.register['ArrowLeft'] === 0) {
				o.camx -= Math.min(3,localx - bounds+64);;
			}
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
			marginLeft: "0",
			position: "relative"
		}
		return (
		    <canvas ref="canvas" width={640} height={480} style={style}/>
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