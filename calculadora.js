//Declaramos variables
let operandoa=0;
let operandob=0;
let operacion;

function init(){
    //variables
    let a = document.getElementById('a');
    let b = document.getElementById('b');
    let resultado = document.getElementById('resultado');
    let suma = document.getElementById('suma');
    let resta = document.getElementById('resta');
    let multiplicacion = document.getElementById('multiplicacion');
    let division = document.getElementById('division');
    


//Clicks EV
a.onclick = () => {
     operandoa = parseInt(prompt("Ingrese un valor"));
    console.log(operandoa);
}

b.onclick = () => {
     operandob = parseInt(prompt("Ingrese un valor"));
    console.log(operandoa);
}
 


suma.onclick = () =>{
    
    operacion = operandoa + operandob;
    console.log(operacion)
    resultado.textContent = operacion;
    
}
resta.onclick = () =>{
    operacion = operandoa - operandob;
    console.log(operacion)
    resultado.textContent = operacion;
}
multiplicacion.onclick = () =>{
    operacion = operandoa * operandob;
    console.log(operacion)
    resultado.textContent = operacion;
}
division.onclick = () => {
    operacion = operandoa / operandob;
    console.log(operacion)
    resultado.textContent = operacion;
}
}