// Define an array to store the reviews
let reviews = [];

// Function to display the reviews
function displayReviews() {
  const container = document.getElementById('reviews-container');
  container.innerHTML = '';

  reviews.forEach((review, index) => {
    const reviewElement = document.createElement('div');
    reviewElement.className = 'review';

    const nameElement = document.createElement('span');
    nameElement.className = 'name';
    nameElement.textContent = review.name;

    const messageElement = document.createElement('p');
    messageElement.className = 'message';
    messageElement.textContent = review.message;

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => editReview(index));

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteReview(index));

    reviewElement.appendChild(nameElement);
    reviewElement.appendChild(messageElement);
    reviewElement.appendChild(editButton);
    reviewElement.appendChild(deleteButton);

    container.appendChild(reviewElement);
  });
}

// Function to add a new review
function addReview(name, message) {
  const review = {
    name,
    message
  };

  reviews.push(review);
  displayReviews();
  clearForm();
}

// Function to edit a review
function editReview(index) {
  const review = reviews[index];
  const name = prompt('Enter the new name:', review.name);
  const message = prompt('Enter the new message:', review.message);

  if (name && message) {
    review.name = name;
    review.message = message;
    displayReviews();
  }
}

// Function to delete a review
function deleteReview(index) {
  reviews.splice(index, 1);
  displayReviews();
}

// Function to clear the form fields
function clearForm() {
  document.getElementById('name').value = '';
  document.getElementById('message').value = '';
}

// Handle
