const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'yara',
    password: 'gWgTvojnDhS1ugHB',
    database: 'StaySafe',
});

connection.connect();

function getAll() {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM product';
        connection.query(query, (error, results) => {
            if(error) reject(error);
            else      resolve(results);
        })
    });

}

function getOneProduct(id) {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM product WHERE product_id=?';
        connection.query(query, [id], (error, results) => {
            if (error) reject(error);
            else resolve(results[0]);
        });
    });
}
  module.exports = {
    getAll,
    getProduct(id) {return getOneProduct(id)}
 };
