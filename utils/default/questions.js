const ask = require('./ask');

module.exports = async () => {
	const input = await ask({
		name: 'input',
		message: `输入文件名`,
		initial: `input.json`
	});

	// vars
	const vars = {
		input
	};

	return vars;
};
