/*C. Cofla ya vio las 12 materias y se decicio en cual se va a inscribir así que en tres días lo hará, 
el problema es que se rompio el sistemas de ecuaciones.
//Crear una función para preguntarle a cofla en que materia se quieren escribir.
//Si hay 20 alumnos anotados en la materia nergarle la inscripción.
//Si hay menos de 20 alumnos inscribir a Cofla y añadirlo a la lista de alumnos.
*/
let materias = {
    fisica: ["Mendoza", "Martha", "Carmen", "Kofla"],
    programacion: ["Arellano", "Karla", "Juanito", "Kofla"],
    logica: ["Juarez", "Guadalupe", "Dalia", "Kofla"],
    quimica: ["Smit", "Xechool", "Luisa", "Kofla"]
}
const inscribir = (alumno,materia)=>{
    personas = materias[materia];
    if(personas.length >=21){
        document.write(`Lo siento <b> ${alumno}, las clases de <b style='color:green'> ${materia}</b> ya estan llenas <br>`);
    }else{
        personas.push(alumno);
        if(materia=="fisica"){
            materias={
                fisica: personas,
                programacion: materias['programacion'],
                logica: materias['logica'],
                quimica: materias['quimica']
            }
        }
        else if(materia=="programación"){
            materias={
                fisica: materias['fisica'],
                programacion: personas,
                logica: materias['logica'],
                quimica: materias['quimica']
            }
        }
        else if(materia=="logica"){
            materias={
                fisica: materias['fisica'],
                programacion: materias['programacion'],
                logica: personas,
                quimica: materias['quimica']
            }
        }
        else if(materia=="quimica"){
            materias={
                fisica: materias['fisica'],
                programacion: materias['programacion'],
                logica: materias['logica'],
                quimica: personas
            }
        }
        document.write(`¡Felicidades ${alumno}! te has inscrito a ${materia} correctamente. <br>`);
    }
}
document.write(materias['fisica']+ "<br>");
inscribir("Pamela","fisica");
inscribir("Felipa ","fisica");
inscribir("Fernanda ","fisica");
inscribir("Julia ","fisica");
inscribir("Marcos ","fisica");
inscribir("Shorat ","fisica");
inscribir("Xochilt ","fisica");
inscribir("Maria ","fisica");
inscribir("Herctor ","fisica");
inscribir("Balbino ","fisica");
inscribir("Paulino ","fisica");
inscribir("Kansas ","fisica");
inscribir("Estrella ","fisica");
inscribir("Paula ","fisica");
inscribir("Fidelina ","fisica");
inscribir("Camelina ","fisica");
inscribir("Katalina ","fisica");
inscribir("Demetri ","fisica");
document.write("<br>"+`Alumnos registrados: `+ materias['fisica']);