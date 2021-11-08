module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  globals: {
    defineProps: true,
    defineEmits: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'vue/no-multiple-template-root': 'off',
    // 'import/extensions': [
    //   'error',
    //   'ignorePackages',
    //   {
    //     js: 'never',
    //     jsx: 'never',
    //     ts: 'never',
    //     tsx: 'never',
    //   },
    // ],
  },
  // settings: {
  //   'import/resolver': {
  //     node: {
  //       extensions: ['.js', '.jsx', '.ts', '.vue'],
  //     },
  //   },
  // },
};
