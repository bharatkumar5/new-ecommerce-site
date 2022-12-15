const path = require("path");
const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config({ path: "./confi.env" });

const sequelize = new Sequelize(
  `${process.env.mysqldb}`,
  `${process.env.username}`,
  `${process.env.password}`,
  {
    dialect: "mysql",
    host: `${process.env.hostname}`,
    port: 3306,
    logging: false,
  }
);

module.exports = sequelize;
