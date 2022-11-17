const fs = require('fs');
const path = require('path');
const questions = require('./default/questions');
const p2e = require('./default/p2e');

module.exports = async () => {
	const {input} = await questions();

	const filePath = path.join(process.cwd(), input);

	const pinins = JSON.parse(fs.readFileSync(filePath, 'utf8'));

	const translated = p2e(pinins, {
		style: 'camelCase',
		prefix: 'prefix',
		suffix: 'suffix'
	});

	console.log({translated});
};
