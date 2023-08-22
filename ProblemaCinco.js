const ObtenerInformacion = (materia) => {
    materias = {
        fisica: ["Mendoza", "kofla", "carmen", "Kofla"],
        programacion: ["Arellano", "Karla", "Juanito", "Kofla"],
        logica: ["Juarez", "Guadalupe", "Dalia", "Kofla"],
        quimica: ["Smit", "Carmen", "Luisa", "Kofla"]
    }
    if (materias[materia] !== undefined) {
        return [materias[materia], materia,materias]
    } else {
        return materias;
    }
}
const ejecutarInformación = (materia) => {
    let informacion = ObtenerInformacion(materia);
    if (informacion !== false) {
        let profesor = informacion[0][0];
        alumnos = informacion[0];
        alumnos.shift();
        document.write(`El profesor de: <b> ${informacion[1]}</b> es: <b style='color:red'>${profesor}</b><br>
        Los alumnos son: <b style="color:blue">${alumnos}</b> <br></br>
        `);
    }
}
const cantidadDeClases = (alumno) => {
    let informacion = ObtenerInformacion();
    let clasesPresentes = [];
    let cantidadTotal = 0;
    for (info in informacion) {
        if(informacion[info].includes(alumno)){
            cantidadTotal++;
            clasesPresentes.push(info + " ");
        }
    }
    return `<b style='color:blue'>${alumno}</b> está en ${cantidadTotal} clases</b><br>
    Está cursando las clases: <b>${clasesPresentes}</b><br><br>
    `;
}
ejecutarInformación("fisica");
ejecutarInformación("programacion");

document.write(cantidadDeClases("Carmen")); 
document.write(cantidadDeClases("Arellano")); 
document.write(cantidadDeClases("Kofla")); 
document.write(cantidadDeClases("Saul")); 

