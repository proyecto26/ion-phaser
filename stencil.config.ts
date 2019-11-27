import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'ionphaser',
  globalScript: 'src/global/global.ts',
  commonjs: {
    namedExports: {
      'phaser': ['Game', 'Types']
    }
  },
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
