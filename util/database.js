const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(`${process.env.mysqldb}`,`${process.env.username}`,`${process.env.password}`,{
    dialect: 'mysql', 
    host: '127.0.0.1',
    logging: false,
    dialectOptions: {
        socketPath: '/var/run/mysqld/mysqld.sock',
        port: '3306'
 
      }

});

    module.exports = sequelize;
    