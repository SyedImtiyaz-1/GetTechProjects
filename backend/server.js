const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

const purchasedProjects = [
  { id: 'netflix', name: 'Netflix Clone' },
  // ... other projects ...
];

// Define API routes
app.get('/api/purchased-projects', (req, res) => {
  res.json(purchasedProjects);
});

// Serve the default home page from the "home" directory
app.use(express.static('home'));

// Serve static files from the "public" directory
app.use(express.static('public'));

// Handle root URL
app.get('/', (req, res) => {
  // Since the default home page is served using the static middleware, it will be served automatically
  // No need to explicitly send a response here
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
