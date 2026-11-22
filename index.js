const express=require("express");
const app=express();
const path=require("path");
const mongoose=require("mongoose");
const Chat=require("./models/chat.js")
const methodOverride=require("method-override");


app.use(express.static(path.join(__dirname,"public")));
app.use(methodOverride("_method"));

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

app.use(express.urlencoded({extended:true}));

main()
.then(()=>{
    console.log("connection successful");
})
.catch((err)=>{
    console.log(err)
})

// see all chats
app.get("/chats",async (req,res)=>{
    let chats=await Chat.find();
    res.render("chats.ejs",{chats})
})


//create new chat
app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
})

//save new chat
app.post("/chats", (req,res)=>{
    let {from,msg,to}=req.body;
    let newChat=new Chat({
        from:from,
        msg:msg,
        to:to,
        created_at:new Date()
    })
    newChat.save()
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    })
    res.redirect("/chats")
})

//edit msg
app.get("/chats/:id/edit",async(req,res)=>{
    let {id}=req.params;
    let chat=await Chat.findById(id);
    res.render("edit.ejs",{chat});
})

//update route
app.put("/chats/:id",async(req,res)=>{
    let{id}=req.params;
    let {msg:newMsg}=req.body;
    let updatedChat=await Chat.findByIdAndUpdate(id,{msg:newMsg},{returnDocument:"after", runValidators:true})
    res.redirect("/chats")
    console.log(updatedChat);
})


//del route
app.delete("/chats/:id",async (req,res)=>{
    let{id}=req.params;
    let deletedChat=await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats")
})

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

app.listen(8080,()=>{
    console.log("server is listening on port 8080")
})

app.get("/",(req,res)=>{
    res.send("root is working");
})