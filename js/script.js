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

  function abrirPopupNovamente() {
    const popup = document.getElementById('popup');
    const formulario = document.getElementById('formulario');
  
    popup.style.display = 'flex';
    formulario.style.display = 'none'; // volta pra tela inicial do modal
  }
  

  const track = document.querySelector('.carousel-track');
  const images = Array.from(track.children);
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  
  let index = 0;
  let interval;
  
  // Deixa imagem central focada
  function updateCarousel() {
    images.forEach((img, i) => {
      img.classList.toggle('active', i === index);
    });
  
    const imageWidth = images[0].getBoundingClientRect().width + 20;
    const trackWidth = imageWidth * images.length;
    const translateX = -(imageWidth * index - (window.innerWidth / 2 - imageWidth / 2));
  
    track.style.transform = `translateX(${translateX}px)`;
  }
  
  // Mover para próxima imagem
  function nextImage() {
    index = (index + 1) % images.length;
    updateCarousel();
  }
  
  // Mover para imagem anterior
  function prevImage() {
    index = (index - 1 + images.length) % images.length;
    updateCarousel();
  }
  
  
  // Navegação por botões
  nextButton.addEventListener('click', () => {
    nextImage();
  });
  
  prevButton.addEventListener('click', () => {
    prevImage();
  });
  
  // Resize responsivo
  window.addEventListener('resize', updateCarousel);
  
  // Iniciar
  updateCarousel();
  
  
