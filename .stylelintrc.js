/*
 * @Descripttion:
 * @version:
 * @Author: 小白
 * @Date: 2021-09-13 22:26:28
 * @LastEditors: 小白
 * @LastEditTime: 2021-09-15 22:34:53
 */
module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
    'string-quotes': 'single',
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['composes'],
      },
    ],
    'font-family-no-missing-generic-family-keyword': null,
    'no-missing-end-of-source-newline': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['for'],
      },
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
  },
};
