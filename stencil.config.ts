import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'ionphaser',
  globalScript: 'src/global/global.ts',
  commonjs: {
    namedExports: {
      'phaser': ['Game', 'Types']
    }
  },
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: '@ion-phaser/core',
      proxiesFile: './react/src/components.ts'
    }),
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
