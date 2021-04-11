const Order = require("../Orders/orders.model");

exports.create = (req, res) => {

    if (!req.body) {
        res.status(400).send({
            message: "Der Inhalt kann nicht leer bleiben!"
        });
    }

const order = new Order({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        orderNr: req.body.orderNr
    });


Order.create(order, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Es sind Fehler beim Erstellen der Bestellungen aufgetreten"
            });
        else res.send(data);
    });
};

exports.findAll = (req, res) => {
    Order.getAllOrders((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Es sind Fehler beim Auslesen der Bestellungen aufgetreten"
            });
        else res.send(data);
    });
};

exports.findOne = (req, res) => {
    Order.findById(req.params.orderId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Die Bestellung mit der Nummer ${req.params.orderId} wurde nicht gefunden.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Order with id " + req.params.orderId
                });
            }
        } else res.send(data);
    });
};

exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Der Inhalt kann nicht leer sein."
        });
    }

    Order.updateById(
        req.params.orderId,
        new Order(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found Order with id ${req.params.orderId}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating Order with id " + req.params.orderId
                    });
                }
            } else res.send(data);
        }
    );
};

exports.delete = (req, res) => {
    Order.remove(req.params.orderId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Order with id ${req.params.orderId}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete Order with id " + req.params.orderId
                });
            }
        } else res.send({ message: `Order was deleted successfully!` });
    });
};

exports.deleteAll = (req, res) => {
    Order.removeAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all orders."
            });
        else res.send({ message: `All Orders were deleted successfully!` });
    });
};
