import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'ionphaser',
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
