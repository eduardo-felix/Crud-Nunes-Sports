const { knex } = require('../config/db_conection');

const listarProdutos = async () => {

try {
    const produtosCadastrados = await knex('produtos').orderBy('id', 'asc').returning('*')
    if (!produtosCadastrados) {
    return console.log("Não existem produtos cadastrados");
    }     
return res.status(200).json(produtosCadastrados)
    
} catch (error) {
    res.status(500).json({ mensagem: error.message }) 
}

    
}
