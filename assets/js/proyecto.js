// Obtener el contenido del archivo JSON
$(document).ready(function() {
  const currentUrl = window.location.href;
  const parts = currentUrl.split("="); // Divide el string en un array de subcadenas
  const lastPart = parts[parts.length - 1]; // Obtiene el último elemento del array
  const index = lastPart.substring(0, lastPart.indexOf("."));
  fetch("assets/json/proyectos.json")
    .then(response => response.json()) // Convertir el contenido a un objeto de JavaScript
      .then(json => {
        
        value = json[lastPart]
        document.querySelector("#titulo").textContent = value.name 
        document.querySelector("#tiempo").textContent = value.tiempo 
        for (paragraph in value.descripcion_larga){
          const para = document.createElement("p")
          para.style = "text-align: justify"
          para.textContent = value.descripcion_larga[paragraph] 
          document.querySelector("#text-description").appendChild(para)
        }
        document.querySelector("#banner").src = value.banner
        
        });
});

