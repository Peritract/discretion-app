function authenticator(req, res, next) {
    console.log("COOKIES:", req.cookies);
    
    next();
}

module.exports = authenticator;
