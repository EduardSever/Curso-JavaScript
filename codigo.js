//Cadenas
// let cadenna = "Holis "
// let cadenna2 = " jjjjj"
// unir = cadenna.concat(cadenna2);
// document.write(unir);

//Al concatenar una cadena lo que realmente pasa es que se crea un String
// let cadena = new String("Cadena de prueba lo que se crea es un ");//Esto es un objeto, se crea un objeto String.
// let cadena2 = " String";
// unir = cadena.concat(cadena2);
// document.write(unir);
/* 
//comparación de cadenas
let cadena = new String("E sto es una caden 1");
let cadena1= new String("E sto es una caden ");

result = cadena.startsWith(cadena1); //Comparando inicio de una cadena
document.write(result);

result1 = cadena.endsWith(cadena1);//comparando el final de una cadena
document.write(result1); */

/* //Cadenas
let cadena = new String("Esto es una cadena de comercio");
let cadena1= new String("ena"); //Busca una cadena dentro de otra cadena
result = cadena.includes(cadena1); //Comparando inicio de una cadena
document.write(result); */

//Acceso a cadenas
/* let cadena = "pedro es un tarado inmaduro";
resultado = cadena.indexOf("inmaduro"); //se accede a la posición de de la cadena.
document.write(resultado); //Como resultado nos imprime un 19, pues la posición inicia en la letra i.

let textcadena = "pedro es un tarado inmaduro";
resultado = textcadena.indexOf("patito"); //se accede a la posición de de la cadena. En este caso la posición patito no existe
document.write(resultado); //Como resultado nos imprime un -1, pues la posición patito dentro de la cadena de texto no existe. */

//Acceso a cadenas
//let cadena = "pedro es un tarado inmaduro inmaduro inmaduro inmaduro";
//resultado = cadena.lastIndexOf("inmaduro"); //se accede a la posición de de la cadena.
//document.write(resultado); //Como resultado nos imprime un 46, pues la posición inicia en la letra i.

/* let cadena = "pedro es un tarado inmaduro inmaduro inmaduro inmaduro west";
document.write(cadena[55]+cadena[56]+cadena[57]+cadena[58]); //Como resultado nos imprime una w, el numero 46 está en la letra w. */

// let cadena  = "";
// resultado = cadena.padStart(9,"casa_");
// document.write(resultado);

// let S  = "mx_";
// resultado = S.padEnd(7,"casa_");//esto se declara para rellenar la cadena S.
// document.write(resultado);
/*
let cadena  = "mx_"; //Si esta cadena tine mas 7 caracteres no tomara los caracter que son de relleno.
resultado = cadena.padEnd(7,"w"); //Cadena de caracteres de relleno
document.write(resultado); //Imprime el resultado agrega los caracter de relleno pues en la cedana solo tiene tres carecter.*/
/*
let cadena = "abc ";//declaración de cadena
resultado=cadena.repeat(5);//el numero de aquí hace repitir la cadena 
document.write(resultado);*/
/*
                  //Cadenas con función split
let cadena = "Hola María donde estas?";//Aquí se declara la cadena y está cadenada esta dividida como un array
resultado=cadena.split(" ");//aquí no se puede ver una coma pero existe una.
document.write(resultado[3]);//se accede a la tercera posición de la cadena.
*/
/*
let cadena = "Hola María donde estas?";//Aquí se declara la cadena y está cadenada esta dividida como un array
resultado=cadena.split("a");//se elimina la palabra como
document.write(resultado);//Se imprime la cadena
*/
/*
let cadena = "ABCDEFG";//Aquí se declara la cadena
resultado=cadena.substring(0,2);//El cero que es el primer valor es la posición 
//y el 1 que es el segundo valor es el inicio
document.write(resultado);//Se imprime la cadena*/
/*
let cadena = "Los Animales son irracionales";//Aquí se declara la cadena
resultado=cadena.toLowerCase();// Con toLowerCase, Se traduce la cadena a minusculas
document.write(resultado);//Se imprime la cadena en minusculas.*/
/*
let cadena = "Los Animales son irracionales";//Aquí se declara la cadena
resultado=cadena.toLowerCase();// Con toLowerCase, Se traduce la cadena a minusculas
document.write(resultado);//Se imprime la cadena en minusculas.*/

/*let cadena = "Los Animales son irracionales";//Aquí se declara la cadena.
resultado=cadena.toUpperCase();// Con toUpperCase, Se traduce la cadena a mayusculas
document.write(resultado);//Se imprime la cadena en mayusculas.*/

/*let cadena = ["Maria ","José"]; //Se declara una cadena de array
resultado=cadena.toString();// Con toString se convierte la cadena.
document.write(resultado[7]);//Se imprime la posición 7 de la cadena, en este caso la letra J.*/

/*let cadena = ["Maria ","José"]; //Se declara una cadena de array
resultado=cadena.toString();// Con toString se convierte la cadena.
document.write(resultado[7]);//Se imprime la posición 7 de la cadena.*/

/*let cadena = " hola"; //Declaración de cadena
resultado=cadena; 
document.write(resultado.length); // Se imprime en tamaño de la cadeba tomando en cuenta los espacios en blanco.
//el resultado anterior es 5.
*/

