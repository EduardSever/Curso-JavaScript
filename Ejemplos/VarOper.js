
/*Ejemplo de variable*/
/*recipiente="papel";
alert(recipiente)*/

/*Imprimir una variable*/
/*let nombre = prompt("Dime tu nombre");
alert("Hola buenos dias " + nombre);*/

/*Operadores de variables*/
/*let numero=10;
numero -=5;
document.write(numero);*/

/*Operando resto */
/*let numero=50;
numero %=6;
document.write(numero);*/

/*exponencialidad*/
/*let numero=10;
numero **=2;
document.write(numero);*/

/*Operdores aritmeticos Imprime negativo*/
/*numero1 = 10;
numero2 = 5;
resultado = -numero1;
alert(resultado);*/

/*Concatenación*/
/*saludo = " ¡Hola pedro! ";
pregunta= " ¿Como estas? ";
respuesta=saludo+pregunta;
document.write(respuesta);*/
/*Contatenación de Strings and numbers*/
/*numero1 = "53";
numero2 = 8;
frase = numero1.concat(numero2);
document.write(frase);*/

/*Concatenación*/
/*nombre = "Jose Perez";
frase = " Soy "+nombre+" y estoy caminando";
document.write(frase); */

// La mejor manera de concatenar
// nombre = "Jose Perez";
// frase = `Soy ${nombre} y estoy caminando`;
// document.write(frase);
// Ejemplo de operadores logicos
// let numero = 23;
// let numero1 = 23;
// document.write(numero==numero1);
// let numero = 23;
// let numero1 = 23;
// iniquality
// (a!=b)
// document.write(numero!=numero1);

//Lo siguiente compara solo el valor no el tipo de dato, por los tanto es Veradero.
// numero=5;
// let texto01="5";
// let texto02="Suerte";
// // equality (a==b)
// document.write(texto01==numero);

// Lo siguiente compara todo el valor y el tipo de dato, por lo tanto false.
// numero=5;
// let texto01="5";
// let texto02="Suerte";
// // equality (a==b)
// document.write(texto01===numero);


// let numeroo = 10;
// numeroo **= 2;
// nombre = "Alan";
// frase=`Soy un crat ${nombre} y tengo ${numeroo} años`;
// document.write( frase);


// let numero = 23;
// let numero2= 13;
// let texto = "23";
// let texto2 ="texto 2";
// //El resultado es false ya que solo se evalua el valor;
// document.write(texto==numero);
// //El resultado es false ya que extrictamente no son iguales
// document.write(texto===numero);

// let numero = 23;
// let numero2= 13;
// let texto = "23";
// document.write(texto !== numero);

// num1=12;
// num2=24;
// num3=25;
// num4=92;
// num5=91;
// //Al desarrollo de los operadores logicos resulta true;
// op=(num5>num2 && num4<num3)||(!(num1===num2)|| num3 !=num3 );
// //Resultado de los operadores logicos;
// op1=(true);
// document.write(op);


// {
//     alert("hola");
//     document.write("Jhon")
// }
// nombre = "Salomon";
// apellido = "Mosoline";

// if (nombre == "Salomo") {
//     // alert("Soy " + nombre);
// }
// if (apellido == "Mosolin") {
//     alert(" "+ apellido);
// }
// else {
//     alert("No es " + apellido);
// }
//Arrays
// let flores = ["rosa","jazmin","dalia","nueva",9,1,6,"Margarita"];
// document.write(flores[4]);

//Arrays asociativos.
// let pc1 = {
//     nombre: "hp",
//     procesador : "Intel",
//     ram : "569GB",
//     rom: "8GB"
// };
// let pc2 =[ "Dell", "Intel core i9", "569GB", "8GB"];

// document.write(pc2);
//Este segundo array es mas iteractivo.
// document.write(pc1["nombre"]);

// let pc1 ={
//     nombre: "hp",
//     procesador: "Intel core i7",
//     ram: "16GB",
//     disco: "160GB"
// }

// let nombre= pc1["nombre"];
// let procesador = pc1["procesador"];
// let ram = pc1["ram"];
// let disco = pc1["disco"];

// frase = `El nombre de mi pc es <b> ${nombre}</b><br> 
// y tiene un procesador <b> ${procesador} </b> <br> 
// y una ram de <b>${ram}</b> con un almacenamiento de <b> ${disco} </b> SDD`;

// document.write(frase);

// let numero = 0;

