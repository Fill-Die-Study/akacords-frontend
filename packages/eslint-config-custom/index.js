module.exports = {
  plugins: ['react', 'react-hooks', 'prettier', '@typescript-eslint'],
  extends: ['next', 'turbo', 'airbnb', 'prettier', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  globals: {
    JSX: true
  },
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'arrow-body-style': 'off',
    'jsx-quotes': 'off',
    'comma-dangle': 'off',
    'object-curly-newline': 'off',
    'linebreak-style': 'off',
    'react/jsx-filename-extension': 'off',
    'react/no-unescaped-entities': 'off',
    'react/jsx-tag-spacing': 'off',
    'react/prop-types': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'react/require-default-props': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],

    // For enum type
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error']
  }
};
