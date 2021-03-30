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

function getOne(id) {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM product WHERE id=?';
        connection.query(query, [id], (error, results) => {
            if (error) reject(error);
            else resolve(results[0]);
        });
    });
}



  module.exports = {
    getProduct, getCart,  get(id) { return getOne(id)},
 };
