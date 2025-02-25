const projects = [ //projects array
    {
        name: "Random Quote Generator", // Project Name
        description: "A web app that generates random quotes from random philosophers." //description project
    },
    {
        name: "Tic Tac Toe",  // Project Name
        description: "A classic Tic Tac Toe game using HTML, CSS, and JS." //description project
    },
    {
        name: "Calculator", // Project Name
        description: "A simple calculator app using HTML, CSS, and JS." //description project
    },
    {
        name: "Portfolio Website", // Project Name
        description: "A personal portfolio website created using HTML, CSS, and JS." //description project
    },
    {
        name: "Student Grade Calculator", // Project Name
        description: "An app to calculate student grades and remarks." //description project
    }
];

// Loop through each project and create a list item
const projectList = document.getElementById("projectList");

projects.forEach(project => {
    const li = document.createElement("li");
    li.textContent = project.name;

    const description = document.createElement("p");
    description.textContent = project.description;
    description.style.display = "none"; // Hides description 

    const readMoreBtn = document.createElement("button");
    readMoreBtn.textContent = "Read more";

    readMoreBtn.classList.add("read-more"); // Adds classlist to be modified dynamically in CSS

    readMoreBtn.addEventListener("click", () => {
        if (description.style.display === "none") {
            description.style.display = "block";
            readMoreBtn.textContent = "Read less";
        } else {
            description.style.display = "none";
            readMoreBtn.textContent = "Read more";
        }
    });

    li.appendChild(description); // Append description to the project item
    li.appendChild(readMoreBtn); // Append "Read More" button
    projectList.appendChild(li); // Add the project to the list
});

const skills = [ // skills array
    "HTML",
    "CSS",
    "JavaScript",
    "Responsive Design",
    "Java",
    "C++",
];

const skillsList = document.getElementById("skillsList");

skills.forEach(skills => { // Loop through each skill and add it to the skills list
    const li = document.createElement("li");
    li.textContent = skills;
    skillsList.appendChild(li);
});

// Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode"); // toggle dark mode class

});

//Contact form handling
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

// Form Submission
contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form input
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Validate form input
    if (name && email && message) {
        formMessage.textContent = "Thank you for your message!";
        formMessage.style.color = "pink";
        contactForm.reset(); //Clear form after submission
    } else {
        formMessage.textContent = "Please fill out all fields.";
        formMessage.style.color = "red";
    }
});


// Display Current Date in Footer
document.addEventListener("DOMContentLoaded", () => {
    const currentDateElement = document.getElementById("currentDate");
    const currentDate = new Date().toLocaleDateString('en-UK', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    currentDateElement.textContent = currentDate;  // Update footer with date
});



