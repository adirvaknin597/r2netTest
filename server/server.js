const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const server = express();
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});
require("./models/users.model");

server.use(express.json());
server.use(express.urlencoded({extended: false}));
server.use(cors());

server.use('/api', require('./routes'));

server.listen(4545, () => {
    console.log(`Sever Test::start running::4545`);
})

