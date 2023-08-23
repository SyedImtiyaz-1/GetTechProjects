const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

const purchasedProjects = [
  { id: 'netflix', name: 'Netflix Clone' },
  // ... other projects ...
];

// Serve the default home page from the "home" directory
app.use(express.static('home', { index: 'index.html' }));

// Serve static files from the "public" directory
app.use(express.static('public'));

// Define API routes
app.get('/', (req, res) => {
  console.log('Accessed root URL');
  res.send('Hello from the backend server!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
