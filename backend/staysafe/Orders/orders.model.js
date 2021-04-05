const pool = require("../../DB/database");

const Order = function(order) {
    this.firstname = order.firstname;
    this.lastname = order.lastname;
    this.email = order.email;
    this.orderNr = order.orderNr;
};

exports.create = (newOrder, result) => {
    pool.query("INSERT INTO orders SET ?", newOrder, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created order: ", { id: res.insertId, ...newOrder });
        result(null, { id: res.insertId, ...newOrder });
    });
};

exports.findById = (id, result) => {
    pool.query(`SELECT * FROM orders WHERE id = ${id}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found order: ", res[0]);
            result(null, res[0]);
            return;
        }

        result({ kind: "not_found" }, null);
    });
};

exports.getAllOrders = result => {
    pool.query("SELECT * FROM orders", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("orders: ", res);
        result(null, res);
    });
};

exports.updateById = (id, order, result) => {
    pool.query("UPDATE orders SET firstname = ?, lastname = ?, email = ?, orderNr = ?, WHERE id = ?",
        [order.firstname, order.lastname, order.email, order.orderNr, id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows == 0) {

                result({ kind: "not_found" }, null);
                return;
            }

            console.log("updated order: ", { id: id, ...order });
            result(null, { id: id, ...order });
        }
    );
};

exports.remove = (id, result) => {
    pool.query("DELETE FROM orders WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {

            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deleted order with id: ", id);
        result(null, res);
    });
};

exports.removeAll = result => {
    pool.query("DELETE FROM orders", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log(`deleted ${res.affectedRows} orders`);
        result(null, res);
    });
};

module.exports = Order;
