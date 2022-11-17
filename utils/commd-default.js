const fs = require('fs');
const path = require('path');
const questions = require('./default/questions');

module.exports = async () => {
	const {input} = await questions();

	const filePath = path.join(process.cwd(), input);

	const json = JSON.parse(fs.readFileSync(filePath, 'utf8'));

	console.log({json});
};
