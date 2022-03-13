const mongoose = require("mongoose");

//Represents one-To-Many Relationship
const schema = new mongoose.Schema({
    details : String,
    postBy : {
        type : mongoose.Schema.Types.ObjectId,//can be .Object as well
        ref : "UserModel"
    }
});

module.exports = mongoose.model("PostModel",schema,"post");