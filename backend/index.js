const express = require('express');
const app = express();
const staysafeRouter = require('./staysafe/staysafeRouter');
const router = require("./staysafe/staysafeRouter");
const { readProduct } = require('./staysafe/controller');

app.get('/', (req, res) => res.redirect('/product'));

app.get('/product', staysafeRouter);

router.get('/product', readProduct);

app.get('/staysafe', staysafeRouter);

app.listen(8080, () => {
    console.log('Server listening on port 8080  http://localhost:8080');
});

module.exports = router;

