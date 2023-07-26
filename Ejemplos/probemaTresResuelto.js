// Resolución de problema.
// Crear un sistema para decidir que app descargar.
// Debe de contener la cantidad de descargas puntuación y peso.
// Se deben de poder instalar, abrir, cerrar y desinstalar.
class App {
    constructor(des, pun, pe) {
        this.descargas = des;
        this.puntuacion = pun;
        this.peso = pe;
        this.iniciada = false;
        this.instalada = false;
    }

    instalar(){
        if(this.instalada==false){
            this.instalada=true;
            alert("app instalada correctamente")
        }
    }
    desinstalar(){
        if(this.instalada==true){
            this.instalada=false;
            alert("App desinstalada")
        }
    }

    abrir() {
        if (this.iniciada == false && this.instalada==true) {
            this.iniciada = true;
            alert("app iniciada");
        }
    }
    cerrar() {
        if (this.iniciada == true && this.instalada==true) {
            this.iniciada = false;
            alert("app cerrada");
        }
    }
    information(){
        return`
        Descargas:<b>${this.descargas}</b><br>
        Puntuación:<b>${this.puntuacion}</b><br>
        Peso:<b>${this.peso}</b><br>
        `;
    }
}
apli = new App("19.00","6 estrellas","900mb");
apli1 = new App("18.00","1 estrellas","900mb");

apli.instalar();
apli.abrir();
apli.cerrar();
apli.desinstalar();

document.write(`
${apli.information()}</b><br>
${apli1.information()}</b><br>
`);