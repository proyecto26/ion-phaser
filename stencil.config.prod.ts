import { Config } from '@stencil/core';

import { config as baseConfig } from './stencil.config'

export const config: Config = {
  ...baseConfig,
  extras: {
    enableImportInjection: true,
  },
};
