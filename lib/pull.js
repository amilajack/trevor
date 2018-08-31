'use strict';

const exec = require('execa');

module.exports = context => {
	const image = `node:8-onbuild`;

	return exec('docker', ['pull', image]).then(() => context);
};
