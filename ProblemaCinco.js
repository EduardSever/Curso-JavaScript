const ObtenerInformacion = (materia)=>{
    materias = {
        fisica: ["Pedro", "kofla", "carmen", "Maria"],
        programacion: ["Pedro", "Carmen", "Juanito", "Maria"],
        logica: ["Pedro", "Carmen", "Juanito", "Maria"],
        quimica: ["Pedro", "Carmen", "Juanito", "Maria"]
    }
    if (materias[materia] !== undefined) {
        return [materias[materia],materia]
    } else {
        return false;
    }
}
let informacion = ObtenerInformacion("fisica");

if (informacion !== false) {
    let profesor = ObtenerInformacion("fisica")[0][0];
    alumnos = ObtenerInformacion("fisica")[0];
    alumnos.shift();
    document.write(`El profesor de: <b> ${informacion[1]}</b> es: <b style='color:red'>${profesor}</b><br>
    Los alumnos son: <b style="color:blue">${alumnos}</b> <br></br>
    `);
}
