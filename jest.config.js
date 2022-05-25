module.exports = {
  preset: '@testing-library/react-native',
  setupFiles: ['./utils/setupJestMock.js'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  // The root of your source code, typically /src
  // `<rootDir>` is a token Jest substitutes
  roots: ['<rootDir>/src'],
  // Jest transformations -- this adds support for TypeScript
  // using ts-jest
  transform: {
    '^.+\\.tsx?': 'ts-jest',
  },
  // Test spec file resolution pattern
  // Matches parent folder `__tests__` and filename
  // should contain `test` or `spec`.
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  // Ignore
  testPathIgnorePatterns: ['/node_modules/'],
  // Module file extensions for importing
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
};
