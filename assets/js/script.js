const start = document.querySelector("button");
const variavel = document.getElementById("texto");
const variavel2 = document.querySelector("#imagem");

const array = [
  ["INDIGNADO(A)", "./assets/img/macaco.jpg"],
  ["ESTILOSO(A)", "./assets/img/cachorro.jpg"],
  ["DEBOCHADO(A)", "./assets/img/camelo.jpg"],
  ["CONTEMPLATIVO(A)", "./assets/img/gatoOculos.jpg"],
  ["NARCISISTA", "./assets/img/macacoEspelho.jpg"],
  ["FOFO(A)", "./assets/img/esquilo.jpg"],
  ["PREGUIÇOSO(A)", "./assets/img/koala.jpg"],
  ["ESTUDIOSO(A)", "./assets/img/cachorroLivro.jpg"],
];

function randonPage() {
  let index;
  const newIndex = Math.floor(Math.random() * 8);
  if (newIndex == index) {
    newIndex++;
    if (newIndex >= array.length) {
      newIndex = 0;
    }
  } else {
    index = newIndex;
  }
  const random = array[index][0];
  const random2 = array[index][1];
  const lista = [random, random2];
  return lista;
}

start.addEventListener("click", () => {
  values = randonPage();
  variavel.innerText = `${values[0]}`;
  variavel2.src = `${values[1]}`;
});
