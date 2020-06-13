module.exports = {
  roots: ['<rootDir>'],
  collectCoverageFrom: ['**/**/*.+(js|jsx|ts|tsx)'],
  coverageThreshold: {
    global: {
      statements: 70,
      branches: 40,
      functions: 50,
      lines: 70,
    },
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  projects: [
    {
      displayName: 'test',
      preset: 'ts-jest',
      transform: {
        '^.+\\.[jt]sx?$': '<rootDir>/jest-preprocess.js',
      },
      moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
      moduleNameMapper: {
        '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
        '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
          '<rootDir>/__mocks__/file-mock.ts',
        '^@atoms(.*)$': '<rootDir>/components/atoms$1',
        '^@molecules(.*)$': '<rootDir>/components/molecules$1',
        '^@organisms(.*)$': '<rootDir>/components/organisms$1',
        '^@templates(.*)$': '<rootDir>/components/templates$1',
        '^@assets(.*)$': '<rootDir>/assets$1',
        '^@utils(.*)$': '<rootDir>/utils$1',
      },
      testEnvironment: 'jest-environment-jsdom',
      setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
      testPathIgnorePatterns: ['node_modules', '.cache', 'public', 'cypress'],
      transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
      globals: {
        __PATH_PREFIX__: '',
      },
      testURL: 'http://localhost',
    },
    {
      displayName: 'lint',
      runner: 'jest-runner-eslint',
      testMatch: ['<rootDir>/**/*.+(js|tsx)'],
      testPathIgnorePatterns: ['node_modules', '.cache', 'public', 'cypress'],
    },
  ],
};
