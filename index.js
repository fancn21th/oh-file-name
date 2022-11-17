#!/usr/bin/env node

/**
 * oh-file-name
 * translate chinese names into english file names
 *
 * @author fan, yi-jie <fancn21th.cn>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');

// custom command
const cmdDefault = require('./utils/cmd-default');
const cmdFont = require('./utils/cmd-font');

const input = cli.input;
const flags = cli.flags;
const {clear, debug} = flags;

(async () => {
	init({clear});

	input.includes(`help`) && cli.showHelp(0);

	debug && log(flags);

	// magic comes below
	input.includes(`font`) && cmdFont();

	await cmdDefault();
})();
