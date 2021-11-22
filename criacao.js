function c (){
var result="";
var frmCoelho= Number (coelho.value);
var frmAnos= Number (qnt.value)

for (let cont = 1; cont <=frmAnos ; cont++) {
    result += `${cont}º ano- ${frmCoelho} coelho <br>`;
    frmCoelho = frmCoelho*7;
  
    console.log(frmCoelho);
    
}

add.innerHTML=result



}

total.addEventListener("click", c);
/*function c (){
    var result="";
    var frmCoelho= Number (coelho.value);
    var frmAnos= Number (qnt.value)
    
    let total = 0;


    for(let cont = 1; cont <= frmAnos; cont++){

        if(cont == 1) {
            
            total = frmCoelho;
        }else{
            
           total = total * 7; // = 21
           
        }
        result += `${cont}º ano- ${frmCoelho} coelho <br>`;

    }
    add.innerHTML=result

}
total.addEventListener("click", c);*/