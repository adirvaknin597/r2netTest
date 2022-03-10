const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

const User = require("./models/users.model");
const userJsonList = require("./test-users");

return Promise.all(userJsonList.map(u => User.create(u)))
