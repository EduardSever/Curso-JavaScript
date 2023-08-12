class Calculadora {
    sumar = (num1, num2) => {
        return parseInt(num1) + parseInt(num2);
    }
    restar = (num1, num2) => {
        return parseInt(num1) - parseInt(num2);
    }
    multiplicar = (num1, num2) => {
        return parseInt(num1) * parseInt(num2);
    }
    dividir = (num1, num2) => {
        return parseInt(num1) / parseInt(num2);
    }
    potenciar (num, exp){
        let numero = num;
        for(var i=0;i<exp; i++){
            numero = numero*num;
        }
        return numero;
    }
    raizCuadrada(num){
     return Math.sqrt(num);
    }
    raizCubica(num){
        return Math.cbrt(num);
    }
}
const calculadora = new Calculadora();

alert("¿Deseas realizar una operación? ");
let operación = prompt("1:Suma, 2:Resta, 3:Multiplicación, 4:Division, 5:Potencia, 6:Raiz Cuadrada, 7:Raiz Cubica");
if (operación == 1) {
    let numero1 = prompt("Ingresa el primer numero");
    let numero2 = prompt("Ingresa el segundo numero");
    resultado = calculadora.sumar(numero1, numero2);
    alert(`Tu resultado es: ${resultado}`);
} else if (operación == 2) {
    let numero1 = prompt("Ingresa el primer numero a restar");
    let numero2 = prompt("Ingresa el segundo numero");
    resultado = calculadora.restar(numero1,numero2);
    alert(`Tu resultado es: ${resultado}`)
} else if (operación == 3) {
    let numero1 = prompt("Ingresa el primer numero");
    let numero2 = prompt("Ingresa el segundo numero");
    resultado = calculadora.multiplicar(numero1,numero2);
    alert(`Tu resultado es: ${resultado}`)
} else if (operación == 4) {
    let numero1 = prompt("Ingresa el primer numero");
    let numero2 = prompt("Ingresa el segundo numero");
    resultado = calculadora.dividir(numero1,numero2);
    alert(`Tu resultado es: ${resultado}`)
}
else if(operación==5){
    let numero1 = prompt("Ingresa number: ");
    let numero2 = prompt("Ingresa number: ");
    resultado = calculadora.potenciar(numero1,numero2);
    alert(`Tu resultado es: ${resultado}`);
}
else if(operación==6){
    let numero1 = prompt("Ingresa number: ");
    resultado = calculadora.raizCuadrada(numero1);
    alert(`Tu resultado es: ${resultado}`)
}
else if(operación==7){
    let numero1 = prompt("Ingresa number: ");
    resultado = calculadora.raizCubica(numero1);
    alert(`Tu resultado es: ${resultado}`)
}
else {
    alert("No se ha encontrado la operación")
}