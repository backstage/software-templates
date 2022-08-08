const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!<rootDir>/src/**/index.ts',
    '!**/*.d.ts',
  ],
  coverageReporters: ['lcov', 'json'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
