import { createConfig } from "@umijs/test";
import type { Config } from "@umijs/test";

export default {
  ...createConfig(),
  testMatch: ["<rootDir>/packages/*/src/**/*.test.ts"],
  modulePathIgnorePatterns: [
    "<rootDir>/packages/.+/compiled",
    "<rootDir>/packages/.+/fixtures",
  ],
  transformIgnorePatterns: ["/node_modules/", "/compiled/"],
  collectCoverageFrom: ["**/src/**/*.{ts,tsx}"],
} as Config.InitialOptions;
