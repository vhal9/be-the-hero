/**
 * Rota / Recurso
 */
/**
 * Métodos HTTP:
 * 
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * Tipos de parametros:
  * 
  * Query Params: parametros nomeados na rota apos o simbolo de interrogação.(Filtros, paginação) ex.: /users?page=2&name=Diego
  * Route Params: Parâmetros utilizados para identificar recursos ex.: /users/:id
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos 
  */

/**
 * SQL: MySQLm SQLite, PostgreeSQL, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
 
app.listen(3333);
/**
 * Entidades da aplicacao: (ong, caso(incident), )
 * Funcionalidades: Login, Logout, Cadastro de Ong, cadastro de caso, deletar casos, listar casos de uma ong, listar todos os casos
 * entrar em contato com a ong
 */
