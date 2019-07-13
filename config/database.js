knexfile = require('../knexfile')
const knex = require('knex')(knexfile)
module.exports = knex

// knex('users').insert({
//   nome: 'herver',
//   email: 'herver@teste.com.br',
//   password: 'teste'
// }).then(data => console.log(data))
