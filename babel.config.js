const compile = (esmodule) => ({
  presets: [
    [
      '@babel/preset-env',
      {
        corejs: '3.0',
        modules: esmodule ? false : 'commonjs',
        useBuiltIns: 'usage',
      },
    ],
    [
      '@babel/preset-typescript',
      {
        isTSX: true,
        allExtensions: true,
        allowDeclareFields: true,
      },
    ],
  ],
  plugins: [
    ['@vue/babel-plugin-jsx', { mergeProps: false }],
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import',
    [
      '@babel/plugin-transform-runtime',
      {
        absoluteRuntime: false,
        corejs: false,
        helpers: true,
        regenerator: true,
      },
    ],
  ],
});

module.exports = {
  env: {
    development: { presets: ['@vue/cli-plugin-babel/preset'] },
    production: { presets: ['@vue/cli-plugin-babel/preset'] },
    commojs: compile(false),
    esmodule: compile(true),
  },
};
