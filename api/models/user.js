const db = require('../database/connect');

class User {

    constructor({ user_id, username, user_password, is_admin }) {
        this.id = user_id;
        this.username = username;
        this.password = user_password;
        this.isAdmin = is_admin;
    }

    // static async getOneById(id) {
    //     const response = await db.query("SELECT * FROM post WHERE post_id = $1", [id]);
    //     if (response.rows.length != 1) {
    //         throw new Error("Unable to locate post.")
    //     }
    //     return new Post(response.rows[0]);
    // }

    // static async create(data) {
    //     const {title, content, sender_id, recipient_id} = data;
    //     let response = await db.query("INSERT INTO post (title, content, sender_id, recipient_id) VALUES ($1, $2, $3, $4) RETURNING post_id;",
    //         [title, content, sender_id, recipient_id]);
    //     const newId = response.rows[0].post_id;
    //     const newPost = await Post.getOneById(newId);
    //     return newPost;
    // }

    // async destroy() {
    //     let response = await db.query("DELETE FROM post WHERE post_id = $1 RETURNING *;", [this.id]);
    //     return new Post(response.rows[0]);
    // }

}

module.exports = User;
