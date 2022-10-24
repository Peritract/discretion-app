const Token = require("../models/token");

function authenticator(req, res, next) {
    try {
        const userCookie = req.cookies.discretionUser;

        if (!userCookie) {
            throw new Error("User not authenticated.");
        } else {
            const validToken = Token.getOneByToken(userCookie);

            next();
        }
    } catch (err) {
        res.status(403).json({ error: err.message });
    }
}

module.exports = authenticator;
