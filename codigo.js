class animal {
    constructor(especie, edad, color) {
        this.especie = especie;
        this.edad = edad;
        this.color=color;
    }
}

let perro = new animal("Perro", "23 años", "Negro");

document.write(perro.especie);
console.log(perro);



