import Courses from './Courses';

const courseTiles = [
	{
		name: "javaScriptGameDesign",
		xpos: 1505,
		ypos: 600,
		width: 50,
		height: 50
	},
	{
		name: "javaScriptGameDesign",
		xpos: 807,
		ypos: 257,
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
].map((tile) => {
	tile.info = Courses[tile.name];
	return tile;
})

export default courseTiles;