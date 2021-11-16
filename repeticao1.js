

var result= "";

for (let i = 0; i <=20; i++) {
    result+= `${i} <br>`;
    console.log("result")
    //impar
    if(i % 2 !==0){
        //numero anteriror dividido pelo numero posterior dá diferente de 0 é impar
        console.log(i)
    }
}
//decrescente 
/*for (let i=5; i>=0; i--){
    console.log(i)
}*/


final.innerHTML= result



