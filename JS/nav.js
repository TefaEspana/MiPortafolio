fetch("/paginas/navbar.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("container-navbar").innerHTML = data;

    const menuToggle = document.querySelector('.menu-toggle');
    const listaNavbar = document.querySelector('.lista-navbar');

    if (menuToggle && listaNavbar) {
        menuToggle.addEventListener('click', () => {
            listaNavbar.classList.toggle('active');
        });
    } else {
        console.warn("Algún elemento del navbar no fue encontrado");
    }
  });