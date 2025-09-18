import { v4 as uuidv4 } from "uuid";

class TurnoMascota {
    #nombreDuenio;
    #nombreMascota;
    #email;
    #tipoMascota;
    #telefono;
    #servicio;
    #descripcion;
    #fecha;
    #id;
    #estado;

    constructor(nombreDuenio, nombreMascota, email, tipoMascota, telefono, servicio, descripcion, fecha, id, estado) {
        this.#nombreDuenio = nombreDuenio;
        this.#nombreMascota = nombreMascota;
        this.#email = email;
        this.#tipoMascota = tipoMascota;
        this.#telefono = telefono;
        this.#servicio = servicio;
        this.#descripcion = descripcion;
        this.#fecha = fecha;
        this.#id = uuidv4();
        this.#estado = "Pendiente";
    }

    // Getters
    get nombreDuenio() {
        return this.#nombreDuenio;
    }
    get nombreMascota() {
        return this.#nombreMascota;
    }
    get email() {
        return this.#email;
    }
    get tipoMascota() {
        return this.#tipoMascota;
    }
    get telefono() {
        return this.#telefono;
    }
    get servicio() {
        return this.#servicio;
    }
    get descripcion() {
        return this.#descripcion;
    }
    get fecha() {
        return this.#fecha;
    }
    get id() {
        return this.#id;
    }
    get estado() {
        return this.#estado;
    }

    // Setters
    set nombreDuenio(value) {
        this.#nombreDuenio = value;
    }
    set nombreMascota(value) {
        this.#nombreMascota = value;
    }
    set email(value) {
        this.#email = value;
    }
    set tipoMascota(value) {
        this.#tipoMascota = value;
    }
    set telefono(value) {
        this.#telefono = value;
    }
    set servicio(value) {
        this.#servicio = value;
    }
    set descripcion(value) {
        this.#descripcion = value;
    }
    set fecha(value) {
        this.#fecha = value;
    }
    set estado(value) {
        this.#estado = value;
    }

    // toJSON
    toJSON() {
        return {
            nombreDuenio: this.#nombreDuenio,
            nombreMascota: this.#nombreMascota,
            email: this.#email,
            tipoMascota: this.#tipoMascota,
            telefono: this.#telefono,
            servicio: this.#servicio,
            descripcion: this.#descripcion,
            fecha: this.#fecha,
            id: this.#id,
            estado: this.#estado
        }
    }
}

export default TurnoMascota;
