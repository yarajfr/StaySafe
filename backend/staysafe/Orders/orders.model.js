const sql = require("../../DB/database");

const Order = function(order) {
    this.id = order.id;
    this.firstname = order.firstname;
    this.lastname = order.lastname;
    this.email = order.email;
    this.orderNr = order.orderNr;
};

Order.create = (newOrder, result) => {
    sql.query("INSERT INTO orders SET ?", newOrder, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created order: ", { id: res.insertId, ...newOrder });
        result(null, { id: res.insertId, ...newOrder });
    });
};

Order.findById = (id, result) => {
    sql.query(`SELECT * FROM orders WHERE id = ${orderId}`, (err, res) => {
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

Order.getAllOrders = result => {
    sql.query("SELECT * FROM orders", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("orders: ", res);
        result(null, res);
    });
};

Order.updateById = (id, order, result) => {
    sql.query("UPDATE orders SET firstname = ?, lastname = ?, email = ?, orderNr = ? WHERE id = ?",
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

Order.remove = (id, result) => {
    sql.query("DELETE FROM orders WHERE id = ?", id, (err, res) => {
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

Order.removeAll = result => {
    sql.query("DELETE FROM orders", (err, res) => {
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
