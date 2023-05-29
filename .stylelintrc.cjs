module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
    'stylelint-config-recommended-less',
    'stylelint-config-standard-vue',
    'stylelint-config-recess-order',
  ],
  plugins: ['stylelint-order'],
  overrides: [
    {
      files: ['**/*.(css|less|html)'],
      customSyntax: 'postcss-less',
    },
    {
      files: ['**/*.(html)'],
      customSyntax: 'postcss-html',
    },
  ],
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts', '**/*.json', '**/*.md', '**/*.yaml'],
  rules: {
    'string-quotes': 'single',
    'declaration-block-no-redundant-longhand-properties': null,
  },
}
