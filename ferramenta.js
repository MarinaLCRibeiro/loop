function a() {
  var forFerramenta = ferramenta.value;
  var quantidade = Number(qnt.value);
  var resultado = "";

  for (let contador = 0; contador < quantidade; contador++) {
    resultado += `${forFerramenta}| `;
  }

  result.innerHTML = resultado;
}
total.addEventListener("click", a);
/*
function b() {
  for (let contador = 3; contador > 0; contador--) {
      console.log(contador);
      
  }
}*/
