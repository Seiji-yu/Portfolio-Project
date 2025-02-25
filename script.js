const projects = [ //projects array
    {
        name: "Random Quote Generator",
        description: "A web app that generates random quotes from random philosophers."
    },
    {
        name: "Tic Tac Toe",
        description: "A classic Tic Tac Toe game using HTML, CSS, and JS."
    },
    {
        name: "Calculator",
        description: "A simple calculator app using HTML, CSS, and JS."
    },
    {
        name: "Portfolio Website",
        description: "A personal portfolio website created using HTML, CSS, and JS."
    },
    {
        name: "Student Grade Calculator",
        description: "An app to calculate student grades and remarks."
    }
];

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

    li.appendChild(description);
    li.appendChild(readMoreBtn);
    projectList.appendChild(li);
});

const skills = [ //skills array
    "HTML",
    "CSS",
    "JavaScript",
    "Responsive Design",
    "Java",
    "C++",
];

const skillsList = document.getElementById("skillsList");
skills.forEach(skills => {
    const li = document.createElement("li");
    li.textContent = skills;
    skillsList.appendChild(li);
});

const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

});

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        formMessage.textContent = "Thank you for your message!";
        formMessage.style.color = "pink";
        contactForm.reset();
    } else {
        formMessage.textContent = "Please fill out all fields.";
        formMessage.style.color = "red";
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const currentDateElement = document.getElementById("currentDate");
    const currentDate = new Date().toLocaleDateString('en-UK', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    currentDateElement.textContent = currentDate;
});



