const fontList = require('font-list');
const list = require('./list');

module.exports = () => {
	fontList
		.getFonts()
		.then(fonts => {
			list({items: fonts.map(font => font.replace(/"/g, ''))});
		})
		.catch(err => {
			console.log(err);
		});
};
