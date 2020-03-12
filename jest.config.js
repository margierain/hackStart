module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  transform: {
    '\\.(ts|tsx)$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.jest.json',
      babelConfig: false,
    },
  },
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/dist/**',
    '!**/.out/**',
    '!**/.next/**',
    '!src/**/*.stories.{ts,tsx}',
  ],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  coverageDirectory: '<rootDir>/coverage-report',
  transformIgnorePatterns: ['<rootDir>/node_modules'],
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx'],
  moduleNameMapper: {
    '^[@./a-zA-Z0-9$_-]+\\.(png|jpg|gif)$': 'RelativeImageStub',
  },
  moduleDirectories: ['node_modules', '.'],
};
