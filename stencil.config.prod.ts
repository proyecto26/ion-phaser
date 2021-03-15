import { Config } from '@stencil/core';

import { config as baseConfig } from './stencil.config'

export const config: Config = {
  ...baseConfig,
  rollupConfig: {
    inputOptions: {
      context: 'window',
    },
    outputOptions: {
      globals: {
        'phaser': 'Phaser',
      },
    },
  }
};
