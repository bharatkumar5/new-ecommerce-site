const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(`${process.env.mysqldb}`,`${process.env.username}`,`${process.env.password}`,{
    dialect: 'mysql', 
    host: 'localhost',
    logging: false

});

    module.exports = sequelize;
    