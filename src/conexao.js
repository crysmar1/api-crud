const knex = require('knex')({
    client: 'pg',
    connection: {
        host : 'localhost',
        port : 5432,
        user : 'postgres',
        password : 'amor',
        database : 'knexjs'
    }
});

module.exports = knex;