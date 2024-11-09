const express = require('express');
const path = require('path');
const fs = require('fs');  // Required for reading the file
const routes = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 3000;

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Set the views directory to 'ejs'
app.set('views', path.join(__dirname, 'ejs')); // Change 'views' to 'ejs'

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve the discord file as plain text
app.get('/.well-known/discord', (req, res) => {
  const discordFilePath = path.join(__dirname, '.well-known', 'discord');
  
  // Check if the discord file exists
  if (fs.existsSync(discordFilePath)) {
    res.setHeader('Content-Type', 'text/plain');  // Ensure plain text
    res.sendFile(discordFilePath);  // Send the file directly
  } else {
    res.status(404).send('File not found');  // Handle missing file
  }
});

// Use routes
app.use('/', routes);

// Route for /thxcolon that renders thxcolon.ejs
app.get('/thxcolon', (req, res) => {
  res.render('thxcolon');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
