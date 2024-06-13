const express = require("express");
const app = express();
const path = require("path");
const nodemailer = require("nodemailer");
const fs = require("fs");

const PORT = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, "public")));

// Create a transporter for sending emails
const transporter = nodemailer.createTransport({
  service: "EmailJS", // Use the EmailJS service
  auth: {
    user: "oUbB-IqXyvbW5JlV9", // Replace with your EmailJS user ID
    pass: "dzDVVi2bCYjXw4BNN5Wec", // Replace with your EmailJS secret
  },
});

// Read project data from the JSON file
const projectsData = JSON.parse(
  fs.readFileSync("./backend/public/projects.json", "utf8")
);

// Define the route to handle the purchase form submission
app.post("/purchase", (req, res) => {
  const { name, email, projectId } = req.body;

  // Assuming you have a database connection and model defined
  // Insert the purchase details into the database
  Purchase.create({
    name: name,
    email: email,
    projectId: projectId,
  })
    .then(() => {
      // Find the selected project data based on the projectId
      const selectedProject = projectsData.find(
        (project) => project.projectId === projectId
      );

      if (selectedProject) {
        // Send the project to the user's email
        sendProjectByEmail(email, selectedProject);
        res.redirect("/purchase-confirmation");
      } else {
        res.status(404).json({ error: "Project not found" });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: "An error occurred" });
    });
});

// Function to send the project file to the user's email
async function sendProjectByEmail(userEmail, projectData) {
  try {
    const mailOptions = {
      from: "syedimtiyazali141@gmail.com",
      to: userEmail,
      subject: "Your Project",
      text: "Please find your attached project.",
      attachments: [
        {
          filename: projectData.name,
          path: projectData.downloadLink,
        },
      ],
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
  } catch (error) {
    console.error("Error sending email: " + error);
  }
}

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
