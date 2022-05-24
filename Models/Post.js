const db = require('../DataBase/Db') 

const Postagem = db.sequelize.define('postagens', {
    titulo : {
        type : db.Sequelize.STRING,
    },

    conteudo : {
        type : db.Sequelize.TEXT,
    },
})

module.exports = Postagem