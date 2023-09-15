const knex = require('../conexao');

const cadastrar = async (req, res) => {
    const {nome, email, senha} = req.body;

    try {
        const cadastrarUsuario = await knex('usuarios2').insert({ nome, email, senha }).returning('*').first();
        return res.status(201).json(cadastrarUsuario);

    } catch (error) {
        return res.status(500).json({mensagem: `Erro interno do servidor`});
    }

}

const buscar = async (req, res) => {
    const { id } = req.params;

    try {
        const consultarUsuario = await knex('usuarios2').where('id', id).first();
        return res.status(200).json(consultarUsuario);
        
    } catch (error) {
        return res.status(500).json({mensagem: `Erro interno do servidor`});
    }
}

const listar = async (req, res) => {

    try {
        const listarUsuario = await knex('usuarios2');
        return res.status(200).json(listarUsuario)
        
    } catch (error) {
        return res.status(500).json({mensagem: `Erro interno do servidor`});
    }

}

const atualizar = async (req, res) => {
    const { nome, email, senha } = req.body;
    const { id } = req.params;

    try {
        const atualizarUsuario = await knex('usuarios2').update({ nome, email, senha }).where('id', id).first().returning('*');
        return res.status(201).json(atualizarUsuario);
        
    } catch (error) {
        return res.status(500).json({mensagem: `Erro interno do servidor`});
    }
}

const deletar = async (req, res) => {
    const { id } = req.params;

    try {
        const deletarUsuario = await knex('usuarios2').del().where('id', id).returning('*');
        return res.status(201).json(deletarUsuario);
        
    } catch (error) {
        return res.status(500).json({mensagem: `Erro interno do servidor`});
    }
}

module.exports = {
    cadastrar,
    buscar,
    listar,
    atualizar,
    deletar
}