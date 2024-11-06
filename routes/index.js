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

// Scores route with pagination and creator leaderboard toggle
router.get('/scores', async (req, res) => {
    const playersPerPage = 5; // Show 5 players per page
    let leaderboardData = [];
    const page = parseInt(req.query.page) || 1; // Get the page from the query (default to 1 if not provided)
    const isCreator = req.query.creator === 'true'; // Check if the 'creator' query param is present
    const isCreatorLeaderboard = isCreator; // Set flag to check if it's creator leaderboard
    const url = isCreator ? 'https://gdbrowser.com/api/leaderboard?creator' : 'https://gdbrowser.com/api/leaderboard';

    try {
        const response = await axios.get(url);
        leaderboardData = response.data; // Get the leaderboard data from the response

        // Paginate the leaderboard data
        const startIndex = (page - 1) * playersPerPage;
        const endIndex = startIndex + playersPerPage;
        const currentLeaderboard = leaderboardData.slice(startIndex, endIndex);

        // Determine if we are on the first or last page
        const isFirstPage = page === 1;
        const isLastPage = endIndex >= leaderboardData.length;

        res.render('leaderboard', {
            leaderboardData: currentLeaderboard,
            currentPage: page,
            isFirstPage,
            isLastPage,
            isCreatorLeaderboard
        });
    } catch (error) {
        console.error("Error fetching leaderboard data from GDBrowser API:", error.message);
    }
});

module.exports = router;
