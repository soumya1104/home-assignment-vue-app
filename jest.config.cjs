
module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\.js$': 'babel-jest'
  },
  transformIgnorePatterns: [
    '/node_modules/'
  ],
  moduleFileExtensions: ['js', 'json', 'vue'],
  testMatch: ['**/__tests__/**/*.spec.js'],
  moduleNameMapper: {
    "^@vue/test-utils": "<rootDir>/node_modules/@vue/test-utils/dist/vue-test-utils.cjs.js",
    '^@/(.*)$': '<rootDir>/src/$1',
    '^d3$': '<rootDir>/node_modules/d3/dist/d3.min.js',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
};
