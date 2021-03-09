const mongoose = require('mongoose');


const UrlSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    url: {
        type: mongoose.SchemaTypes.Url
    },
    urlInfo: {
        type: String,
        enum: ["Documentation", "Manual", "Instruction"],
    },


})

mongoose.model('Urls', UrlSchema);
module.exports = mongoose.model('Urls');
