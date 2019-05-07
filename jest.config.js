module.exports = {
  clearMocks: true,
  coverageDirectory: "coverage",
  coverageReporters: ["json", "lcov", "text", "clover"],
  moduleDirectories: ["node_modules"],
  moduleFileExtensions: ["js", "json", "jsx"],
  moduleNameMapper: {
    ".+.(css|sass|less|styl|scss|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub"
  },
  setupFilesAfterEnv: ["<rootDir>/enzymeSetup.js"],
  transform: {
    "^.+\\.js?$": "babel-jest",
    ".+\\.(css|sass|less|styl|scss|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub"
  },
  transformIgnorePatterns: ["/node_modules/"],
  verbose: true
};
