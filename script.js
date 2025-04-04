const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];
const colors = ["#FFFFFF", "#FFFFFF", "#FFFFFF"];
let mouse = { x: null, y: null };

class Particle {
    constructor(x, y, speedX, speedY, color) {
        this.x = x;
        this.y = y;
        this.speedX = speedX * 0.5;
        this.speedY = speedY * 0.5;
        this.color = color;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width || this.x < 0) {
            this.speedX *= -1;
        }
        if (this.y > canvas.height || this.y < 0) {
            this.speedY *= -1;
        }

        let dx = this.x - mouse.x;
        let dy = this.y - mouse.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
            this.x -= dx * 0.02;
            this.y -= dy * 0.02;
        }
    }

    draw() {
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + this.speedX * 5, this.y + this.speedY * 5);
        ctx.stroke();
    }
}

function initParticles() {
    particlesArray = [];
    for (let i = 0; i < 80; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let speedX = (Math.random() - 0.5) * 2;
        let speedY = (Math.random() - 0.5) * 2;
        let color = colors[Math.floor(Math.random() * colors.length)];
        particlesArray.push(new Particle(x, y, speedX, speedY, color));
    }
}

function drawConnections() {
    for (let i = 0; i < particlesArray.length; i++) {
        for (let j = i + 1; j < particlesArray.length; j++) {
            let dx = particlesArray[i].x - particlesArray[j].x;
            let dy = particlesArray[i].y - particlesArray[j].y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
                ctx.strokeStyle = particlesArray[i].color;
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
                ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
                ctx.stroke();
            }
        }
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particlesArray.length; i++) {
        let particle = particlesArray[i];
        particle.update();
        particle.draw();
    }

    drawConnections();
    requestAnimationFrame(animateParticles);
}

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
});

window.addEventListener("mousemove", (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
});

initParticles();
animateParticles();



window.onload = () => {
    document.getElementById("popup").style.display = "flex";
    document.querySelectorAll("nav a").forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const id = link.getAttribute("href").substring(1);
        mostrarSecao(id);
      });
    });
  };
  
  function mostrarFormulario() {
    document.getElementById("formulario").style.display = "flex";
    const botoesIniciais = document.querySelectorAll(".modal-content button:not(#formulario button)");
    botoesIniciais.forEach(botao => {
    botao.style.display = "none";
  });
  }
  
  function fecharPopup() {
    document.getElementById("popup").style.display = "none";
  }
  
  function enviarFormulario(event) {
    event.preventDefault();
    alert("Cadastro realizado com sucesso!");
    fecharPopup();
  }
  