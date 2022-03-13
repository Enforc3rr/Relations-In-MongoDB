const mongoose = require("mongoose");

//Represents Many-To-One Relationship
const schema = new mongoose.Schema({
    name : String ,
    post : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "PostModel"
    }]
});

module.exports = mongoose.model("UserModel",schema,"user");