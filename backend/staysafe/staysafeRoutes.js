module.exports = app => {
    const product = require('./staysafeController');

    app.post("/product", product.create);

    app.get("/product", product.findAll);

    app.get("/product/:productId", product.findOne);

    app.put("/product/:productId", product.update);

    app.delete("/product/:productId", product.delete);

    app.delete("/product", product.deleteAll);
};
