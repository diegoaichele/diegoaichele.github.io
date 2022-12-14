// Obtener el contenido del archivo JSON
$(document).ready(function() {
  const currentUrl = window.location.href;
  const parts = currentUrl.split("/"); // Divide el string en un array de subcadenas
  const lastPart = parts[parts.length - 1]; // Obtiene el último elemento del array
  const index = lastPart.substring(0, lastPart.indexOf("."));
  fetch("assets/json/investigacion.json")
    .then(response => response.json()) // Convertir el contenido a un objeto de JavaScript
      .then(json => {
        // Recorrer la lista de nombres y mostrar cada uno en un elemento de lista en la página
        for (const key in json) {
            if (json.hasOwnProperty(key)) {
              const value = json[key];
              // const li = document.createElement("li");
              const divitem = document.createElement("div");
              divitem.className = "item"
              const divmedia = document.createElement("div");
              divmedia.className = "media"
              const img = document.createElement("img");
              img.className = "mr-3 img-fluid post-thumb d-none d-md-flex"
              img.src = "assets/images/blog/" + value.imagen //"assets/images/blog/blog-post-thumb-6.jpg"  //Editable 
              img.alt = value.alt // "imagen de pescados"                          //Editable 
              const divbody= document.createElement("div");
              // Contenido de titulo
              const h3 = document.createElement("h3");
              h3.className = "title mb-1"
              const a = document.createElement("a");
              a.href = "blog-post.html?proyecto=" + value.src            // Editable
              a.textContent = value.name                         // Editable
              
              const divmeta = document.createElement("div");
              divmeta.className = "meta mb-1"
              const span = document.createElement("span");
              span.className = "date"
              span.textContent = value.tiempo         //Editable 
              const divintro = document.createElement("div");
              divintro.className = "intro"
              divintro.textContent = value.descripcion_corta        //Editable 

              const amore = document.createElement("a");
              amore.className = "more-link"
              amore.href = value.src   // Editable
              amore.textContent = "Fuente →"                    // Editable

              // Appending Child
              divitem.appendChild(divmedia)
              //divmedia.appendChild(img)
              divmedia.appendChild(divbody)
              divbody.appendChild(h3) 
              h3.appendChild(a)
              divmeta.appendChild(span)
              divbody.appendChild(divmeta)
              divbody.appendChild(divintro)
              divbody.appendChild(amore)
              
              document.querySelector("#investigacion-list").appendChild(divitem);  // Utilizar la clave y el valor del diccionario...
            }
          }
        });
});

