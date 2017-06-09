import Exercises from './Exercises';

const exerciseTiles = [
{
		name: "WhileLoops2",
		xpos: 1262,
		ypos: 825,
		width: 50,
		height: 50
	},
	{
		name: "DrawingChallenge4",
		xpos: 1384,
		ypos: 639,
		width: 50,
		height: 50
	}
].map((tile) => {
	tile.info = Exercises[tile.name];
	return tile;
})

export default exerciseTiles;