function Calcular() {
  var n1 = Number(numero.value);
  var contador =0;
  var resultado="";

  while (contador <= 10) {
    resultado+= n1 + "x" + contador + "=" + n1 * contador +"<br>";
       //contador= contador+1;
    contador++;

  }
  result.innerHTML=resultado

}

btnCalcular.addEventListener("click", Calcular);
//id.value no console (var troco= 20 -)
