const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

const purchasedProjects = [
  { id: 'netflix', name: 'Netflix Clone', },
  // ... other projects ...
];

// Serve static files from the "public" directory
app.use(express.static('public'));

// Define API routes
app.get('/api/purchased-projects', (req, res) => {
  res.json(purchasedProjects);
});

// Handle root URL
app.get('/', (req, res) => {
  res.send('Hello from the backend server!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
