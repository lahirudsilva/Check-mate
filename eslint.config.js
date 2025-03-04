import { defineConfig } from 'eslint-define-config';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import typescriptEslintParser from '@typescript-eslint/parser';

export default defineConfig([
  {
    languageOptions: {
      globals: {
        // Define any global variables if needed
      },
      parser: typescriptEslintParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslintPlugin,
    },
    rules: {
      'no-undef': 'off',
      'no-unused-vars': 'warn',
      'getter-return': 'off',
      'no-empty': 'off',
      'no-console': 'off',
      'no-constant-condition': 'off',
      'no-prototype-builtins': 'off',
      'no-cond-assign': 'off',
      'no-constant-binary-expression': 'off',
    },
  },
  {
    files: ['*.ts', '*.tsx'],
    rules: {
      // TypeScript-specific rules here
    }
  }
]);
