import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),
  {
    plugins: ["check-file", "n"],
    rules: {
      "node/prefer-global/process": ["off"],
      "node/no-process-env": ["error"],
      "prefer-arrow-callback": ["error"],
      "prefer-template": ["error"],
      "check-file/filename-naming-convention": [
        "error",
        {
          convention: "kebab-case",
          allowed: ["^[a-z0-9]+$", "^[a-z0-9]+-[a-z0-9]+$"],
          forbidden: ["^[A-Z]+$", "^[A-Z]+-[A-Z]+$"],
        },
      ],
      "check-file/folder-naming-convention": [
        "error",
        {
          convention: "kebab-case",
        },
      ],
    },
  },
];

export default eslintConfig;
