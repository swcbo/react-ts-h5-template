module.exports = {
  extends: ['plugin:react/recommended', 'standard', 'prettier', "eslint:recommended"],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  rules: {
    "react/self-closing-comp": ["error"],
    'react/prop-types': 'off',
    'react/no-typos': 'error',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/display-name': 'off',
    'promise/param-names': 'off',
    'react/jsx-boolean-value': 'off',
    'react/jsx-closing-bracket-location': [
      'error',
      {
        nonEmpty: false,
        selfClosing: 'line-aligned'
      }
    ],
    'react/jsx-curly-spacing': [
      'error',
      {
        when: 'never',
        attributes: {
          allowMultiline: true
        },
        children: true,
        spacing: {
          objectLiterals: 'never'
        }
      }
    ],
    'react/jsx-equals-spacing': [
      'error',
      'never'
    ],
    'react/jsx-tag-spacing': [
      'error',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never'
      }
    ],
  },
};