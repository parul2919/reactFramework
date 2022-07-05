module.exports = {
  verbose: true,
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["./jest.setup.js"],
  collectCoverage: true,
  collectCoverageFrom: ["./src/**/*.{js, jsx}"],
  coverageDirectory: "coverage",
  coverageReporters: ["lcov", "text", "html"],
  testRegex: "./*.test.js$",
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 20,
    },
  },
  modulePathIgnorePatterns: [
    "<rootDir>/src/common",
    "<rootDir>/src/components/atom",
    "<rootDir>/src/mockApi",
  ],
  moduleDirectories: ["src", "node_modules"],
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$",
    "^.+\\.module\\.(css|sass|scss)$",
    "^.+\\.module\\.(stye.js)$",
  ],
  modulePaths: [],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/_mocks_/fileMock.js",
    // "\\.(css)$": "identity-obj-proxy",
  },
};
