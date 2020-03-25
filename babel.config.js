const presets = [
	['@babel/env', {
		targets: {
			esmodules: true
		},
		corejs: '3.6',
		useBuiltIns: 'usage',
		bugfixes: true
	}]
];

module.exports = {presets};
