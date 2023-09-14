const express = require('express');
const { cadastrar, buscar, atualizar, deletar, listar } = require('./controladores/usuarios');
const rotas = express();

rotas.get('/listar', listar)
rotas.post('/cadastrar', cadastrar)
rotas.get('/buscar/:id', buscar)
rotas.put('/atualizar/:id', atualizar)
rotas.delete('/deletar/:id', deletar)

module.exports = rotas