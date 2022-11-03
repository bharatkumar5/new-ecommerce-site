const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(`${process.env.mysqldb}`,`${process.env.username}`,`${process.env.password}`,{
    dialect: 'mysql', 
    host: 'containers-us-west-102.railway.app',
    port: 6532,
    logging: false
    

});


// const sequelize = new Sequelize('railway','root','GExWVLHKBZ36yD7xKIBv',{
//     dialect: 'mysql', 
//     host: 'containers-us-west-102.railway.app',
//     port: 6532,
//     logging: false
    

// });






    module.exports = sequelize;
    

    // mysql -hcontainers-us-west-69.railway.app -uroot -p******** --port 7641 --protocol=TCP railway

    // mysql://root:ORKl3ZqDJL3Og2mFNutt@containers-us-west-69.railway.app:7641/railway

    // "start": "NODE_ENV=production username=root password=GExWVLHKBZ36yD7xKIBv mysqldb=railway secret=mixtwunfptofxqez node app.js",
