import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'dist-transpiled/index.js',
  output: [
    {
      file: 'dist/index.esm.js',
      format: 'es'
    },
    {
      file: 'dist/index.js',
      format: 'commonjs'
    }
  ],
  external: [
    '@ion-phaser/core',
    '@ion-phaser/core/loader',
    'react',
    'tslib',
    'phaser'
  ],
  plugins: [
    resolve()
  ]
};