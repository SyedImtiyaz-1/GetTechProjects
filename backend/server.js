const express = require('express');
const app = express();
const path = require('path');

// Import your database model (if using a database)
// const Purchase = require('./path/to/your/PurchaseModel'); // Update the path accordingly

const PORT = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, 'public')));

// Set up your other routes and middleware here

// Define the route to handle the purchase form submission
app.post('/purchase', (req, res) => {
  const { name, email, paymentDetails } = req.body;

  // Assuming you have a database connection and model defined
  // Insert the purchase details into the database
  Purchase.create({
    name: name,
    email: email,
    paymentDetails: paymentDetails
  })
  .then(() => {
    res.redirect('/purchase-confirmation');
  })
  .catch(err => {
    res.status(500).json({ error: 'An error occurred' });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
