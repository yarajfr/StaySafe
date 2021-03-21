const model = require('./model');
const view = require('./view');

function readProducts(request, response) {
    model.getAll().then(
        product => response.json(product),
        error => response.json(error),
    );
}

function readProduct(request, response) {
    model.getProduct(request.params.id).then(
        author => response.json(author),
        error => response.status(500).json(error),
    );
}


module.exports = {
    readProducts,
    readProduct,

};
