// module.exports = {
//   testEnvironment: "jsdom",
// };

/** @type {import('jest').Config} */
const config = {
  verbose: true,
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"]
};

module.exports = config;