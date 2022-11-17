const fs = require('fs');
const {Input} = require('enquirer');
const to = require('await-to-js').default;
const handleError = require('cli-handle-error');
const shouldCancel = require('cli-should-cancel');

module.exports = async ({name, message, hint, initial}) => {
	const [err, response] = await to(
		new Input({
			message,
			hint,
			initial,
			validate(value, state) {
				if (state && name === 'input') {
					if (!fs.existsSync(value)) {
						return `文件不存在: ./${value}`;
					}
					return true;
				}
				return !value ? `输入有效的文件名` : true;
			}
		})
			.on('cancel', () => {
				shouldCancel();
			})
			.run()
	);

	handleError(`INPUT`, err);

	return response;
};
