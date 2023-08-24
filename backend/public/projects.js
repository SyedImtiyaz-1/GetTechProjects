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
        <p>${project.techstack}</p>
        <div class="course-info">
          <button class="buy-button course" data-paid="false">Buy Course</button>
          <a class="download-link btn btn-7 btn-7c btn-icon-only zmdi-arrow-right" href="${project.downloadLink}" download style="display: none;">Download Project</a>
        </div>
      </div>
    `;

    coursesContainer.appendChild(projectElement);

    const buyButton = projectElement.querySelector(".buy-button");
    const downloadLink = projectElement.querySelector(".download-link");

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
