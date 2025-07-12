import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier'

export default tseslint.config(
  { ignores: ['dist'] },

  js.configs.recommended,

  ...tseslint.configs.recommended,

  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,

      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      quotes: ['error', 'single', { avoidEscape: true }],
      'space-before-function-paren': ['error', 'never'],
      'arrow-spacing': ['error', { before: true, after: true }],
      'react/react-in-jsx-scope': 'off',

      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-console': 'warn',
      'prefer-const': 'error',
    },
  },

  eslintConfigPrettier,
)
