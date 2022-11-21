const fontList = require('font-list');
const list = require('./list');

module.exports = async () => {
	const fonts = await fontList.getFonts();
	list({items: fonts.map(font => font.replace(/"/g, ''))});
};
