const config = {
  'collectCoverageFrom': [
    'src/**/*.{js,jsx,mjs}'
  ],
  'moduleFileExtensions': [
    'web.js',
    'js',
    'json',
    'web.jsx',
    'jsx',
    'node',
    'mjs'
  ],
  'moduleNameMapper': {
    '^react-native$': 'react-native-web'
  },
  'setupFiles': [],
  'testEnvironment': 'node',
  'testMatch': [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,mjs}',
    '<rootDir>/src/**/?(*.)(spec|test).{js,jsx,mjs}'
  ],
  'testURL': 'http://localhost',
  'transform': {
    '^.+\\.(js|jsx|mjs)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|mjs|css|json)$)': '<rootDir>/config/jest/fileTransform.js'
  },
  'transformIgnorePatterns': [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$'
  ]
};

module.exports = config;
