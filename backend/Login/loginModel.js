const md5 = require('md5');
const jwt = require('jsonwebtoken');
const pool = require('../DB/database');

exports.register = async function(req, res) {
    return new Promise((resolve, reject) => {
        try {
            let {username, email, password} = req.req.body;
            const hashed_password = md5(password.toString())
            const checkUsername = 'Select username FROM Users WHERE username = ?';
            pool.query(checkUsername, [username], (err, result) => {
                if (!result.length) {
                    const sql = 'Insert Into Users (username, email, password) VALUES (?, ?, ?)';
                    pool.query(
                        sql, [username, email, hashed_password],
                        (err, result) => {
                            if (err) {
                                reject({status: 0, data: err});
                            } else {
                                let token = jwt.sign({data: result}, 'secret')
                                resolve({status: 1, data: result, token: token});
                            }
                        })
                }
            });
        } catch (error) {
            reject({status: 0, error: error});
        }
    });
}

exports.login = async function(req, res) {
    return new Promise((resolve, reject) => {
        try {
            let {username, password} = req.req.body;
            const hashed_password = md5(password.toString())
            console.log(hashed_password);
            const sql = 'SELECT * FROM Users WHERE username = ? AND password = ?';
            pool.query(
                sql, [username, hashed_password],
                (err, result) => {
                    if (err) {
                        reject({status: 0, data: err});
                    } else {
                        if(result.length==0)
                        {
                            resolve({status: 2, data: result});
                        } else {
                            let token = jwt.sign({data: result}, 'secret')
                            resolve({status: 1, data: result, token: token});
                        }
                    }
                })
        } catch (error) {
            reject({status: 0, error: error});
        }
    });
}

exports.readAll = async function() {
    console.log('readAll');
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM Users';
        pool.query(query, (error, results) => {
            if(error) reject(error);
            else      resolve(results);
        })
    });
}

exports.readOne = async function(id) {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM Users WHERE Id = ?';
        pool.query(query, [id], (error, results) => {
            if(error) reject(error);
            else      resolve(results);
        })
    });
}
