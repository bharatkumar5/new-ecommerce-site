const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('node','root','pass@123',{
    dialect: 'mysql', 
    host: 'localhost',
    logging: false

});

    module.exports = sequelize;
    