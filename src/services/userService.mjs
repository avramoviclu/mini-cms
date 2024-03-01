import db from '../database/db.mjs';

class UserService {
    static getUsers() {
        return new Promise((resolve, reject) => {
            db.all("SELECT * FROM users", [], (err, rows) => {
                if (err) reject(err);
                else resolve(rows);
            });
        });
    }

    static getUser(id) {
        return new Promise((resolve, reject) => {
            db.get("SELECT * FROM users WHERE id = ?", [id], (err, row) => {
                if (err) reject(err);
                else resolve(row);
            });
        });
    }

    static createUser(userData) {
        return new Promise((resolve, reject) => {
            const { title, content } = tagData;
            db.run("INSERT INTO users (title, content) VALUES (?, ?)", [title, content], function(err) {
                if (err) reject(err);
                else resolve({ id: this.lastID, ...postData });
            });
        });
    }

    static updateUser(id, tagData) {
        return new Promise((resolve, reject) => {
            const { title, content } = postData;
            db.run("UPDATE users SET title = ?, content = ? WHERE id = ?", [title, content, id], function(err) {
                if (err) reject(err);
                else resolve({ id, ...postData });
            });
        });
    }

    static deleteUser(id) {
        return new Promise((resolve, reject) => {
            db.run("DELETE FROM users WHERE id = ?", [id], function(err) {
                if (err) reject(err);
                else resolve({ message: 'User deleted successfully' });
            });
        });
    }

    static acceptInvitation() {
        // TODO: implementation
    }

    static getInvitation() {
        // TODO: implementation
    }

    static createInvitation() {
        // TODO: implementation
    }
}

export default UserService;