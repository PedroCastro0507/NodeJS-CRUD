import { randomUUID } from "node:crypto";

export class DataBaseMemory {
    #carro = new Map();

    list(search) {
        return Array.from(this.#carro.entries()).map((carroArray) => {
            const id = carroArray[0];
            const data = carroArray[1];

            return {
                id,
                ...data,
            }
        }).filter(carro => {
            if (search) {
                return carro.title.includes(search)
            }
            return true;
        })

    }


    create(carro) {
        const carroId = randomUUID();
        this.#carro.set(carroId, carro);
    }

    update(id, carro) {
        this.#carro.set(id, carro)
    }

    delete(id) {
        this.#carro.delete(id);
    }
}