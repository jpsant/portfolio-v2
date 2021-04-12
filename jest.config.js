module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  modulePathIgnorePatterns: ['<rootDir>/src/pages'],
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/tests/__mocks__/fileMock.js',
    '~src/(.*)': '<rootDir>/src/$1',
    '~components/(.*)': '<rootDir>/src/components/$1',
    '~assets/(.*)': '<rootDir>/src/assets/$1',
    '~animations/(.*)': '<rootDir>/src/assets/animations/$1',
    '~atoms/(.*)': '<rootDir>/src/components/atoms/$1',
    '~molecules/(.*)': '<rootDir>/src/components/molecules/$1',
    '~organisms/(.*)': '<rootDir>/src/components/organisms/$1',
    '~templates/(.*)': '<rootDir>/src/components/templates/$1',
    '~pages/(.*)': '<rootDir>/src/pages/$1'
  },
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)?'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  testMatch: ['**/*/*.test.tsx', '**/tests/*/*/*.test.tsx', '**/tests/*/*/*/*.test.tsx'],
  verbose: false
};
