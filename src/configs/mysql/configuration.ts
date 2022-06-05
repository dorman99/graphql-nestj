import { registerAs } from "@nestjs/config";
import * as dotenv from 'dotenv'
dotenv.config();
export default registerAs('mysql', async(): Promise<any> => {
    return {
        host: process.env.TYPEORM_HOST,
        username: process.env.TYPEORM_USERNAME,
        password: process.env.TYPEORM_PASSWORD,
        port: parseInt(process.env.TYPEORM_PORT),
        type: process.env.TYPEORM_CONNECTION,
        database: process.env.TYPEORM_DATABASE,
        logging: Boolean(process.env.TYPEORM_LOGGING),
    }
})