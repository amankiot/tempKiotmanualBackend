const { get } = require('mongoose');
let Products = require('../models/Product');
let Urls = require('../models/Url');
const kiotManual =
{
    postProduct: async (request, reply) => {
        product_obj = {
            name: request.body.name,
            info: request.body.info,
            image: request.body.image
        }

        try {
            let product = new Products(product_obj);
            var product_response = await product.save();
        }
        catch (err) {
            reply.send(err.message);
        }

        reply.send({ status: 1, product: product_response });
    },
    postUrl: async (request, reply) => {
        url_obj = {
            product: request.body.product_id,
            url: request.body.url,
            urlInfo: request.body.urlinfo
        }

        try {
            let urlinfo = new Urls(url_obj);
            await urlinfo.save();
        }
        catch (err) {
            reply.send(err.message);
        }

        reply.send({ status: 1 });
    },
    getProduct: async (request, reply) => {
        if (request.body.product_id) {
            var product_id = request.body.product_id;
        }
        try {
            var product = await Products.findById(product_id).exec();
        }
        catch (err) {
            reply.send(err.message);
        }
        reply.send(product);

    },
    getAllUrls: async (request, reply) => {
        product_id = request.body.product_id;
        try {
            var urls = await Urls.find({ product: product_id }).exec();
        }
        catch (err) {
            reply.send(err.message);
        }
        reply.send({ data: urls });

    },
    getAllProducts: async (request, reply) => {
        try {
            var products = await Products.find().exec();
        }
        catch (err) {
            reply.send(err.message);
        }
        reply.send({ data: products });

    }

}

module.exports = kiotManual;