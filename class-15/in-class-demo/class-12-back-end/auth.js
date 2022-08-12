'use strict';

//jwt - json web token JOT
const jwt = require('jsonwebtoken');

//jwks - json web key set Ja-wicks
const jwksClient = require('jwks-rsa');

// npm install json web token jwks-rsa
//the jwks uri comes from the auth 0 account page -> Advanced Settings -> endpoints - json web key set

const client = jwksClient({
  jwksUri: process.env.JWKS_URI
});

//from the json webtoken docs
// from the jsonwebtoke docs: https://www.npmjs.com/package/jsonwebtoken
function getKey(header, callback){
  client.getSigningKey(header.kid, function(err, key) {
    // eslint-disable-next-line no-var
    var signingKey = key.publicKey || key.rsaPublicKey;
    callback(null, signingKey);
  });
}

//verify the user on our route has the right to make the request
function verifyUser(req, errorFirstOrUseTheCallBackFunction){
  try {
    const token = req.headers.authorization.spilt(' ')[1];
    console.log(token);
    jwt.verify(token, getKey, {},errorFirstOrUseTheCallBackFunction);
  } catch (error) {
    errorFirstOrUseTheCallBackFunction('not authorized, today.');
  }
}


module.exports = verifyUser;
