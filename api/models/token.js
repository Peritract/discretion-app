const db = require("../database/connect")

class Token {
    constructor({ token_id, user_id, token }) {
        this.token_id = token_id
        this.user_id = user_id
        this.token = token
    }

    static create(user_id) {

    }

    static getOneById(id) {
        
    }

    static getOneByToken(token) {
        
    }
}

module.exports = Token;
