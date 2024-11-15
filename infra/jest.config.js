/* eslint-disable */
module.exports = {
  displayName: 'infra',
  preset: '../jest.preset.js',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../coverage/infra',
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
};