// constructor
const Product = function(product) {
    this.artikelnr = product.artikelnr;
    this.artikelbez = product.artikelbez;
    this.description = product.description;
    this.preis = product.preis;
    this.quantity = product.quantity;
};

Product.create = (newProduct, result) => {
    sql.query("INSERT INTO product SET ?", newProduct, (err, res) => {
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
    sql.query(`SELECT * FROM product WHERE id = ${productId}`, (err, res) => {
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
    sql.query("SELECT * FROM product", (err, res) => {
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
    sql.query(
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
    sql.query("DELETE FROM product WHERE id = ?", id, (err, res) => {
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
    sql.query("DELETE FROM product", (err, res) => {
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
