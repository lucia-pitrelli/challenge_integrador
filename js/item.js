const sumar = document.querySelector("#sumar");
const restar = document.querySelector("#restar");
const contar = document.querySelector("#contar");

sumar.addEventListener(
  "click",
  () => (contar.value = Number(contar.value) + 1)
);
restar.addEventListener("click", () => {
  contar.value = Number(contar.value) === 0 ? 0 : Number(contar.value) - 1;
});
contar.addEventListener(
  "change",
  () => (contar.value = Number(contar.value) < 0 && 0)
);
