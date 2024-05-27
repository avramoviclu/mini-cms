import sqlite3 from 'sqlite3';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const dbDir = resolve(__dirname, '../database/sqlite');
const dbPath = resolve(dbDir, 'mini-cms.db');
const { verbose } = sqlite3;

const db = new (verbose().Database)(dbPath, (err) => {
    if (err) {
        console.error('Error opening database', err);
    } else {
        console.log('Database connected');
        db.run(`CREATE TABLE IF NOT EXISTS posts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            content TEXT NOT NULL
        )`, (err) => {
            if (err) {
                console.error('Error creating posts table', err);
            } else {
                console.log('posts table created');
            }
        });

        db.run(`CREATE TABLE IF NOT EXISTS tags (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            description TEXT NOT NULL
        )`, (err) => {
            if (err) {
                console.error('Error creating tags table', err);
            } else {
                console.log('tags table created');
            }
        });

        db.run(`CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL
        )`, (err) => {
            if (err) {
                console.error('Error creating users table', err);
            } else {
                console.log('users table created');
            }
        });

        db.run(`CREATE TABLE IF NOT EXISTS post_tag (
            post_id INTEGER,
            tag_id INTEGER
        )`, (err) => {
            if (err) {
                console.error('Error creating post_tag table', err);
            } else {
                console.log('post_tag table created');
            }
        });
    }
});

export default db;