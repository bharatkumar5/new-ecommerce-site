const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const User = sequelize.define('user',{
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    }
,
    password: Sequelize.STRING,
    email: Sequelize.STRING,
    resetToken: Sequelize.STRING,
    resetTokenExpiration: Sequelize.STRING,

    Role: {
        type: Sequelize.INTEGER,
        allowNull:false,
        defaultValue:0
    }

})

module.exports = User;