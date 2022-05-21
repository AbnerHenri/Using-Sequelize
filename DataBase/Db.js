require('dotenv').config({ path : '../.env'})
const Sequelize = require('sequelize')
const sequelize = new Sequelize('testes', 'root', process.env.MY_PASSWORD, {
    host : 'localhost',
    dialect : 'mysql'
})

sequelize.authenticate().then(()=>{
    console.log('MySQL Connected')
}).catch(()=>{
    console.log('Error Connecting')
})