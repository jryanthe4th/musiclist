const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const User = require('../../models/user.js');

const router = express.Router();

// Configure mongoose promises
mongoose.Promise = global.Promise;

// GET to /checksession
router.get('/checksession', (req, res) => {
    if (req.user) {
        return res.send(JSON.stringify(req.user, console.log('hey checksession worked!')));
    }
    return res.send(JSON.stringify({}, console.log('hey checksession did not work!')));
});

// GET to /logout
router.get('/logout', (req, res) => {
    req.logout();
    return res.send(JSON.stringify(req.user));
});

// POST to /login
router.post('/login', async (req, res) => {
    // Look up the user by their email
    const query = User.findOne({ email: req.body.email });
    const foundUser = await query.exec();

    // If they exist, they'll have a username, so add that to our body
    if (foundUser) { req.body.username = foundUser.username; }

    passport.authenticate('local')(req, res, () => {
        // If logged in, we should have user info to send back
        if (req.user) {
            return res.send(JSON.stringify(req.user));
        }

        // Otherwise, return an error
        return res.send(JSON.stringify({ error: 'There was an error logging in' }));
    });
});

// POST to /register
router.post('/register', (req, res) => {
    // Create a user object to save, using values from incoming JSON
    const newUser = new User({
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
    });

    // Save, via passport's "register" method, the user
    User.register(newUser, req.body.password, (err, user) => {
        // If there's a problem, send back a JSON object with the error
        if (err) {
            return res.send(JSON.stringify({ error: err }));
        }
        // Otherwise, for now, send back a JSON object with a new user's info
        return res.send(JSON.stringify(user));
    });
});

module.exports = router;
