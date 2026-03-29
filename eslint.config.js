import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';

export default tseslint.config(
  {
    ignores: ['dist/', 'build/', 'node_modules/'],
  },
  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      // Enforce explicit return types on functions — good for a typed scripting project
      '@typescript-eslint/explicit-function-return-type': 'warn',

      // Disallow floating promises (easy to miss in scripts)
      '@typescript-eslint/no-floating-promises': 'error',

      // Prefer nullish coalescing over || for nullable values
      '@typescript-eslint/prefer-nullish-coalescing': 'error',

      // No need to explicitly type things TS can infer
      '@typescript-eslint/no-inferrable-types': 'warn',

      // Warn on unused vars but allow underscore-prefixed to be ignored
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
    },
  },
  // Must come last — disables ESLint rules that conflict with Prettier
  prettier,
);
