const express = require('express')
const app = express()
const mongoose = require("mongoose")
const postRoute = require('./post')
const getRoute = require('./get')
const bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use("/post", postRoute)
app.use("/get", getRoute)
app.listen(3000, () => {
    console.log("server created")
})
mongoose.connect("mongodb://rsp:123@cluster0-shard-00-00.xyk42.mongodb.net:27017,cluster0-shard-00-01.xyk42.mongodb.net:27017,cluster0-shard-00-02.xyk42.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-fxin7f-shard-0&authSource=admin&retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function () {
    console.log("Connection Successful!");
});