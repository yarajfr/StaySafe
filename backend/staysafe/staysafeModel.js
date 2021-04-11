const pool = require('../DB/database');

exports.getAll = async function() {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM product';
        console.log('getAll');
        pool.query(query, (error, results) => {
            console.log(results);
            if(error) reject(error);
            else      resolve(results);
        })
    });
}

exports.getProduct = async function(nr) {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM product';
        console.log('getProduct');
        pool.query(query, [nr], (error, results) => {
            console.log(results);
            if(error) reject(error);
            else      resolve(results);
        })
    });
}

exports.getCart = async function(nr) {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM cart';
        console.log('getCart');
        pool.query(query, [nr], (error, results) => {
            console.log(results);
            if(error) reject(error);
            else      resolve(results);
        })
    });
}
