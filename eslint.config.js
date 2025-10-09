import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import pluginQuery from '@tanstack/eslint-plugin-query';

/** @type {import('eslint').FlatConfig[]} */
export default [
  {
    files: ['src/**/*.ts'],
    ignores: ['**/*.config.js', '!**/eslint.config.js', 'dist'],
  },
  {
    languageOptions: { ecmaVersion: 2020, globals: globals.browser },
  },
  {
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier: prettier,
    },

    rules: {
      ...reactHooks.configs.recommended.rules,
      'prettier/prettier': [
        'error',
        {
          printWidth: 120,
          tabWidth: 2,
          singleQuote: true,
          endOfLine: 'auto',
        },
      ],
    },
  },
  prettierConfig,
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginQuery.configs['flat/recommended'],
];
