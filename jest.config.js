module.exports = {
	roots: ['<rootDir>'],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
	testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
	transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
	transform: {
		'^.+\\.(ts|tsx)$': 'babel-jest',
	},
	moduleNameMapper: {
		'\\.(gif|ttf|eot|svg|png|webp|jpg)$': '<rootDir>/test/__mocks__/fileMock.js',
		"^@app(.*)$": "<rootDir>/src$1",
	},
};
