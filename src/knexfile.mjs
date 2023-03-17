import path from 'path';
import nextEnv from '@next/env';

const { loadEnvConfig } = nextEnv;

const dev = process.env.NODE_ENV !== 'production';
const { SQLITE_FILENAME } = loadEnvConfig('../', dev).combinedEnv;

const selfPath = new URL(import.meta.url).pathname;
const projectDir = path.join(selfPath, '../..');

const config = {
  client: 'sqlite3',
  useNullAsDefault: true,
  connection: {
    filename: path.resolve('C:/Users/Eber/Desktop/Desafio Revisado y funcionando/entrevista-eberson-palomino-1-avance-de-la-entrevista/db-challenge.sqlite'),
  },
  migrations: {
    directory: './knex/migrations',
    loadExtensions: ['.mjs'],
  },
  seeds: {
    directory: './knex/seeds',
    loadExtensions: ['.mjs'],
  },
};

export default config;
