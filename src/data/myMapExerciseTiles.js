import Exercises from './Exercises';

const exerciseTiles = [
{
		name: "WhileLoops2",
		xpos: 1100,
		ypos: 932,
		width: 50,
		height: 50
	},
	{
		name: "DrawingChallenge4",
		xpos: 971,
		ypos: 277,
		width: 50,
		height: 50
	}
].map((tile) => {
	tile.info = Exercises[tile.name];
	return tile;
})

export default exerciseTiles;