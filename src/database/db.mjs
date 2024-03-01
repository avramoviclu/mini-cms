import sqlite3 from 'sqlite3';

const { verbose } = sqlite3;

const db = new (verbose().Database)('./sqlite/mini-cms.db', (err) => {
    if (err) {
        console.error('Error opening database', err);
    } else {
        console.log('Database connected');
        db.run(`CREATE TABLE IF NOT EXISTS posts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            content TEXT NOT NULL
        )`);
    }
});

export default db;