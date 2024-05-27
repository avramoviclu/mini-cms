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
            const { name, description } = tagData;
            db.run("INSERT INTO tags (name, description) VALUES (?, ?)", [name, description], function(err) {
                if (err) reject(err);
                else resolve({ id: this.lastID, ...tagData });
            });
        });
    }

    static updateTag(id, tagData) {
        return new Promise((resolve, reject) => {
            const { name, description } = tagData;
            db.run("UPDATE tags SET title = ?, content = ? WHERE id = ?", [name, description, id], function(err) {
                if (err) reject(err);
                else resolve({ id, ...tagData });
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