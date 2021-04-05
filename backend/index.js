const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const loginController = require('../backend/Login/loginController.js');
const staysafeController = require('./staysafe/staysafeController');
const ordersController = require('../backend/staysafe/Orders/orders.controller')

const app = express();

app.use(cors({
    origin: '*',
    methods: ['GET', 'PUT', 'DELETE', 'PATCH', 'POST'],
    allowedHeaders: 'Content-Type, Authorization, Origin, X-Requested-With, Accept'
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


app.get('/', (request, response) => response.redirect('/product'))

app.get('/product', staysafeController.listAction);

app.get('/cart', staysafeController.listCart);


app.get('/user', loginController.readAction);
app.get('/user/:id', loginController.readIdAction);
app.post('/user/login', loginController.loginAction);
app.post('/user/register', loginController.registerAction);

app.post("/orders", ordersController.create);

app.get("/orders", ordersController.findAll);

app.get("/orders/:orderId", ordersController.findOne);

app.put("/orders/:orderId", ordersController.update);

app.delete("/orders/orderId", ordersController.delete);

app.delete("/orders", ordersController.deleteAll);

app.listen(8080, () => {
    console.log('Server listening on port 8080  http://localhost:8080');
});



