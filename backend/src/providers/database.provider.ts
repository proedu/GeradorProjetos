import { createConnection, ConnectionOptions } from 'typeorm';
import { databaseConfig } from 'src/config/database';
require('dotenv').config()

export const databaseProviders = [
    {
      provide: 'DATABASE_CONNECTION',
      useFactory: async () => await createConnection({
        ...databaseConfig as ConnectionOptions
      }),
    },
  ];