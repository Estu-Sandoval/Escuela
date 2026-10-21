import Estudiante from './estudiante.js'

const profesor = new Docente("Walter", "White", "Química");
const alumno1 = new Estudiante("Jesse", "Pinkman");
const alumno2 = new Estudiante("Todd", "Alquist");

console.log(`Profesor creado: ${profesor.nombreCompleto} (ID: ${profesor.id})`);
console.log(`Alumno 1 creado: ${alumno1.nombreCompleto} (ID: ${alumno1.id})`);
console.log(`Alumno 2 creado: ${alumno2.nombreCompleto} (ID: ${alumno2.id})\n`);

profesor.matricularEstudiante(alumno1);
profesor.matricularEstudiante(alumno2);

profesor.asignarTarea("Destilación básica", "2026-07-01");

alumno1.realizarTarea("Destilación básica");
alumno1.entregarTarea("Destilación básica", profesor);

profesor.corregirTarea(alumno1, "Destilación básica", 10, "Excelente trabajo, ¡aplicaste bien los conceptos!");

console.log("\n[Intento de Hackeo por el alumno]");
const tareaDeJesse = alumno1.tareas[0];
tareaDeJesse.nota = { valor: 2, autor: alumno1 };