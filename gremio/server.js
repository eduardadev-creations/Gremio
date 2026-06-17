const express = require('express');
const cors =require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3000;

// Configurações(Middlewares)
app.use(cors()); //permite requisições do front-end(HTML)
app.use(express.json());

//CONEXÃO COM O BANCO DE DADOS LOCAL  >usando o SQLite
const db = new sqlite3.Database('./cadastroLogin.db', (err) => {
    if (err) {
        console.error('Erro ao conectar ao banco', err.message);
    } else{
        console.log('Conectado ao banco de dados SQLite');

        // Criação das tabelas
        db.exec(`CREATE TABLE IF NOT EXISTS alunos (
            matricula INTEGER PRIMARY KEY AUTOINCREMENT,
            nome VARCHAR(150) NOT NULL,
            curso VARCHAR(50) NOT NULL,
            serie INTEGER NOT NULL,
            dtCadastro DATETIME DEFAULT CURRENT_TIMESTAMP
        );

        CREATE TABLE IF NOT EXISTS gremio (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            aluno_matricula INTEGER NOT NULL,
            cargo VARCHAR(50) NOT NULL,
            CONSTRAINT fk_aluno_gremio FOREIGN KEY (aluno_matricula)
                REFERENCES alunos(matricula)
        );`, (err) => {
            if (err) {
                console.error('Erro ao criar tabelas', err.message);
            }
        });
    }
});

// Rota create(receber dados do front end)
app.post('/cadastrar', (req, res) => {
    //extrarir os dados que vieram do formulário
    const {nome, matricula, curso, serie}
})

//comando sql para inserir dados
const sql = `INSERT INTO (nome, matricula, curso, serie) VALUES (?,?)`

db.run(sql, [nome, email], function(err) {
    if (err) {
        return res.status(500).json({ erro: 'Erro ao salvar no banco.' });
    }


        // Retorna sucesso para o front-end
            res.status(201).json({ mensagem: 'Cadastro salvo com sucesso!', 
            id_inserido: this.lastID 
        });
    });
        // 3. Liga o Servidor
        app.listen(port, () => {
        console.log(`Servidor rodando em http://localhost:${port}`);
});

// 3. Rota "Read" (Busca os dados no banco e envia para o Front-end)
app.get('/cadastroLogin', (req, res) => {
    const sql = `SELECT * FROM alunos`;
    // db.all busca todas as linhas que combinam com o comando SQL
    db.all(sql, [], (err, 'nome', 'matricula', 'turma', 'serie') => {
        if (err) {
            return res.status(500).json({ erro: 'Erro ao buscar dados no banco.' });
        }
        // Envia a lista de usuários encontrados de volta para o front-end
        res.json('nome', 'matricula', 'turma', 'serie');
});
});