const mongoose = require('mongoose');

const DB = process.env.DATABASE;

const uri = 'mongodb://mongo:FA5hFB1deD62CcG6H3DD1fBhcAEA1C62@viaduct.proxy.rlwy.net:47990';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log('connection successful');
}).
catch((err) => console.log('Connection Unsuccessful :('));
