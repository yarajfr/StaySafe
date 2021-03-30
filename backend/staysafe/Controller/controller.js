const model = require('../Model/model');

function listAction(request, response) {
    model.getAll().then(
        product => {
            response.json(product);
        },
        error => response.status(500).json(error),
    );
}

function detailAction(request, response) {
    model.get(request.params.id).then(
        product => response.json(product),
        error => response.status(500).json(error),
    );
}

function readProducts(request, response) {
    model.getProduct().then(
        product => response.json(product),
        error => response.json(error),
    );
}

function readProduct(request, response) {
    model.getProduct(request.params.id).then(
        product => response.json(product),
        error => response.status(500).json(error),
    );
}

function readCart(request, response) {
    model.getCart(request.params.id).then(
        cart => response.json(cart),
        error => response.status(500).json(error),
    );
}

exports.listAction = async function(request, response) {
    console.log('listAction');
    model.getCart().then(
        cart => {
            console.log(cart);
            response.send(cart);
        },
        error => {
            console.log(error);
            response.send(error);
        }
    );
}

module.exports = {
    listAction,
    detailAction,
    readProducts,
    readProduct,
    readCart,

};
