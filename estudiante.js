import Persona from "./persona.js";
export default class Estudiante extends Persona {
    static #contadorID = 1;
    #id;
    #tareas = [];
    #asignaturas

    constructor(nombre, apellido,DNI,fn,gen) {
        super(nombre, apellido,DNI,fn,gen);
        this.#id = `EST-${Estudiante.#contadorID++}`;
        this.#asignaturas = [];
    }

    get id() { return this.#id; }
    get tareas() { return this.#tareas; }
    get asignaturas(){
        return this.#asignaturas;
    }

    set asignaturas(nuevaAsignatura){
        this.#asignaturas.push(nuevaAsignatura);
    }

    recibirTarea(tarea) {
        this.#tareas.push(tarea);
    }

    realizarTarea(tema) {
        const tarea = this.#tareas.find(t => t.tema === tema);
        if (tarea) {
            tarea.realizada = true;
            console.log(`[Progreso] ${this.nombreCompleto} ha resuelto la tarea: "${tema}".`);
        }
    }

    entregarTarea(tema, docente) {
        const tarea = this.#tareas.find(t => t.tema === tema);
        if (tarea && tarea.realizada) {
            tarea.entregada = true;
            docente.recibirEntrega(this, tarea);
        } else {
            console.log(`[Aviso] No puedes entregar la tarea "${tema}" porque no la has hecho o no existe.`);
        }
    }
}