import * as dotenv from 'dotenv';
import * as fs from 'fs';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

export function getEnvironmentData() {
    const targetEnv = process.env.TARGET_ENV;
    let envFilePath = path.resolve(__dirname, '../envs');

    switch (targetEnv) {
        case 'local':
            envFilePath = path.join(envFilePath, 'local.json');
            break;
        case 'dev':
            envFilePath = path.join(envFilePath, 'dev.json');
            break;
        default:
            throw new Error(`Unknown TARGET_ENV "${targetEnv}" in .env. Use: local, dev`);
    }

    const rawData = fs.readFileSync(envFilePath, 'utf-8');
    return JSON.parse(rawData);
}
