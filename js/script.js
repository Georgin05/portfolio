// Main script file
console.log('System online...');

// Typewriter Effect
const texts = [
    "Hello, I am Georgin.",
    "I build things for the web.",
    "Welcome to my portfolio.",
    "Let's create something."
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    const typewriterElement = document.querySelector('.typewriter');
    if (typewriterElement) {
        typewriterElement.textContent = letter;
    }

    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000); // Wait before next phrase
    } else {
        setTimeout(type, 100); // Typing speed
    }
}());

// Projects Data
const projects = [
    {
        title: "Neural Network Viz",
        description: "Visualizing deep learning pathways in real-time using WebGL.",
        tech: ["Three.js", "Python", "TensorFlow"],
        link: "#"
    },
    {
        title: "Crypto Sentinel",
        description: "Automated trading bot with sentiment analysis algorithms.",
        tech: ["Node.js", "MongoDB", "Express"],
        link: "#"
    },
    {
        title: "Cyberpunk UI Kit",
        description: "A reusable component library for futuristic web interfaces.",
        tech: ["React", "Storybook", "CSS Modules"],
        link: "#"
    },
    {
        title: "Holonet Chat",
        description: "End-to-end encrypted messaging platform for the resistance.",
        tech: ["Socket.io", "Redis", "Docker"],
        link: "#"
    }
];

// Render Projects
const projectContainer = document.getElementById('project-list');
if (projectContainer) {
    projectContainer.innerHTML = '';
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-tech">
                ${project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
            </div>
        `;
        projectContainer.appendChild(card);
    });
}

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
