const mongoose=require("mongoose");
const Chat=require("./models/chat.js")


main()
.then(()=>{
    console.log("connection successful");
})
.catch((err)=>{
    console.log(err)
})



async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}



let allChats = [
    {
        from: "neha",
        to: "preeti",
        msg: "send me notes for the exam",
        created_at: new Date(),
    },
    {
        from: "rohit",
        to: "mohit",
        msg: "teach me JS callbacks",
        created_at: new Date(),
    },
    {
        from: "amit",
        to: "sumit",
        msg: "all the best!",
        created_at: new Date(),
    },
    {
        from: "priya",
        to: "rahul",
        msg: "are you coming to college tomorrow?",
        created_at: new Date(),
    },
    {
        from: "karan",
        to: "aditya",
        msg: "bro check the latest assignment",
        created_at: new Date(),
    },
    {
        from: "sneha",
        to: "riya",
        msg: "let's plan a trip this weekend",
        created_at: new Date(),
    },
    {
        from: "akash",
        to: "varun",
        msg: "did you complete the project?",
        created_at: new Date(),
    },
    {
        from: "pooja",
        to: "ananya",
        msg: "happy birthday! have a great day",
        created_at: new Date(),
    },
    {
        from: "vikas",
        to: "sahil",
        msg: "send me the GitHub repository link",
        created_at: new Date(),
    },
    {
        from: "meera",
        to: "isha",
        msg: "see you at 5 pm",
        created_at: new Date(),
    }
];

 Chat.insertMany(allChats);