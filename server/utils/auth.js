const jwt = require('jsonwebtoken');

// use dot env for environmental variables
require('dotenv').config();
const secret = process.env.secret;
const expiration = '2h';



