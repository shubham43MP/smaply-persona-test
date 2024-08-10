// https://dev.to/teyim/effortless-testing-setup-for-react-with-vite-typescript-jest-and-react-testing-library-1c48

export default {
    testEnvironment: "jsdom",
    transform: {
      "^.+\\.tsx?$": "ts-jest",
    },
  
    moduleNameMapper: {
      "\\.(css|less|sass|scss)$": "identity-obj-proxy",
      "^.+\\.svg$": "jest-transformer-svg",
      "^@/(.*)$": "<rootDir>/src/$1",
    },
  
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
    globals: {
    "ts-jest": {
      tsConfig: "tsconfig.app.json"
    },
    coverageThreshold: {
      global: {
          branches: 60,
          functions: 80,
          lines: 80,
          statements: 80
      }
    },
    collectCoverageFrom: [
     '<rootDir>/src/**/*.{tsx}',
    ],
    coveragePathIgnorePatterns: [
      "node_modules",
      "test-config",
      "interfaces",
      "jestGlobalMocks.ts",
      ".module.ts",
      "<rootDir>/src/app/main.ts",
      ".mock.ts",
      "<rootDir>/src/**/*(index|types).{ts}"
    ],
    modulePathIgnorePatterns: [
      "node_modules",
      "<rootDir>/src/**/*(index|types).{ts}"
    ],
  }
  };