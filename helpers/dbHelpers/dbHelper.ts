import { Pool } from 'pg';
import { getEnvironmentData } from '../envHelper';
import { User } from '../../models/dbModels/appDbModels';

export class DbHelper {
    private pool: Pool;

    constructor() {
        const env = getEnvironmentData();
        this.pool = new Pool({
            host: env.db.host,
            port: env.db.port,
            database: env.db.database,
            user: env.db.user,
            password: env.db.password,
        });
    }

    async getUsers(): Promise<User[]> {
        try {
            const result = await this.pool.query('SELECT * FROM "user"');
            return result.rows;
        } finally {
            await this.pool.end();
        }
    }
}
