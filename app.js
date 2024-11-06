const express = require('express');
const path = require('path');
const routes = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 3000;

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Set the views directory to 'ejs'
app.set('views', path.join(__dirname, 'ejs')); // Change 'views' to 'ejs'

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Use routes
app.use('/', routes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
