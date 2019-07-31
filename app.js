var request = require('request');
var jwt = require('jsonwebtoken');

var key = require('fs').readFileSync('./crt/privateKey.key', 'utf8');

var options = {
    issuer: '',
    audience: 'https://login.salesforce.com',
    expiresIn: 3,
    algorithm: 'RS256'
}
var token = jwt.sign({ prn: 'vuluongks@none.com'}, key, options);

var post = {
    uri: 'https://login.salesforce.com/services/oauth2/token',
    form: {
       'grant_type': 'urn:ietf:params:oauth:grant-type:jwt-bearer',
       'assertion':  token
    },
    method: 'post'
}
console.log('<<<<Start>>>>');
console.log(post);

console.log('<<<<Stop>>>>');

request(post, function(err, res, body) {
    console.log(err);
    console.log(res.statusCode);
    console.log(body);
});
