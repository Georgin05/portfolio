const canvas = document.getElementById('matrix-canvas'); // Keeping ID for compatibility, or change in HTML
const ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

const particles = [];
const particleCount = 100;

class Particle {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = Math.random() * width;
        this.y = height + Math.random() * 100; // Start below screen
        this.speed = Math.random() * 2 + 1;
        this.size = Math.random() * 3 + 1;
        this.color = `rgba(${255}, ${Math.floor(Math.random() * 100)}, 0, ${Math.random()})`; // Orange/Red
        this.life = Math.random() * 100;
        this.decay = Math.random() * 0.5 + 0.1;
    }

    update() {
        this.y -= this.speed;
        this.life -= this.decay;
        this.x += Math.sin(this.life * 0.1) * 0.5; // Slight waver

        if (this.life <= 0 || this.y < -10) {
            this.reset();
        }
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        // Add glow
        ctx.shadowBlur = 10;
        ctx.shadowColor = "orange";
        ctx.fill();
        ctx.shadowBlur = 0; // Reset
    }
}

function init() {
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}

function animate() {
    // Clear with semi-transparent black for trails (optional, or solid clear)
    ctx.fillStyle = 'rgba(11, 11, 11, 0.2)'; // --targaryen-black with opacity
    ctx.fillRect(0, 0, width, height);

    particles.forEach(p => {
        p.update();
        p.draw();
    });

    requestAnimationFrame(animate);
}

// Resize handler
window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
});

init();
animate();
