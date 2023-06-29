
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

let pc1 ={
    nombre: "hp",
    procesador: "Intel core i7",
    ram: "16GB",
    disco: "160GB"
}

let nombre= pc1["nombre"];
let procesador = pc1["procesador"];
let ram = pc1["ram"];
let disco = pc1["disco"];

frase = `El nombre de mi pc es <b> ${nombre}</b><br> 
y tiene un procesador <b> ${procesador} </b> <br> 
y una ram de <b>${ram}</b> con un almacenamiento de <b> ${disco} </b> SDD`;

document.write(frase);