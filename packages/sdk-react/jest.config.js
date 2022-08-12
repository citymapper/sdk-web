/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/jest/setupJest.ts'],
  testPathIgnorePatterns: ['dist'],
  snapshotSerializers: ['@emotion/jest/serializer'],
}
