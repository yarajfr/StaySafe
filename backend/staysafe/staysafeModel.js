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




/*

/!*
exports.getCart = async function() {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM cart';
        console.log('getCart');
        pool.query(query, (error, results) => {
            console.log(results);
            if(error) reject(error);
            else      resolve(results);
        })
    });
}*!/
exports.readAll = async function() {
    console.log('readAll');
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM product';
        pool.query(query, (error, results) => {
            if(error) reject(error);
            else      resolve(results);
        })
    });
}

const Product = function(product) {
    this.artikelnr = product.artikelnr;
    this.artikelbez = product.artikelbez;
    this.description = product.description;
    this.preis = product.preis;
    this.quantity = product.quantity;
};

Product.create = (newProduct, result) => {
    pool.query("INSERT INTO product SET ?", newProduct, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created product: ", { id: res.insertId, ...newProduct });
        result(null, { id: res.insertId, ...newProduct });
    });
};

Product.findById = (productId, result) => {
    pool.query(`SELECT * FROM product WHERE id = ${productId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found product: ", res[0]);
            result(null, res[0]);
            return;
        }


        result({ kind: "not_found" }, null);
    });
};

Product.getAll = result => {
    pool.query("SELECT * FROM product", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("products: ", res);
        result(null, res);
    });
};

Product.updateById = (id, product, result) => {
    pool.query(
        "UPDATE product SET artikelnr = ?, artikelbez = ?, description = ?, preis = ?, quantity = ?,  WHERE id = ?",
        [product.artikelnr, product.artikelbez, product.description, product.preis,product.quantity, id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows == 0) {
                // not found Customer with the id
                result({ kind: "not_found" }, null);
                return;
            }

            console.log("updated product: ", { id: id, ...product });
            result(null, { id: id, ...product});
        }
    );
};

Product.remove = (id, result) => {
    pool.query("DELETE FROM product WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found Member with the id
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deleted product with id: ", id);
        result(null, res);
    });
};

Product.removeAll = result => {
    pool.query("DELETE FROM product", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log(`deleted ${res.affectedRows} product`);
        result(null, res);
    });
};

module.exports = Product;
*/
