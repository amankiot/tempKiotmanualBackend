const mongoose = require("mongoose")
const fastify = require('fastify')();

const productRoutes = require('./routes/products');

fastify.register(require('fastify-cors'), { origin: true, });
productRoutes.forEach((route, index) => {
    fastify.route(route)
})

mongoose.connect('mongodb://localhost/kiotmanual');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
    console.log("h");
});

exports.test = function (req, res) {
    res.render('test');
};


fastify.listen(3000, function (err, address) {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listening on ${address}`)
})