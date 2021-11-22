let usuario = [];

function exibir() {
  let u = "";
  usuario.forEach((nome) => {
    u += `<li>${nome}</li>`;
    
  });
  return u;
}

function vericarRepetindoUsuario(a) {
  if (usuario.includes(a)) {
    alert("Já existi");
    return;
  }
}

function adicionar() {
  let nome = document.querySelector("#nome").value;

  vericarRepetindoUsuario(nome);

  usuario.push(nome);
  mostrar.innerHTML = exibir();
}

btnadicionar.addEventListener("click", adicionar);
