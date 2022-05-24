const Sequelize = require('sequelize')
const sequelize = new Sequelize('testes', 'root', '97648598', {
    host : 'localhost',
    dialect : 'mysql'
})

sequelize.authenticate().then(()=>{
    console.log('MySQL Connect')
}).catch((error)=>{
    console.log(error)
    console.log('Connection Error')
})



module.exports = {
    Sequelize : Sequelize,
    sequelize : sequelize,
}