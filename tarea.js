import Docente from "./docente.js";
export default class Tarea {
    #asignatura;
    #tema;
    #fechaEntrega;
    #nota = null;
    #comentario = "";
    #realizada = false;
    #entregada = false;

    constructor(asignatura, tema, fechaEntrega) {
        this.#asignatura = asignatura;
        this.#tema = tema;
        this.#fechaEntrega = fechaEntrega;
    }

    get asignatura() { return this.#asignatura; }
    get tema() { return this.#tema; }
    get fechaEntrega() { return this.#fechaEntrega; }
    get nota() { return this.#nota; }
    get comentario() { return this.#comentario; }
    get realizada() { return this.#realizada; }
    get entregada() { return this.#entregada; }

    set realizada(valor) { this.#realizada = valor; }
    set entregada(valor) { this.#entregada = valor; }

    set nota(payload) {
        if (payload && payload.autor instanceof Docente) {
            this.#nota = payload.valor;
        } else {
            console.error("ERROR: Acceso denegado. Solo un Docente puede modificar la nota.");
        }
    }

    set comentario(payload) {
        if (payload && payload.autor instanceof Docente) {
            this.#comentario = payload.valor;
        } else {
            console.error("ERROR: Acceso denegado. Solo un Docente puede modificar el comentario.");
        }
    }
}