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
