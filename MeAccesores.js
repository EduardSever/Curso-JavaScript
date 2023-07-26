//Caracteristicas de la POO.
//Abstracción, Modularidad, Encapsulamiento, Polimorfismo.
//Otros conceptos de la POO. Herencia, Métodos estáticos, Metodos Accesores (Getters, Setters).
//En el siguiente ejercicio se utiliza la herencia.
class Animal {
    constructor(especie, edad, color) { //Los parametros son la abstracción.
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy un ${especie} y tengo ${edad} soy de color ${color}`
    }
    //Lo sigiente es un método de la clase animal
    verInfo() {
        document.write(this.info + "<br>");
    }
}
class Perro extends Animal {  // La case perro hereda da la clase animal
    constructor(especie, edad, color, raza) {
        super(especie, edad, color); //Con la palabra super heredamos de la clase animal
        this.raza = null;
    }
    set setRaza(newName){ //método accesor set
        this.raza=newName;
    }
    get getRaza(){  //método accesor get
        return this.raza;

    }
}
const perro = new Perro("perro", "9 años", "negro", "Pitbull");
const gato = new Animal("gato", "13 años", "azul");
const pajaro = new Animal("pajaro", "3 años", "verde");

perro.setRaza="Doberman"; //modifica el dato de raza.
document.write(perro.getRaza);