// do{
//     document.write(numero+ "<br>");
//     numero++;
// }
// while(numero<=3)
//Ciclo while y do while
// let numero = 0;
// do{
//     document.write(numero+ "<br>");
//     numero++;
// }
// while(numero<=3)

// let numero = 0;

// while(numero<100){
//     numero++;
//     document.write(numero+"<br>");
//     if(numero==5){ 
//         break;
//     }
// }
// document.write("fin");

// //let i=80;
// for(let i=0;i<=6 ;i++){
//     if(i==3){
//         continue;
//     }
//     document.write(i+"<br>");
// }

/**
//El siguiente bucle imprime en indice del array. 
let animales = ["gato", "perro", "liebre", "conejo"];
for (animal in animales) {
    document.write(animal + "<br>");
}
document.write("<br>")

//El siguiente bucle imprime los valores del indice del array.
for (animal of animales) {
    document.write(animal + "<br>");
}
 */

/**
array1 = ["maria","josefa", "roberto",];
array2 = ["pedro","marcelo", array1, "josefina"];
//La siguiente linea es la sentencia label
forRan:
for(let array in array2){

    if(array == 3){
        for (let array of array1){
            if(array=="maria"){
                //El siguiente continue salta a maria y sigue imprimiendo.
                continue;
                //Salta toda la iteración a partir de maria. Ya no imprime.
                continue forRan;
            }
            document.write(array + "<br>");
        }
    }else{
        document.write(array2[array]+"<br>");
    }
}
*/

/** 
//Ejemplo de función.
function saludo(){
    respuesta = prompt("¡Hola Luis! ¿Como fue tu día?");
if(respuesta=="bien"){
    alert("Me alegra")
}else{
    alert("Que triste")
}
};
//En las siguientes lineas se imprime la función
saludo();
saludo();
saludo();
saludo();
*/
/** 
//Uso de return
function saludar(){
    alert("hola");
    return "la función se ejecuto correctamente";
}
let saludo = saludar();
document.write(saludo);
*/

/**
//Se crea una función para realizar una suma por medio de parametros.
function suma(num1, num2){
    resul = num1 + num2;
    document.write(resul);
    document.write("<br>");
}
suma(6,9);
*/

/** 
               En los siguientes bloques de código son dos maneras de crear funciones 
//Se crea una primera función 
function saludar(nombre){
    let frase = `¡ Hola ${ nombre } ! ¿Como estás?`;
    document.write(frase);
}
saludar("petrobit");

//Se crea una segunda función 
const saludar = function(nombre){
    let frase = `¡ Hola ${ nombre } ! ¿Como estás?`;
    document.write(frase);
}
saludar("petrobit");
*/

/**
               //funsiones con parametro.
//función no fecha 
const saludar = function(nombre){
    let frase = `¡ Hola ${ nombre } ! ¿Como estás?`;
    document.write(frase);
}
//función flecha
const saludar=(nombre)=>{
    let frase = `¡ Hola ${ nombre } ! ¿Como estás?`;
    document.write(frase);
}
saludar("petrobit");
*/

/**
//función flecha
const saludar=nombre =>{
    let frase = `¡ Hola ${ nombre } ! ¿Como estás?`;
    document.write(frase);
}
saludar("petrobit");
*/

//funciones
/** 
const saludar = (nombre)=>{
    document.write("hola como estas? "+ nombre)
}
saludar("julian")
*/
//Problema resuelto.
//Dejar pasar los mayores edad pagando la entrada
//Pasa gratis si eres la primer persona en entrar despues de las 2 am




/**                    //problema
//problema B. Dejar de pasar los mayores de esdad;
//La primer persona que entre despues de las 2 am, no paga;
//Esta es una variable. La entrada gratis se va a convertir en libre que es igual a free
let free = false;
//función 
const validarCliente = (time)=>{
    let edad = prompt("¿Cual es tu edad?");
    if(edad>18){
        if(time>=2 && time < 7 && free==false ){
            alert("puedes pasar gratis eres la primer persona en entrar despues de las 2 am");
            free = true;
        }else{
            alert(`son las ${time }:00 Hs y puedes pasar, pero tienes que pagar la entrada`);
        }
    }else{
        alert(`Sos menor de edad y no puedes pasar`);
    }
}
// validarCliente(23);
// validarCliente(24);
// validarCliente(0.2);
// validarCliente(0.6);
// validarCliente(1);
validarCliente(2);
validarCliente(2);
// validarCliente(2.4);
// validarCliente(3);
*/

























