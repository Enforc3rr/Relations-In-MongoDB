const mongoose = require("mongoose");
// Example of Many-To-Many RelationShip
const schema = new mongoose.Schema({
    text : String,
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "UserModel"
    },
    post : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "PostModel"
    }
});

module.exports = mongoose.model("CommentModel",schema,"comment" )