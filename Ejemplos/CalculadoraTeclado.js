const sumar = (num1, num2)=>{
    return parseInt(num1) + parseInt(num2);
}
const restar = (num1, num2)=>{
    return parseInt(num1)-parseInt(num2);
}
const multiplicar = (num1, num2)=>{
    return parseInt(num1)*parseInt(num2);
}
const dividir = (num1, num2)=>{
    return parseInt(num1)/parseInt(num2);
}
alert("¿Deseas realizar una operación? ");
let operación  = prompt("1:Suma, 2:Resta, 3:Multiplicación, 4:Division");
if(operación == 1){
    let numero1=prompt("Ingresa el primer numero");
    let numero2=prompt("Ingresa el segundo numero");
    resultado=sumar(numero1,numero2);
    alert(`Tu resultado es: ${resultado}`);
}else if (operación ==2 ){
    let numero1=prompt("Ingresa el primer numero");
    let numero2=prompt("Ingresa el segundo numero");
    resultado=(numero1-numero2);
    alert(`Tu resultado es: ${resultado}`)
}else if(operación==3){
    let numero1=prompt("Ingresa el primer numero");
    let numero2=prompt("Ingresa el segundo numero");
    resultado=(numero1*numero2);
    alert(`Tu resultado es: ${resultado}`)
}else if(operación==4){
    let numero1=prompt("Ingresa el primer numero");
    let numero2=prompt("Ingresa el segundo numero");
    resultado=(numero1/numero2);
    alert(`Tu resultado es: ${resultado}`)
}
else{
    alert("No se ha encontrado la operación")
}