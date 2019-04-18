const presets = [
	['@babel/env', {
		targets: {
			esmodules: true
		},
		corejs: 3,
		useBuiltIns: 'usage'
	}]
];

module.exports = {presets};
