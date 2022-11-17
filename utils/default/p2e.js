const pinyin = require('pinyin');
const changeCase = require('change-case');

const config = {
	style: pinyin.STYLE_FIRST_LETTER, // 设置拼音风格
	heteronym: false // 启用多音字模式
};

module.exports = function (pinins, options) {
	return pinins.reduce((acc, pin) => {
		const eng = pinyin(pin, config);
		const arr = [options.prefix, ...eng, options.suffix];
		const ori = arr.flat().join(' ');
		acc[pin] = {english: eng.flat().join(''), engWithFix: changeCase[options.style](ori)};
		return acc;
	}, {});
};
