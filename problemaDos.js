//Se realiza un sistema para mostrar las particularidades de los 3 celulares
class Celular {
    constructor(color, peso, rdp, rdc, ram) {
        this.color = color;
        this.peso = peso;
        this.resolucionDePantalla = rdp;
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram;
        this.encendido = false;
    }
    presionarBotonEncendido() {
        if (this.encendido == false) {
            alert("celular prendido");
            this.encendido = true;
        } else {
            alert("celular apagado");
            this.encendido = false;
        }
    }
    reiniciar() {
        if (this.encendido == true) {
            alert("reinizando celular");
        } else {
            alert("el celular ya está apagado");
        }
    }
    tomarFoto() {
        alert(`foto tomada con resolución de: ${this.resolucionDeCamara}`)
    }
    grabar() {
        alert(`grabando video en ${this.resolucionDeCamara}`)
    }
    mobileInfo() {
        return `
        Color: <b>${this.color}</b><br>
        Peso: <b>${this.peso}</b><br>
        Pantalla: <b>${this.resolucionDePantalla}</b><br>
        Camara: <b>${this.resolucionDeCamara}</b><br>
        Memoria ram: <b>${this.memoriaRam}</b><br>
        `;
    }
}
class AltaGama extends Celular {
    constructor(color, peso, rdp, rdc,ram, rcde) {
        super(color, peso, rdp, rdc, ram);
        this.resolucionDeCamaraExtra=rcde;
    }
    grabarVideoLento() {
        alert("estas grabando en camara lenta");
    }
    reconocimientoFacial() {
        alert("vamos a iniciar un reconocimiento facial")
    }
    infoAltaGama() {
        return this.mobileInfo()+ `Resolución de camara Extra: <b>${this.resolucionDeCamaraExtra}</b><br>`
    }
}
celular1 = new AltaGama("pink", "9g", "4'", "full", "18gb","1tb");
celular2 = new AltaGama("Azul", "5g", "6'", "hd", "128gb","67gb");
celular3 = new AltaGama("Verde","6g", "1'", "hd", "32gb","65gb");
document.write(`
${celular1.infoAltaGama()}</b><br>
${celular2.infoAltaGama()}</b><br>
${celular3.infoAltaGama()}</b><br>
`);