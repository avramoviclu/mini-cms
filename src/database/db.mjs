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

        console.log('posts table created');

        db.run(`CREATE TABLE IF NOT EXISTS tags (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            description TEXT NOT NULL
        )`);

        console.log('tags table created');

        db.run(`CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL
        )`);

        console.log('users table created');

        db.run(`CREATE TABLE IF NOT EXISTS post_tag (
            post_id INTEGER,
            tag_id INTEGER
        )`);

        console.log('post_tag table created');
    }
});

export default db;