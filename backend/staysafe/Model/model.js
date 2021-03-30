const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'yara',
    password: 'gWgTvojnDhS1ugHB',
    database: 'StaySafe',
});

connection.connect();

function getProduct() {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM product';
        connection.query(query, (error, results) => {
            if(error) reject(error);
            else      resolve(results);
        })
    });

}

function getCart() {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM cart';
        connection.query(query, (error, results) => {
            if(error) reject(error);
            else      resolve(results);
        })
    });

}



  module.exports = {
    getProduct, getCart
 };
