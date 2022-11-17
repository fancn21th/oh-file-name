var blessed = require('blessed');

module.exports = ({items}) => {
	// Create a screen object.
	var screen = blessed.screen({
		smartCSR: true
	});

	screen.title = 'oh file name';

	// Create a box perfectly centered horizontally and vertically.
	var box = blessed.List({
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

	// If our box is clicked, change the content.
	box.on('down', function (data) {
		box.down(1);
	});

	// Quit on Escape, q, or Control-C.
	screen.key(['escape', 'q', 'C-c'], function (ch, key) {
		return process.exit(0);
	});

	screen.render();
};
