import db from '../database/db.mjs';

class TagService {
    static getTags() {
        return new Promise((resolve, reject) => {
            db.all("SELECT * FROM tags", [], (err, rows) => {
                if (err) reject(err);
                else resolve(rows);
            });
        });
    }

    static getTag(id) {
        return new Promise((resolve, reject) => {
            db.get("SELECT * FROM tags WHERE id = ?", [id], (err, row) => {
                if (err) reject(err);
                else resolve(row);
            });
        });
    }

    static createTag(tagData) {
        return new Promise((resolve, reject) => {
            const { title, content } = tagData;
            db.run("INSERT INTO tags (title, content) VALUES (?, ?)", [title, content], function(err) {
                if (err) reject(err);
                else resolve({ id: this.lastID, ...postData });
            });
        });
    }

    static updateTag(id, tagData) {
        return new Promise((resolve, reject) => {
            const { title, content } = postData;
            db.run("UPDATE tags SET title = ?, content = ? WHERE id = ?", [title, content, id], function(err) {
                if (err) reject(err);
                else resolve({ id, ...postData });
            });
        });
    }

    static deleteTag(id) {
        return new Promise((resolve, reject) => {
            db.run("DELETE FROM tags WHERE id = ?", [id], function(err) {
                if (err) reject(err);
                else resolve({ message: 'Tag deleted successfully' });
            });
        });
    }
}

export default TagService;