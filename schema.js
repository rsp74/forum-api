const mongoose=require("mongoose")
const { stringify } = require("qs")
const quesSchema=mongoose.Schema({
    user: String,
    title: String,
    description: String,
    comments:{
        user:String,
        body:String,
    },
    answers:{
        user:String,
        body:String,
        comments:{
            user:String,
            body:String
        },
        correct:Boolean
    }
})
module.exports=mongoose.model('question',quesSchema)