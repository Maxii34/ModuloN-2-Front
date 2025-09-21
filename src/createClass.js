import { v4 as uuidv4 } from "uuid";

class TurnoMascota {
  #nombreMascota;
  #tipoMascota;
  #servicio;
  #descripcion;
  #fecha;
  #id;
  #estado;

  constructor(
    nombreMascota,
    tipoMascota,
    servicio,
    descripcion,
    fecha,
    id,
    estado
  ) {
    this.#nombreMascota = nombreMascota;
    this.#tipoMascota = tipoMascota;
    this.#servicio = servicio;
    this.#descripcion = descripcion;
    this.#fecha = fecha;
    this.#id = uuidv4();
    this.#estado = "Pendiente";
  }

  // Getters
  get nombreMascota() {
    return this.#nombreMascota;
  }

  get tipoMascota() {
    return this.#tipoMascota;
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

  set nombreMascota(value) {
    this.#nombreMascota = value;
  }

  set tipoMascota(value) {
    this.#tipoMascota = value;
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
      nombreMascota: this.#nombreMascota,
      tipoMascota: this.#tipoMascota,
      servicio: this.#servicio,
      descripcion: this.#descripcion,
      fecha: this.#fecha,
      id: this.#id,
      estado: this.#estado,
    };
  }
}

export default TurnoMascota;
