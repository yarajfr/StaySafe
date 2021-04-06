const Order = require("../Orders/orders.model");

exports.create = (req, res) => {

    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
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
                    err.message || "Some error occurred while creating the Member."
            });
        else res.send(data);
    });
};

exports.findAll = (req, res) => {
    Order.getAllOrders((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving orders."
            });
        else res.send(data);
    });
};

exports.findOne = (req, res) => {
    Order.findById(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Order with id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Order with id " + req.params.id
                });
            }
        } else res.send(data);
    });
};

exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    Order.updateById(
        req.params.id,
        new Order(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found Order with id ${req.params.id}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating Order with id " + req.params.id
                    });
                }
            } else res.send(data);
        }
    );
};

exports.delete = (req, res) => {
    Order.remove(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Order with id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete Order with id " + req.params.id
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
