import resolve from 'rollup-plugin-node-resolve';
import sourcemaps from 'rollup-plugin-sourcemaps';

export default {
  input: 'dist-transpiled/index.js',
  output: [
    {
      file: 'dist/index.esm.js',
      format: 'es',
      sourcemap: true
    },
    {
      file: 'dist/index.js',
      format: 'commonjs',
      preferConst: true,
      sourcemap: true
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
    resolve(),
    sourcemaps()
  ]
};