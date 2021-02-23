const express = require("express")
const toPost = express.Router()
const Schema = require("./schema")
toPost.post("/ques", async (req, res) => {
    const data = req.body
    const ques = new Schema({
        user: data.user,
        title: data.title,
        description: data.description,
        answers: {
            correct: data.correct
        }
    })
    try {
        const savedques = await ques.save()
        res.json(savedques)
    } catch (err) {
        res.json({ message: err })
    }
})

module.exports = toPost