const kiotManual = require("../controllers/kiotManual");
const routes = [{
    method: 'POST',
    url: '/api/v1/saveproduct',
    handler: kiotManual.postProduct
},
{
    method: 'POST',
    url: '/api/v1/getsingleproduct',
    handler: kiotManual.getProduct
},
{
    method: 'POST',
    url: '/api/v1/getallurls',
    handler: kiotManual.getAllUrls
},
{
    method: 'POST',
    url: '/api/v1/saveurl',
    handler: kiotManual.postUrl
},
{
    method: 'POST',
    url: '/api/v1/getallproducts',
    handler: kiotManual.getAllProducts
}
]


module.exports = routes;
