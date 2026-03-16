import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'ionphaser',
  outputTargets: [
    reactOutputTarget({
      outDir: './react/src/components',
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'dist-custom-elements',
      externalRuntime: false,
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
