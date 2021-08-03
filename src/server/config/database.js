require('dotenv').config()
const mysql = require('mysql')

//CONNECTION TO THE DB
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_NAME
})

//IF ERROR
connection.connect((err) => {
    if (!err) {
        console.log('Connected to the MySQL server.');
    }
    else if (err)
    {
        return console.error('Timeout: ' + err.message);
    }
});

module.exports = connection