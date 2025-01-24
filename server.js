import { fastify } from 'fastify';
import { DataBaseMemory } from './meu_modulo.js';

const server = fastify();
const db = new DataBaseMemory();

server.get('/', (req, res) => {
    return 'Hello World';
})

server.get('/japonesa', (req, res) => {
    return 'Area de adicionar comida japonesa';
})

// adicionar comida japonesa
server.post('/japonesa', (req, res) => {
    db.create({
        nome: 'sashimi',
        descricao: 'comida japonesa',
    })
    // console.log(db);
    console.log(db.list());
    return res.status(201).send('comida adicionada');
})

// editar comida japonesa
server.put('/japonesa/:id', (req, res) => {
    return 'comida atualizada';
})

// deletar comida japonesa
server.delete('/japonesa/:id', (req, res) => {
    return 'comida deletada';
})

server.listen({
    port: 3000,
});