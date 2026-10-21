export default class Persona {
    #nombre;
    #apellido;
    #DNI;
    #genero;
    #fecha_de_nacimiento;

    constructor(nombre, apellido, DNI,fecha_de_nacimiento, genero) {
        this.#nombre = nombre;
        this.#apellido = apellido;
        this.#DNI = DNI;
        this.#genero = genero; 
        this.#fecha_de_nacimiento = fecha_de_nacimiento; 
    }

    get nombre() { return this.#nombre; }
    get apellido() { return this.#apellido; }
    get nombreCompleto() { return `${this.#nombre} ${this.#apellido}`; }
    get DNI(){ return this.#DNI;}
    get genero(){ return this.#genero;}
    get fecha_de_nacimiento(){return this.#fecha_de_nacimiento;}

    set nombre(nuevoNombre) { this.#nombre = nuevoNombre; }
    set apellido(nuevoApellido) { this.#apellido = nuevoApellido; }
    set genero(nuevoGenero){ this.#genero = nuevoGenero;}

    comer(alimento){
        console.log(`${this.#nombre} ${this.#apellido} está comiendo ${alimento}`)
    }

    dormir(){
        console.log("Zzzz...")
    }
}