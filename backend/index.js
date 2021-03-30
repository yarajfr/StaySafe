const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const app = express();
const staysafeRouter = require('./staysafe/Router/staysafeRouter');
const router = require("./staysafe/Router/staysafeRouter");
const {readCart} = require("./staysafe/Controller/controller");
const { readProduct, readProducts } = require("./staysafe/Controller/controller")


app.use(cors({
    origin: '*',
    methods: ['GET', 'PUT', 'DELETE', 'PATCH', 'POST'],
    allowedHeaders: 'Content-Type, Authorization, Origin, X-Requested-With, Accept'
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


app.get('/', function(req, res) {
    res.send();
});

app.get('/product', staysafeRouter);

router.get('/product', readProducts);

router.get('/product/:id', readProduct);

router.get('/cart', readCart);

app.get('./staysafe/Router', staysafeRouter);

require("./staysafe/staysafeRoutes")(app);

app.listen(8080, () => {
    console.log('Server listening on port 8080  http://localhost:8080');
});


module.exports = router;

