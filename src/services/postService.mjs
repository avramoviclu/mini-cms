import db from '../database/db.mjs';

class PostService {
    static getPosts() {
        return new Promise((resolve, reject) => {
            db.all("SELECT * FROM posts", [], (err, rows) => {
                if (err) reject(err);
                else resolve(rows);
            });
        });
    }

    static getPost(id) {
        return new Promise((resolve, reject) => {
            db.get("SELECT * FROM posts WHERE id = ?", [id], (err, row) => {
                if (err) reject(err);
                else resolve(row);
            });
        });
    }

    static createPost(postData) {
        return new Promise((resolve, reject) => {
            const { title, content } = postData;
            db.run("INSERT INTO posts (title, content) VALUES (?, ?)", [title, content], function(err) {
                if (err) reject(err);
                else resolve({ id: this.lastID, ...postData });
            });
        });
    }

    static updatePost(id, postData) {
        return new Promise((resolve, reject) => {
            const { title, content } = postData;
            db.run("UPDATE posts SET title = ?, content = ? WHERE id = ?", [title, content, id], function(err) {
                if (err) reject(err);
                else resolve({ id, ...postData });
            });
        });
    }

    static deletePost(id) {
        return new Promise((resolve, reject) => {
            db.run("DELETE FROM posts WHERE id = ?", [id], function(err) {
                if (err) reject(err);
                else resolve({ message: 'Post deleted successfully' });
            });
        });
    }
}

export default PostService;