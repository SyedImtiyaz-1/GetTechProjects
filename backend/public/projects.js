document.addEventListener("DOMContentLoaded", async () => {
  const coursesContainer = document.querySelector(".courses");
  const searchInput = document.getElementById("searchProjects");
  const skeletonCardsContainer = document.getElementById("skeleton-cards");
  const projectData = []; // Store project data for reference

  // Function to display skeleton cards
  function displaySkeletons(count) {
    skeletonCardsContainer.style.display='flex';
    for (let i = 0; i < count; i++) {
      const skeletonCard = document.createElement("div");
      skeletonCard.classList.add("skeleton-card");

      skeletonCard.innerHTML = `
        <div class="skeleton-banner"></div>
        <div class="skeleton-detail skeleton-text"></div>
      `;
      skeletonCardsContainer.appendChild(skeletonCard);
    }
  }

  // Remove skeleton cards
  function removeSkeletons() {
    skeletonCardsContainer.innerHTML = "";
    skeletonCardsContainer.style.display='none';

  }

  // Display skeleton cards before fetching data
  displaySkeletons(2); // Display 3 skeleton cards

  // Fetch new projects data from the JSON file
  try {
    console.log("Inside try block");
     // Debugging statement
    const response = await fetch("./projects.json");
// Log the response
    console.log("Response received: ", response); 

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const newProjectsData = await response.json();
     // Log the parsed JSON data
    console.log("Parsed JSON: ", newProjectsData);
   

    // Remove skeleton cards after fetching data
    removeSkeletons();

    newProjectsData.forEach((project) => {
      const projectElement = addProjectToUI(project);
      projectData.push({ element: projectElement, data: project });
    });
    

  } catch (error) {
    console.error("Error fetching projects data: ", error); // Log any errors
  }

   searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.trim().toLowerCase();

    projectData.forEach(({ element, data }) => {
      const projectName = data.name.toLowerCase();

      const matchesSearch = projectName.includes(searchTerm);

      element.style.display = matchesSearch ? "block" : "none";
    });
  });

  function addProjectToUI(project) {
    const projectElement = document.createElement("div");
    projectElement.classList.add("course");
    projectElement.setAttribute("data-course-id", project.courseId);

    projectElement.innerHTML = `
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
     <link rel="stylesheet" href='../main.css'>
      <div class="course-banner">
        <img src="${project.image}" alt="${project.name}">
      </div>
      <div class="course-detail">
        <h3 class="course-title">${project.name}</h3>
        <button class="eye-button" style="cursor:pointer"><h6>Tap to see</h6><i class="fas fa-eye"></i></button>
        <p>${project.techstack}</p>
        <div class="course-info">
          <button class="buy-button course" data-paid="false">Get Project</button>
        </div>
      </div>
      <div class="popup" style="display: none;">
      <div class="popup-content">
        <div class="swiper-container">
          <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="${project["slide-img-1"]}" alt="${project.name}"></div>
            <div class="swiper-slide"><img src="${project["slide-img-2"]}" alt="${project.name}"></div>
            <!-- Add more images for the slider -->
          </div>
          <div class="swiper-button-next"><i class="fas fa-chevron-right"></i></div>
          <div class="swiper-button-prev"><i class="fas fa-chevron-left"></i></div>
        </div>
        <button class="close-button"><i class="fas fa-times"></i></button>
      </div>
    </div>
  `;

    coursesContainer.appendChild(projectElement);

    const buyButton = projectElement.querySelector(".buy-button");
    const downloadLink = projectElement.querySelector(".download-link");
    const eyeButton = projectElement.querySelector(".eye-button");
    const popup = projectElement.querySelector(".popup");
    const closeButton = projectElement.querySelector(".close-button");
    const body = document.body;

    eyeButton.addEventListener("click", () => {
      popup.style.display = "block";

      // Initialize the Swiper instance when the popup is displayed
      const swiper = new Swiper(".swiper-container", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        initialSlide: 0, // Show the first image initially
      });

      // Hide the body content when the popup is displayed
      body.style.overflow = "hidden";
    });

    // Add an event listener to close the popup when clicking outside
    document.addEventListener("click", (event) => {
      if (event.target === popup) {
        popup.style.display = "none";
        body.style.overflow = "auto"; // Restore body overflow
      }
    });

    const closeButtons = document.querySelectorAll(".close-button");

    closeButtons.forEach((closeButton) => {
      closeButton.addEventListener("click", () => {
        closeButton.closest(".popup").style.display = "none";
        body.removeAttribute("style");
      });
    });

    eyeButton.addEventListener("click", () => {
      popup.style.display = "block";
      // Initialize the Swiper instance when the popup is displayed
      const swiper = new Swiper(".swiper-container", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    });

    closeButton.addEventListener("click", () => {
      popup.style.display = "none";
      body.style.overflow = "auto"; // Restore body overflow
    });

    buyButton.addEventListener("click", async function (event) {
      const courseId = project.courseId;
      const paid = this.getAttribute("data-paid");

      if (paid === "false") {
        await handlePayment(courseId, downloadLink, buyButton);
      } else {
        alert(`You've already purchased the ${courseId} project.`);
      }
    });

    return projectElement;
  }
});

const sendEmailButton = document.getElementById("sendEmailButton");
sendEmailButton.addEventListener("click", () => {
  const userEmail = document.getElementById("userEmail").value;
  if (userEmail.trim() === "") {
    alert("Please enter a valid email address.");
    return;
  }

  // Make a request to fetch the project data from projects.json
  fetch("./projects.json")
    .then((response) => response.json())
    .then((projectsData) => {
      // Assuming you want to send the first project from the JSON file
      const projectData = projectsData[0];

      // Call the sendProjectByEmail function with the user's email and project data
      sendProjectByEmail(userEmail, projectData);
    })
    .catch((error) => {
      console.error("Error fetching project data:", error);
      alert("Failed to fetch project data. Please try again later.");
    });
});

async function sendProjectByEmail(userEmail, projectData) {
  // Create a form data object to send the project data to the server
  const formData = new FormData();
  formData.append("userEmail", userEmail);
  formData.append("projectData", JSON.stringify(projectData));

  // Make a POST request to your server to send the email
  try {
    const response = await fetch("/sendProjectEmail", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      alert("Email sent successfully!");
    } else {
      alert("Failed to send email. Please try again later.");
    }
  } catch (error) {
    console.error("Error sending email:", error);
    alert("An error occurred while sending the email. Please try again later.");
  }
}

async function handlePayment(courseId, downloadLink, buyButton) {
  // Simulate payment process using Razorpay
  const options = {
    // Replace with your actual Razorpay API key
    key: "rzp_test_RoaPlZhNjNdbIV",
    amount: 500, // Replace with the actual amount
    currency: "INR", // Replace with the desired currency
    name: "Project Store",
    description: `Purchase of ${courseId} project`,
    handler: async function (response) {
      // Simulate successful payment
      buyButton.textContent = "Purchased ✔️";
      buyButton.setAttribute("data-paid", "true");
      buyButton.classList.remove("course"); // Remove the course class
      downloadLink.style.display = "block";
      alert(`Payment successful! You've purchased the ${courseId} project.`);
    },
    prefill: {
      //Change it with your credentials...
      email: "akff7739@gmail.com",
      contact: "7488071990",
    },
  };

  const razorpayInstance = new Razorpay(options);
  razorpayInstance.open();
}
