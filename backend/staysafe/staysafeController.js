const model = require('../staysafe/staysafeModel');

exports.listAction = async function(request, response) {
    console.log('listAction');
    model.getAll().then(
        data => {
            console.log(data);
            response.send(data);
        },
        error => {
            console.log(error);
            response.send(error);
        }
    );

    exports.listProduct = async function(request, response) {
        console.log('listProduct');
        model.getProduct(request.params.nr).then(
            data => {
                console.log(data);
                response.send(data);
            },
            error => {
                console.log(error);
                response.send(error);
            }
        );
    }


    exports.create = (req, res) => {
        // Validate request
        if (!req.body) {
            res.status(400).send({
                message: "Content can not be empty!"
            });
        }

        const product = new Product({
            artikelbez: req.body.artikelbez,
            artikelnr: req.body.artikelnr,
            description: req.body.description,
            preis: req.body.preis,
            quantity: req.body.quantity,
        });


        Product.create(product, (err, data) => {
            if (err)
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while creating Product."
                });
            else res.send(data);
        });
    };


    exports.findAll = (req, res) => {
        Product.getAll((err, data) => {
            if (err)
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while retrieving members."
                });
            else res.send(data);
        });
    };


    exports.findOne = (req, res) => {
        Product.findById(req.params.productId, (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found Product with id ${req.params.productId}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error retrieving Product with id " + req.params.productId
                    });
                }
            } else res.send(data);
        });
    };


    exports.update = (req, res) => {
        // Validate Request
        if (!req.body) {
            res.status(400).send({
                message: "Content can not be empty!"
            });
        }

        Product.updateById(
            req.params.productId,
            new Product(req.body),
            (err, data) => {
                if (err) {
                    if (err.kind === "not_found") {
                        res.status(404).send({
                            message: `Not found Product with id ${req.params.productId}.`
                        });
                    } else {
                        res.status(500).send({
                            message: "Error updating Product with id " + req.params.productId
                        });
                    }
                } else res.send(data);
            }
        );
    };


    exports.delete = (req, res) => {
        Product.remove(req.params.productId, (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found Product with id ${req.params.productId}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Could not delete Product with id " + req.params.productId
                    });
                }
            } else res.send({message: `Product was deleted successfully!`});
        });
    };

    exports.deleteAll = (req, res) => {
        Product.removeAll((err, data) => {
            if (err)
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while removing all products."
                });
            else res.send({message: `All Products were deleted successfully!`});
        });
    };
}
