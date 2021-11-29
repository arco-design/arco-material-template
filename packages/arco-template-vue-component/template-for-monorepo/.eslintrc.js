module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    // 检查<script>标签中内容的parser
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
  },
  plugins: ['@typescript-eslint'],
  extends: [
    // Airbnb JavaScript Style Guide https://github.com/airbnb/javascript
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
  ],
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },
  },
  rules: {
    'prettier/prettier': 1,
    // 关闭Vue必须指定prop default
    'vue/require-default-prop': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/max-attributes-per-line': 0,
    // prettier中void ele添加
    'vue/html-self-closing': 0,
    '@typescript-eslint/no-explicit-any': 0,
    // TODO: 暂时关闭
    '@typescript-eslint/explicit-module-boundary-types': 0,
    // TODO: 暂时关闭
    '@typescript-eslint/no-non-null-assertion': 0,
    // 空函数
    '@typescript-eslint/no-empty-function': 1,
    // 允许ts-ignore
    '@typescript-eslint/ban-ts-comment': 0,
    // 重新定义扩展名检测规则，覆盖airbnb-base
    'import/extensions': [
      'error',
      'ignorePackages',
      { js: 'never', jsx: 'never', ts: 'never', tsx: 'never' },
    ],
    // TODO: 暂时关闭
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': [2, { caseSensitive: false }],
    // utils允许导出
    'import/prefer-default-export': 0,
    'import/no-named-as-default': 0,
    // 可以使用下划线变量名（私有变量）
    'no-underscore-dangle': 0,
    // 允许三元表达式嵌套
    'no-nested-ternary': 0,
    // 允许内部变量与外部变量重名
    'no-shadow': 0,
    'prefer-template': 1,
    // TODO: 暂时关闭
    'no-param-reassign': 0,
    // 允许自加自减
    'no-plusplus': 0,
    // ESLint问题 https://stackoverflow.com/questions/63818415/react-was-used-before-it-was-defined
    'no-use-before-define': 0,
    // 允许for-of遍历（推荐）
    'no-restricted-syntax': 0,
    'no-empty': [2, { allowEmptyCatch: true }],
    'no-bitwise': 0,
    'no-return-assign': 0,
    'no-unused-expressions': [
      'error',
      { allowShortCircuit: true, allowTernary: true },
    ],
    'no-continue': 0,
  },
};
