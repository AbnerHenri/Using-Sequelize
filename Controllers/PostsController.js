const Postagem = require('../Models/Post')

const Controllers = {

    newPost : function(req, res){
        const title = req.body.title
        const content = req.body.content

        Postagem.create({
            titulo : title,
            conteudo : content
        })

        res.send('Post adicionado com sucesso')
    }

}

module.exports = Controllers