/*//El resultado del siguiente ejecicio es 4
let cadena = "   hola  "; //Declaración de cadena 
resultado=cadena.trim(); //trim() elimina los espacios vacios de una cadena.
document.write(resultado.length);//length contabiliza solo los careateres de la cadena usando trim();
*/
/*//El resultado del siguiente ejecicio es 5
let cadena = " hola  "; //Declaración de cadena 
resultado=cadena.trimEnd(); //trimEnd() elimina los espacios vacios que se encuentran al final de una cadena.
document.write(resultado.length);//length contabiliza los espacios con trimEnd(); */

/*//El resultado del siguiente ejecicio es 5
let cadena = "     hola "; //Declaración de cadena 
resultado=cadena.trimStart(); //trimStart() elimina los espacios vacios que se encuentran al inicio de una cadena.
document.write(resultado.length);//La propiedad length contabiliza los espacios con trimStart(); */

/*let cadena = ["Jorge"," Julia"," Lucas"," Javier"]; //Se declara con let un array
document.write(cadena+"<br>"); //Se imprime todo el array
resultado=cadena.pop(); //Con la propiedad pop() se optiene del array el ultimo valor
document.write(resultado+"<br>"); //Se imprime el ultimo valor del array
document.write(cadena); //aquí se imprime lo que queda del array despues de utlizar la propiedad pop();*/

/*let cadena = ["Jorge"," Julia"," Lucas"," Javier"]; 
document.write("Array original: <b>"+cadena+"</b><br>");//Se imprime el array completo.
resultado=cadena.shift();//Se elimina el primer valor del arreglo.
document.write("Elemento removido: <b style='color:red'>"+resultado+"</b><br>");//Solo se imprime el valor removido 
document.write("Resultado: <b>"+cadena+"</b>");//Se imprime el arreglo sin el valor removido.*/

/*let cadena = ["Jorge"," Julia"," Lucas"," Javier"]; //array
document.write("Array original: <b>"+cadena+"</b><br>"); //Se imprime array original
resultado=cadena.push("Galindo "); //Agrega el valor de Galindo al final del array
document.write("Resultado: <b>"+cadena+"</b>");//Se imprime array con un nuevo valor.
document.write("Contador:  <b>"+resultado+"</b>");//Se imprime 5 que es la cantidad de valores*/

/*let cadena = ["Jorge"," Julia"," Lucas"," Javier"]; //array
document.write("Array original: <b>"+cadena+"</b><br>"); //Se imprime array original
resultado=cadena.reverse(); //Se modifica el array
document.write("Resultado: <b>"+cadena+"</b>");// se imprime el array modificado de manera inversa.*/

/*let cadena = [1,2,3,4]; //se crea el array
document.write("Array original: <b>"+cadena+"</b><br>"); //Se imprime array original
resultado=cadena.unshift(8,9,10);//se agrega valores al array
document.write("Resultado: <b>"+cadena+"</b>");//se imprime array con valores agregados.*/

/*let cadena = [7,5,4,1,3,6,7,9]; //se crea el array
document.write("Array original: <b>"+cadena+"</b><br>"); //Se imprime array original
resultado=cadena.sort();//sort() ordenada los valores que se ingresan en el array de menor a mayor.
//La propiedad sort() ordena tambien de manera alfabetica.
document.write("Resultado: <b>"+cadena+"</b>");//se imprime el array con los valores ordenados.*/

/*let cadena = ["Camaro"," Mustang"," ferrari"," Corvette"," Challenger"," Viper"]; //se crea el array
document.write("Array original: <b>"+cadena+"</b><br>"); //Se imprime array original
cadena.splice(1,6," Pontiac");//splice() esta propiedad agrega y elimina valores.
document.write(cadena); //se imprime array modificada*/
               //MÉTODOS ACCESORES.
/*let cadena = ["José","Paulino","Martha"]; //array declarado
document.write("Array original:  <b>"+cadena[0]+"</b><br>");//Se imprime array original
let result=cadena.join(); //Propiedad join se modifica a un string
document.write(result[0]);//Se imprime la modificaciónn //El array se convierte a una cadena de texto*/

/*let cadena = ["José","Paulino","Martha"]; //array declarado
document.write("Array original: "+cadena+"<br>");//Se imprime array original
let result=cadena.join("<br>Ciudadano: "); //Propiedad join modifica la cadena separando por espacios o etc los volores del array
document.write("Ciudadano: "+ result);//Se imprime la modificaciónn //El array se convierte a una cadena de texto*/

/*let cadena = ["José","Paulino","Martha","Marisol","Hector"]; //array declarado
document.write("Array original: "+cadena+"<br>");//Se imprime array original
let result=cadena.slice(0,4);//El primer valor es el inicio y el segundo es todos los volores que quiero mostrar
document.write(result); */

/*let nombres=["Pablo","María","Arturo","Lucas","Paulino","Mascota"];
r=nombres.filter(nombre=>nombre.length>6); //Con el filter se puede usar mas que el forEach
document.write(r +"<br>");//Imprime solo los nombres que tienen mas de 6 letras. 
//El filter y el forEach se podria desir que se usan para lo mismo.
*/
/*numero=Math.random()*100;
numero=n.toString();
num=numero[0]+numero[1];
if(numero[1]=="."){
num = numero[0];
}
document.write(num);*/
/*
//El siguiente ejercicio permite mostrar un numero aleactorio entre el 0 y 100
for(var i=0; i<100;i++){
    let numero=Math.random()*99;
    numero = Math.round(numero+1);
    document.write(numero+"<br>");
}*/

let numero = Math.PI;
document.write(numero);
























