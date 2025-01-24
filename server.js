import { fastify } from 'fastify';
import { DataBaseMemory } from './meu_modulo.js';

const server = fastify();
const dataBase = new DataBaseMemory();

server.get('/', (req, res) => {
    return 'Hello World';
})

server.get('/carro', (req, res) => {
    const search = req.query.search
    const carro = dataBase.list(search);
    return carro
})

// adicionar carro
server.post('/carro', (req, res) => {
    const { title, valor, descricao } = req.body;

    dataBase.create({
        title,
        valor,
        descricao,
    });

    return res.status(201).send();
})

// editar carro
server.put('/carro/:id', (req, res) => {
    const carroId = req.params.id;
    const { title, valor, descricao } = req.body;

    const carro = dataBase.update(carroId, {
        title,
        valor,
        descricao,
    })

    return res.status(204).send();
})

// deletar carro
server.delete('/carro/:id', (req, res) => {
    const carroId = req.params.id;

    dataBase.delete(carroId)

    return res.status(204).send();
})

server.listen({
    port: 3000,
});