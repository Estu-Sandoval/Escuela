import Persona from "./persona.js";
import Estudiante from "./estudiante.js";
import Tarea from "./tarea.js";

export default class Docente extends Persona {
    static #contadorID = 1;
    #id;
    #asignatura;
    #estudiantesMatriculados;
    #registroEntregas;

    constructor(nombre, apellido,DNI,fecha_de_nacimiento,genero, asignatura) {
        super(nombre, apellido, DNI, fecha_de_nacimiento, genero);
        this.#id = `DOC-${Docente.#contadorID++}`;
        this.#asignatura = asignatura;
        this.#estudiantesMatriculados = [];
        this.#registroEntregas = [];
    }

    get id() { return this.#id; }
    get asignatura() { return this.#asignatura; }

    matricularEstudiante(estudiante) {
        if (estudiante instanceof Estudiante) {
            this.#estudiantesMatriculados.push(estudiante);
            console.log(`[Matrícula] ${estudiante.nombreCompleto} se ha inscrito en ${this.#asignatura}.`);
            estudiante.asignaturas = this.asignatura;
        }
    }

    asignarTarea(tema, fecha) {
        console.log(`[Tarea Nueva] Prof. ${this.nombreCompleto} asignó: "${tema}" en la materia ${this.#asignatura}.`);
        this.#estudiantesMatriculados.forEach(estudiante => {
            const nuevaTarea = new Tarea(this.#asignatura, tema, fecha);
            estudiante.recibirTarea(nuevaTarea);
        });
    }

    recibirEntrega(estudiante, tarea) {
        this.#registroEntregas.push({ alumno: estudiante, tarea: tarea });
        console.log(`[Entrega] El profesor recibió la tarea "${tarea.tema}" de ${estudiante.nombreCompleto}.`);
    }

    corregirTarea(estudiante, tema, nota, comentario) {
        const entrega = this.#registroEntregas.find(e => e.alumno === estudiante && e.tarea.tema === tema);
        
        if (entrega) {
            entrega.tarea.nota = { valor: nota, autor: this };
            entrega.tarea.comentario = { valor: comentario, autor: this };
            console.log(`[Calificado] Tarea "${tema}" de ${estudiante.nombreCompleto} corregida. Nota: ${nota}`);
        } else {
            console.log(`[Error] No se encontró ninguna entrega de ${estudiante.nombreCompleto} para la tarea "${tema}".`);
        }
    }
}