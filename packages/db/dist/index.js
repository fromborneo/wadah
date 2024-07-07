import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { env } from '@orbitkit/env/web/db';
import * as schema from './schema';
const sql = neon(env.DATABASE_URL);
export const db = drizzle(sql, {
    schema,
    logger: env.NODE_ENV === 'development',
});
//# sourceMappingURL=index.js.map