// Inside your script tag in the HTML

const coursesContainer = document.querySelector(".courses");

document.addEventListener('DOMContentLoaded', async () => {
    // Fetch purchased projects from the backend
    const response = await fetch('/api/purchased-projects');
    const purchasedProjects = await response.json();
  
    // Add purchased projects to the HTML
    purchasedProjects.forEach((project) => {
      addProjectToUI(project);
    });

  // Add new projects to the UI
  const newProjectsData = [
    {
      id: "amazon",
      name: "Amazon Clone",
      image: "img/amazon.png",
      downloadLink: "netflix-project.zip",
    },
    {
      id: "netflix",
      name: "Netflix Clone",
      image: "img/netflix.png",
      downloadLink: "netflix-project.zip",
    },
    {
      id: "amazon",
      name: "Amazon Clone",
      image: "img/amazon.png",
      downloadLink: "netflix-project.zip",
    },
    {
      id: "netflix",
      name: "Netflix Clone",
      image: "img/netflix.png",
      downloadLink: "netflix-project.zip",
    },
    {
      id: "amazon",
      name: "Amazon Clone",
      image: "img/amazon.png",
      downloadLink: "netflix-project.zip",
    },
    {
      id: "netflix",
      name: "Netflix Clone",
      image: "img/netflix.png",
      downloadLink: "netflix-project.zip",
    },
    {
      id: "amazon",
      name: "Amazon Clone",
      image: "img/amazon.png",
      downloadLink: "netflix-project.zip",
    },
    {
      id: "netflix",
      name: "Netflix Clone",
      image: "img/netflix.png",
      downloadLink: "netflix-project.zip",
    },
    {
      id: "netflix",
      name: "Netflix Clone",
      image: "img/netflix.png",
      downloadLink: "netflix-project.zip",
    },
    // Add more projects here
  ];

  newProjectsData.forEach((project) => {
    addProjectToUI(project);
  });
});

function addProjectToUI(project) {
    const projectElement = document.createElement("div");
    projectElement.classList.add("course");
    projectElement.setAttribute("data-course-id", project.id);
  
    projectElement.innerHTML = `
      <div class="course-banner">
        <!-- Project image -->
        <img src="/${project.image}" alt="${project.name}">
      </div>
      <div class="course-detail">
        <h3 class="course-title">${project.name}</h3>
        <div class="course-info">
          <button class="buy-button" data-course-id="${project.id}" data-paid="false">Buy Project</button>
          <a class="download-link" href="${project.downloadLink}" download style="display: none;">Download Project</a>
        </div>
      </div>
    `;
  
    coursesContainer.appendChild(projectElement);
  
    const buyButton = projectElement.querySelector(".buy-button");
    const downloadLink = projectElement.querySelector(".download-link");
  
    buyButton.addEventListener("click", async function () {
      const courseId = this.getAttribute("data-course-id");
      const paid = this.getAttribute("data-paid");
  
      if (paid === "false") {
        await handlePayment(courseId, downloadLink, buyButton);
      } else {
        alert(`You've already purchased the ${courseId} project.`);
      }
    });
  }

async function handlePayment(courseId, downloadLink, buyButton) {
  // Simulate payment process using Razorpay
  const options = {
    // Replace with your actual Razorpay API key
    key: "rzp_test_rmVf1ufuOltuLZ",
    amount: 10000, // Replace with the actual amount
    currency: "INR", // Replace with the desired currency
    name: "Project Store",
    description: `Purchase of ${courseId} project`,
    handler: async function (response) {
      // Simulate successful payment
      buyButton.textContent = "Purchased";
      buyButton.setAttribute("data-paid", "true");
      downloadLink.style.display = "block";
      alert(`Payment successful! You've purchased the ${courseId} project.`);
    },
    prefill: {
      email: "user@example.com",
      contact: "1234567890",
    },
  };

  const razorpayInstance = new Razorpay(options);
  razorpayInstance.open();
}
