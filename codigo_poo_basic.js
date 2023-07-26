//La siguiente estructura es una clase de nombre animal
//Se reprensentan los conceptos básicos de la POO.
//Clase, Objeto, Atributo, Método, Constructor, Instanciación.
class animal {
    constructor(especie, edad, color) {
        this.especie = especie;
        this.edad = edad;
        this.color=color;
        this.info=`Soy un ${especie} y tengo ${edad} soy de color ${color}`
    }
    //Lo sigiente es un método de la clase animal
    verInfo(){
        document.write(this.info + "<br>");
    }
}
let perro = new animal("perro", "23 años", "negro");
let gato = new animal("gato", "2 años", "azul");
let pajaro = new animal("pajaro", "3 años", "verde");

// document.write(perro.info);
// document.write(gato.info);
// document.write(pajaro.info);

perro.verInfo();
gato.verInfo();
pajaro.verInfo();