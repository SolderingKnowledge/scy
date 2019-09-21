const mongoose = require("mongoose"); //boilerplate
mongoose.set("debug", true)
mongoose.Promise = Promise;//what library
mongoose.connect("mongodb://localhost/warbler", {
    keepAlive:true,
    useMongoClient:true,
});//connect through mongoose to db


module.exports.User = require("./user");