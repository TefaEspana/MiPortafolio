// Cargar FOOTER
fetch("/paginas/footer.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("container-footer").innerHTML = data;
  });