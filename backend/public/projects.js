document.addEventListener("DOMContentLoaded", async () => {
  const searchInput = document.getElementById("searchProjects");
  const coursesContainer = document.querySelector(".courses");
  const projectData = []; // Store project data for reference

  // Fetch new projects data from the JSON file
  const response = await fetch("./projects.json");
  const newProjectsData = await response.json();

  newProjectsData.forEach((project) => {
    const projectElement = addProjectToUI(project);
    projectData.push({ element: projectElement, data: project });
  });

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
      <div class="course-banner">
        <img src="${project.image}" alt="${project.name}">
      </div>
      <div class="course-detail">
        <h3 class="course-title">${project.name}</h3>
        <button class="eye-button" style="cursor:pointer"><h6>Tap to see</h6><i class="fas fa-eye"></i></button>
        <p>${project.techstack}</p>
        <div class="course-info">
          <button class="buy-button course" data-paid="false">Buy Course</button>
          <a class="download-link btn btn-7 btn-7c btn-icon-only zmdi-arrow-right" href="${project.downloadLink}" download style="display: none;">Download Project</a>
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
        body.removeAttribute("style")
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

const eyeButton = projectElement.querySelector(".eye-button");
const closeButton = projectElement.querySelector(".close-button");
const popup = projectElement.querySelector(".popup");

eyeButton.addEventListener("click", () => {
  popup.style.display = "block";
});

closeButton.addEventListener("click", () => {
  popup.style.display = "none";
});

async function handlePayment(courseId, downloadLink, buyButton) {
  // Simulate payment process using Razorpay
  const options = {
    // Replace with your actual Razorpay API key
    key: "rzp_test_rmVf1ufuOltuLZ",
    amount: 100000, // Replace with the actual amount
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
      email: "syedimtiyazali141@gmail.com",
      contact: "7249545778",
    },
  };

  const razorpayInstance = new Razorpay(options);
  razorpayInstance.open();
}
