module.exports = {
  preset: '@testing-library/react-native',
  setupFiles: ['./jest-setup.js'],
  "globals": {
    "__DEV__": true
  },
  "transform": {
    "^.+\\.js$": "babel-jest"
  },
  "transformIgnorePatterns": [
    "node_modules/(?!react-native|react-navigation)/"
  ]
};
