const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const app = express();
const staysafeRouter = require('./staysafe/staysafeRouter');
const router = require("./staysafe/staysafeRouter");
const {readCart} = require("./staysafe/controller");
const { readProducts, readProduct} = require('./staysafe/controller');


app.use(cors({
    origin: '*',
    methods: ['GET', 'PUT', 'DELETE', 'PATCH', 'POST'],
    allowedHeaders: 'Content-Type, Authorization, Origin, X-Requested-With, Accept'
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.post("/product", product.create);

app.get("/product", product.findAll);

app.get("/product/:productId", product.findOne);

app.put("/product/:productId", product.update);

app.delete("/product/:productId", product.delete);

app.delete("/product", product.deleteAll);

app.get('/', function(req, res) {
    res.send();
});

app.get('/product', staysafeRouter);

router.get('/product', readProducts);

router.get('/product/:id', readProduct);

router.get('/cart', readCart);

app.get('/staysafe', staysafeRouter);


app.listen(8080, () => {
    console.log('Server listening on port 8080  http://localhost:8080');
});


module.exports = router;

