import { sql } from './db.js'

sql` 
    CREATE TABLE Carro (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        valor NUMERIC(10, 2) NOT NULL,
        descricao TEXT
    );
` 
