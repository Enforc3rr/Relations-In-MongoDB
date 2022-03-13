const express = require("express");
const app = express();
const route = express.Router();

const user = require("./user");
const post = require("./post");
const comment = require("./comment");

app.listen(8000 , ()=>console.log("Server Started"));

const mongoose = require("mongoose");

app.use(express.json());
app.use(route);

const database = async () =>{
    await mongoose.connect("");
}
database()
    .then(()=>console.log("Connected to database"))
    .catch(()=>console.log("Connection to database failed"));

route.get("/user",async (req,res)=>{
    const data = await user.findById(req.query.id);
    return res.status(200).json(data);
});

route.get("/post",async (req,res)=>{
    const data = await post.findById(req.query.id);
    return res.status(200).json(data);
});

route.post("/user",async (req,res)=>{
    const data = await user.create(req.body);
    return res.send(data);
});

route.post("/comment",async (req,res)=>{
    const com = await comment.create(req.body);
    return res.send(com);
});

route.post("/post", async (req,res)=>{
    const data = await post.create(req.body);
    const toUpdate = await user.findById(data.postBy);
    toUpdate.post.push(data);
    const userData = await user.findByIdAndUpdate(req.body.postBy , toUpdate , {new : true});
    console.log(userData);
    return res.send(data);
});

route.put("/user",async (req,res)=>{
    const data = await post.findByIdAndUpdate(req.body.id , req.body, {new : true});
    return res.send(data);
});