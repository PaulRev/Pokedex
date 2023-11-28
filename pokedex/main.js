const pokeImg = document.getElementById("pokeImg");
const pokName = document.getElementById("pokName");

let currentIndex = 1;

/*API
  https://pokeapi.co/
*/
function obtenerPokemon(index) {
  const URL = "https://pokeapi.co/api/v2/pokemon/";

  fetch(URL + index)
    .then((response) => response.json())
    .then((data) => mostrarPokemon(data));
}

  /*
    Crear un alementos html.  
  */
function mostrarPokemon(data) {
  pokeImg.innerHTML = "";
  
  // Img
  const divImg = document.createElement("div");
  divImg.innerHTML = `
        <img src="${data.sprites.other["official-artwork"].front_default}">
    `;
  pokeImg.appendChild(divImg);

  // Name
  pokName.innerHTML = "";
  const divName = document.createElement("div");
  divName.innerHTML = `<p>${data.name}</p> `;

  pokName.appendChild(divName);
}

const btns = document
  .getElementById("btns")
  .addEventListener("click", function () {
    obtenerPokemon(currentIndex);
    currentIndex++;
  });




// Alerta: NO Responsive.(Width min - 500px)
  alert(`<---------NO RESPONSIVE---------> `);
