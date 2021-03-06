// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved
// Distributed under MIT License. See LICENSE file in the project root for full license information.
// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'commands/*.js',
    'lib/*.js',
    'util/*.js'
  ],
  testEnvironment: 'node',
  testMatch: ['**/__tests__/*.js'],
  testPathIgnorePatterns: ['/node_modules/', '.eslintrc.js']
};
