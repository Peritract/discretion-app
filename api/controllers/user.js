const bcrypt = require('bcrypt');

const User = require('../models/user');

async function register (req, res) {
    try {
        const data = req.body;

        // Generate a salt with a specfic cost
        const salt = await bcrypt.genSalt(parseInt(process.env.BCRYPT_SALT_ROUNDS));

        // Hash the password
        data["password"] = await bcrypt.hash(data["password"], salt);

        const result = await User.create(data);
        res.status(201).send(result);
    } catch (err) {
        res.status(400).json({"error": err.message})
    }
};

async function show (req, res) {
    try {
        const id = parseInt(req.params.id);
        const post = await User.getOneById(id);
        res.json(post);
    } catch (err) {
        res.status(404).json({"error": err.message})
    }
};

async function login (req, res) {
    try {
        const user = await User.getOneByUsername(req.body.username)

        const authenticated = await bcrypt.compare(req.body.password, user["password"]);

        if (!authenticated) {
            throw new Error("Incorrect credentials.");
        } else {
            res.status(200).json({authenticated: true});
        }

    } catch (err) {
        res.status(403).json({"error": err.message})
    }
}

module.exports = {
    register, show, login
}
