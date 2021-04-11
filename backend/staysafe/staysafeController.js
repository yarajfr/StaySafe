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
}

exports.listCart = async function(request, response) {
    console.log('listCart');
    model.getCart(request.params.nr).then(
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
