import { randomUUID } from "node:crypto";

export class DataBaseMemory {
    #comida = new Map();

    list() {
        return this.#comida.values();
    }

    create(comida) {
        const comidaId = randomUUID();
        this.#comida.set(comidaId, comida);
    }

    update(id, comida) {
        this.#comida.set(id, comida)
    }

    delete(id) {
        this.#comida.delete(id);
    }
}