/*let n = "Marina";
let total= ""
for (cont = 1; cont <= 10; cont++) {
  total += `${cont } Nome:${n} \n`;
  
}
console.log(total);*/
/*let n = ["Marina", "Maria", "Marta", "Milena", "Ana", "João"]; 

for (let cont = 0; cont < n.length; cont++) {
  console.log(n[cont]);
}*/
let frutas = ["Banana", "Maça", "Abacaxi", "Melancia"];

const imprimir = (valor) => console.log(valor);//declaração da função

const imprimir2 = (valor) => {
  console.log(valor);
};

const imprimir3 = function (valor) {
  console.log(valor);
};

//frutas.forEach(imprimir) precisa chamar função
/*frutas.forEach((value, index) => {
  console.log(value);
});*/
frutas.push("Melão")
console.log(frutas)
frutas.unshift("Morango")
console.log(frutas)
frutas.forEach((value,index) => console.log(index + " - " + value))
