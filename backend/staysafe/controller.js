import * as connection from "@angular/animations";

const model = require('./model');
const view = require('./view');

function readProduct(request, response) {
    model.getAll().then(
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


module.exports = {
    readProduct,

};
