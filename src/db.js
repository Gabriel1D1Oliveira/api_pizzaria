const mysql = require('mysql')//importando o mysql

const db = mysql.createConnection(
    {
        host: 'localHost',
        port: 3306,
        user: 'root',
        password:'root',
        database:'pizzariam'
    }
)//preencher de acordo com seu banco de dados

//testar conexão com o MySQL 
db.connect((err) => {
    if (err) {
        console.error(`Erro ao conectar ao MySQL`, err);
    } else {
        console.log('Conectado ao MySQL');
    }
});

module.exports= db;
// declara que essa construção sera um modulo e que iremos exportar para ser usado