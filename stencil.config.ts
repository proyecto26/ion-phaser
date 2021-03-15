import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'ionphaser',
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: '@ion-phaser/core',
      proxiesFile: './react/src/components.ts',
      includeDefineCustomElements: true,
      includePolyfills: true
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'dist-custom-elements-bundle',
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
