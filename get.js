const express = require("express")
const toGet = express.Router()
const Ques = require('./schema')
toGet.get("/ques", async (req, res) => {
    try {
        const uaques = await Ques.find().exec()
        console.log(uaques)
        res.json(uaques)
    } catch (err) {
        res.json({ message: err })
    }
})

module.exports = toGet