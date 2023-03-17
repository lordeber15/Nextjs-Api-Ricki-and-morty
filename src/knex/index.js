import knex from 'knex';
import config from '../knexfile';

/**
 * Global is used here to ensure the connection
 * is cached across hot-reloads in development
 *
 * see https://github.com/vercel/next.js/discussions/12229#discussioncomment-83372
 */
let cached = global.pg;
if (!cached) {
  // eslint-disable-next-line no-multi-assign
  cached = global.pg = {};
}

export default function getKnex() {
  if (!cached.instance) cached.instance = knex(config);
  return cached.instance;
}
