const appConfig = require('../../config.js');
const Discogs = require('disconnect').Client;
const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

// Configure mongoose promises
mongoose.Promise = global.Promise;

// Configure Discogs
const discogsClient = new Discogs('MusicList-jryan', {
    consumerKey: appConfig.discogs.key,
    consumerSecret: appConfig.discogs.secret,
});
const discogsDB = discogsClient.database();

// POST to /search
router.post('/search', async (req, res) => {
    // contact discogs API
    await discogsDB.search(req.body, (err, data) => {
        if (err) {
            const error = new Error(err);
            return res.json(error);
        }
        return res.json(data);
    });
});

module.exports = router;
