// routes/index.js
const express = require('express');
const axios = require('axios');
const router = express.Router();

// Main route
router.get('/', (req, res) => {
    res.render('index');
});

// Search route
router.get('/search', async (req, res) => {
    const query = req.query.query || ''; // Get the query from the URL
    let searchResults = [];

    try {
        const response = await axios.get(`https://gdbrowser.com/api/search/${encodeURIComponent(query)}`);
        searchResults = response.data; // Get the results from the response
    } catch (error) {
        console.error("Error fetching data from GDBrowser API:", error.message);
    }

    res.render('search', { query, searchResults });
});

// Level route
router.get('/level', async (req, res) => {
    const levelId = req.query.id; // Get the level ID from the query
    let levelData = null;

    if (levelId) {
        try {
            const response = await axios.get(`https://gdbrowser.com/api/level/${encodeURIComponent(levelId)}`);
            levelData = response.data; // Get the level data from the response
        } catch (error) {
            console.error("Error fetching level data from GDBrowser API:", error.message);
        }
    }

    res.render('level', { levelId, levelData }); // Pass level ID and data to the view
});

module.exports = router;
