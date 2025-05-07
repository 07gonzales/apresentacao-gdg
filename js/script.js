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
    const botoesIniciais = document.querySelectorAll(".modal-content > button");
  
    popup.style.display = 'flex';
    formulario.style.display = 'none';
  
    botoesIniciais.forEach(botao => {
      botao.style.display = "inline-block";
    });
  }

  const track = document.querySelector('.carousel-track');
  const images = Array.from(track.children);
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  
  let index = 0;
  let imageWidth = images[0].getBoundingClientRect().width + 20; 
  
  
  images.forEach(img => {
    const clone = img.cloneNode(true);
    track.appendChild(clone);
  });
  
  function updateCarousel() {
    imageWidth = images[0].getBoundingClientRect().width + 20;
    const translateX = -(imageWidth * index);
    track.style.transform = `translateX(${translateX}px)`;
  }
  
  
  function nextImage() {
    index++;
    
    
    if (index >= images.length) {
      index = 0;
      track.style.transition = 'none';
      updateCarousel();
      setTimeout(() => {
        track.style.transition = 'transform 0.5s ease';
        index++;
        updateCarousel();
      }, 20);
    } else {
      updateCarousel();
    }
  }
  

  function prevImage() {
    if (index <= 0) {
      index = images.length;
      track.style.transition = 'none';
      updateCarousel();
      setTimeout(() => {
        track.style.transition = 'transform 0.5s ease';
        index--;
        updateCarousel();
      }, 20);
    } else {
      index--;
      updateCarousel();
    }
  }
  

  nextButton.addEventListener('click', nextImage);
  prevButton.addEventListener('click', prevImage);
  window.addEventListener('resize', updateCarousel);
  

  track.style.transition = 'transform 0.5s ease';
  updateCarousel();


  document.addEventListener("DOMContentLoaded", function () {
    const btnVerMais = document.getElementById("btnVerMais");
    const cardsEscondidos = document.querySelectorAll(".card.escondido");

    btnVerMais.addEventListener("click", () => {
      cardsEscondidos.forEach(card => {
        card.style.display = "flex";
      });
      btnVerMais.style.display = "none";
    });
  });
  