import pg from "pg";
const { Pool } = pg;

class Db {
    pool = () => {
        return new Pool({
            user: process.env.DB_USERNAME,
            host: process.env.DB_HOST,
            database: process.env.DB_NAME,
            password: process.env.DB_PASSWORD,
            port: process.env.DB_PORT
        });
    }
}

export default Db;