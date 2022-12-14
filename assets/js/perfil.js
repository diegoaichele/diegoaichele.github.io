// Obtener el contenido del archivo JSON
$(document).ready(function() {
  const currentUrl = window.location.href;
  const parts = currentUrl.split("/"); // Divide el string en un array de subcadenas
  const lastPart = parts[parts.length - 1]; // Obtiene el último elemento del array
  const index = lastPart.substring(0, lastPart.indexOf("."));
  fetch("assets/json/perfil.json")
    .then(response => response.json()) // Convertir el contenido a un objeto de JavaScript
      .then(json => {
        const value = json
        bioname = document.querySelector("#bio-name")
        bioname.textContent = value.namebio
        bioabout = document.querySelector("#bio-about")
        bioabout.textContent = value.about
        biolongabout = document.querySelector("#long-bio")
        biolongabout.textContent = value.longbio
        bioimage = document.querySelector("#bio-image")
        bioimage.src = value.image
        biotwitter = document.querySelector("#twitter")
        biotwitter.src = value.twitter
        biolinkedin = document.querySelector("#linkedin")
        biolinkedin.src = value.linkedin
        biogithub = document.querySelector("#github")
        biogithub.src = value.github
        biostyle = document.querySelector("#theme-style")
        biostyle.href = value.style
        $('#theme-style').attr('href', value.style)
        
        biopdf = document.querySelector("#PDF")
        biopdf.href = value.PDF
   
        for (const key in value["talento"]) {
          const litalento = document.createElement("li");
          //litalento.attr("style","text-align: justify")
          litalento.style = "text-align: justify"
          litalento.textContent = key + ":  "+  value.icon.repeat(value["talento"][key])  +  ".- " + value["talentomoreinfo"][key]
          document.querySelector("#talento").appendChild(litalento);
        }

        biobio = document.querySelector("#titlepage")
        biobio.textContent = value.titlehome
        });
});

