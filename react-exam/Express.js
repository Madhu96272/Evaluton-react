const express = require('express');
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Define a simple route
app.get('/', (req, res) => {
    res.send('Welcome to the Express server!');
});

// Another route for demonstration
app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello, this is an API response!' });
});

// Start the server on port 4000
const PORT = 4000;
app.listen(PORT, () => {
    console.log(Server is running on http://localhost:${PORT});
});