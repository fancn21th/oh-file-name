const blessed = require('blessed');
const clearConsole = require('clear-any-console');

module.exports = ({items}) => {
	// Create a screen object.
	const screen = blessed.screen({
		smartCSR: true
	});

	screen.title = 'oh file name';

	// Create a box perfectly centered horizontally and vertically.
	const box = blessed.List({
		top: 'center',
		left: 'center',
		width: '80%',
		height: '80%',
		// content: 'Hello {bold}world{/bold}!',
		tags: true,
		border: {
			type: 'line'
		},
		style: {
			fg: 'white',
			// bg: 'magenta',
			border: {
				fg: '#f0f0f0'
			},
			hover: {
				bg: 'green'
			},
			item: {
				bg: '#000',
				fg: '#FFF'
			},
			selected: {bg: '#FFF', fg: '#000'}
		},
		mouse: true, // enable mouse then screen is scrollable
		keys: true, // enable key then screen is movable
		items
	});

	// Append our box to the screen.
	screen.append(box);

	// Quit on Escape, q, or Control-C.
	screen.key(['escape', 'q', 'C-c'], function (ch, key) {
		return process.exit(0);
	});

	//TODO: some error popup somehow i need to clear them against blessed api instead
	clearConsole();

	// Focus our element.
	box.focus();

	screen.render();
};
