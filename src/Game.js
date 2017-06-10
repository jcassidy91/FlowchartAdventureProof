import React, {Component} from 'react';
import {mapWalls, mapImage} from './data/mapWalls.js';
import courseTiles from './data/courseTiles.js';
import exerciseTiles from './data/exerciseTiles.js';

class Player {
	constructor() {
		this.position= {x:0, y:0},
		this.camera= {x:0, y:0},
		this.sprite=	{
			image: new Image(),
			animIndex: 0,
			imageDir: 3,
		}
		this.sprite.image.src= require('./images/characterSheet.png'),
		this.currentLocation = ""
	}
}

class Input {
	constructor() {
		this.register= {
			ArrowLeft: 0,
			ArrowRight: 0,
			ArrowUp: 0,
			ArrowDown: 0
		}
		this.mouse = {x:0, y:0}
	}
}

var ctx;
var player = new Player();
var input = new Input();

class Game extends Component {
	constructor() {
		super();

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
		input.mouse.x = e.clientX - rect.left + player.camera.x;
		input.mouse.y = e.clientY - rect.top + player.camera.y;
	}

	handleKeyDown(e) {

			input.register[e.key] = 1;

		e.preventDefault();
	};

	handleKeyUp(e) {
		input.register[e.key] = 0;
		e.preventDefault();
	}

	init() {
		ctx = this.refs.canvas.getContext('2d');


			player.position.x=1442,
			player.position.y=1000,
			player.camera.x=1442-this.refs.canvas.width/2 + 32,
			player.camera.y=1000-this.refs.canvas.height/2


		requestAnimationFrame(this.tick);
	}

	tick() {

		this.checkNewLocation();

		
		this.moveCamera();

		this.drawBackground();
		this.drawTiles();
        this.drawPlayer();
this.movePlayer();
        this.drawDebug();

		requestAnimationFrame(this.tick);
	}

	checkNewLocation() {
		if (player.position.x < 930 && player.currentLocation !== "Web Valley"){
			this.props.setTitle("Web Valley");
			player.currentLocation = "Web Valley";
		}
		if (player.position.x > 1000 && player.position.x < 1980 && player.currentLocation !== "JavaScript Kingdom"){
			this.props.setTitle("JavaScript Kingdom");
			player.currentLocation = "JavaScript Kingdom";
		}
		if (player.position.x > 2050 && player.currentLocation !== "Unity Forest"){
			this.props.setTitle("Unity Forest");
			player.currentLocation = "Unity Forest";
		}
	}

	drawTiles() {
		
		
		const offx = player.camera.x;
		const offy = player.camera.y;

		let check = false;
		ctx.fillStyle = "rgb(0,0,255";
		courseTiles.forEach((tile) => {
			ctx.fillRect(tile.xpos-offx,tile.ypos-offy,tile.width,tile.height);

			if(this.collision(tile)) {
				if (input.register['e']) {
		        	this.props.toggleLessonList(tile.info,true);
		        }
		        check = true;
			}
		})
		ctx.fillStyle = "rgb(255,0,0";
		exerciseTiles.forEach((tile) => {
			ctx.fillRect(tile.xpos-offx,tile.ypos-offy,tile.width,tile.height);

			if(this.collision(tile)) {
				if (input.register['e']) {
		        	this.props.toggleLessonList(tile.info,true);
		        }
		        check = true;
			}
		})

		if (!check) {
			this.props.toggleLessonList(null,false);
		}
	}

	collision(tile) {
		const obj1 = {x: player.position.x+8, y: player.position.y+8, w:48, h:48};
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
        const sx = Math.floor((player.sprite.animIndex % animSpeed) / (animSpeed/4))*64;
		ctx.drawImage(player.sprite.image,sx,player.sprite.imageDir*64,64,64,player.position.x-player.camera.x,player.position.y-player.camera.y,64,64);
	}

	moveCamera() {
		const sw = this.refs.canvas.width;
		const sh = this.refs.canvas.height;
		const bounds = {x:sw*.3,y:sh*.3};


			const localx = player.position.x - player.camera.x;
			const localy = player.position.y - player.camera.y;

			if(localx > sw-bounds.x-32) {
				player.camera.x = player.position.x - sw + bounds.x + 32;
			}
			if(localx < bounds.x) {
				player.camera.x = player.position.x - bounds.x;
			}

			if(localy > sh-bounds.y-64) {
				player.camera.y = player.position.y - sh + bounds.y+64;
			}
			if(localy < bounds.y) {
				player.camera.y = player.position.y - bounds.y;
			}

			if (localx > sw-bounds.x-96 && input.register['ArrowRight'] === 0) {
				player.camera.x += Math.min(3, localx - (sw-bounds.x-96));
			}
			if (localx < bounds.x+64 && input.register['ArrowLeft'] === 0) {
				player.camera.x -= Math.min(3,localx - bounds.x+64);;
			}

			if (localy > sh-bounds.y-128 && input.register['ArrowDown'] === 0) {
				player.camera.y += Math.min(3, localy - (sh-bounds.y-128));
			}
			if (localy < bounds.y+64 && input.register['ArrowUp'] === 0) {
				player.camera.y -= Math.min(3,localy - bounds.y+64);;
			}

			player.camera.x = Math.min(Math.max(0,player.camera.x),3200-sw);
			player.camera.y = Math.min(Math.max(0,player.camera.y),1800-sh);

	}

	movePlayer() {

			
			const hdir = input.register['ArrowRight'] - input.register['ArrowLeft'];
			const vdir = input.register['ArrowDown'] - input.register['ArrowUp'];
			const speed = (hdir !== 0 && vdir !== 0)?(3 * Math.sin(Math.PI/4)):3;
			
			if (hdir !== 0 || vdir !== 0) {
				player.sprite.animIndex++;
			}else{
				player.sprite.animIndex=9;
			}

			player.sprite.imageDir = getImageDir(hdir,vdir,player.sprite.imageDir);

			const colliders = mapWalls.filter((e)=>{return Math.hypot(player.position.x-e.xpos,player.position.y-e.ypos) < 96});

			ctx.fillStyle = "rgb(255,200,50)";

			for (let i=speed; i>0; i--) {
				let fail = false;
				colliders.forEach((e)=>{
					ctx.fillRect(e.xpos-player.camera.x,e.ypos-player.camera.y,32,32);
					if (!fail && this.collision({xpos: e.xpos-i*hdir, ypos: e.ypos, width:32, height: 32})) {
						fail = true
					}
				})

				if (!fail) {
					player.position.x+=hdir*i;
					i=0;
				}
			}

			for (let i=speed; i>0; i--) {
				let fail = false;
				colliders.forEach((e)=>{
					if (!fail && this.collision({xpos: e.xpos, ypos: e.ypos-i*vdir, width:32, height: 32})) {
						fail = true
					}
				})

				if (!fail) {
					player.position.y+=vdir*i;
					i=0;
				}
			}

	}

	drawBackground() {
		ctx.drawImage(mapImage,0-player.camera.x,0-player.camera.y);
	}

	drawDebug() {
		const offx = player.camera.x;
		const offy = player.camera.y;

		//DrawWalls
		ctx.fillStyle = "rgb(255,200,50)"
		if (this.props.drawWalls) {
			mapWalls.forEach((e)=>{
				ctx.fillRect(e.xpos-offx,e.ypos-offy,32,32);
			})
		}

		//Draw Mouse Position
		ctx.font = '32px Roboto'
		ctx.fillStyle = "rgb(255,255,255)"
        ctx.fillText('(' + input.mouse.x + ',' + input.mouse.y + ')', 50, 50);
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

