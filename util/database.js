const path = require("path");
const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config({ path: "./confi.env" });

// const sequelize = new Sequelize(`${process.env.mysqldb}`,`${process.env.username}`,`${process.env.password}`,{
//     dialect: 'mysql',
//     host: 'containers-us-west-102.railway.app',
//     port: 6532,
//     logging: false

// });

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

// mysql -hcontainers-us-west-69.railway.app -uroot -p******** --port 7641 --protocol=TCP railway
