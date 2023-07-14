//Resolución de problemas Asistencias a Inasistencias
let cantidad = prompt("¿Cuantos alumnos son?");
let alumnosTotales=[];
for(i=0; i<cantidad; i++){
alumnosTotales[i]=[prompt("Nombre del alumno "+ (i+1)),0];
}
const tomarAsistencia = (nombre,p)=>{    
    let presencia =  prompt("Ingresa P para Presencia I para Inasistencia de "+ nombre +":");
    if(presencia=="p" || presencia == "P"){
        alumnosTotales[p][1]++;
    }
} 
for(i=0; i<3; i++){
    for(alumno in alumnosTotales){
        tomarAsistencia(alumnosTotales[alumno][0],alumno);
    }
}
for(alumno in alumnosTotales){
    let resultado = `${alumnosTotales[alumno][0]}:<br>
    ____________ Presentes: ${alumnosTotales[alumno][1]}<br>
    ____________ Ausencias: ${3 - alumnosTotales[alumno][1]}
    `;
    if(3 - alumnosTotales[alumno][1]>=2){
        resultado += " <b style='color:red'>REPROBADO POR INASISTENCIAS</b><br></br> "
    }else{
        resultado += "<br><br>"
    }
    document.write(resultado);
}
