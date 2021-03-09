var mongoose = require('mongoose');
require('mongoose-type-url');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String
    },
    image: {
        type: mongoose.SchemaTypes.Url
    },
    info: {
        type: String
    },

})


mongoose.model('Products', ProductSchema);
module.exports = mongoose.model('Products');