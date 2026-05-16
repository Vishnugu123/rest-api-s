const express = require("express");
const app = express();
const path = require("path");

const { v4 : uuidv4 } = require("uuid");

const port = 8080;

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let data1 = [
    {
        id : uuidv4(),
        username: "vishnu gupta",
        content: "i have to best version of myself"
    },
    {
        id : uuidv4(),
        username: "vaibhav gupta",
        content: "nind nhii aati h mjhe when i work"
    },
    {
        id : uuidv4(),
        username: "akshay gupta",
        content: "chije thk rkho bhau appne app sb thk hoga"
    },
];

app.get("/posts", (req, res) => {
    res.render("index.ejs", { data1 });
});

app.get("/posts/new" , (req,res) => {
    res.render("new.ejs");
})

app.get("/posts/:id" , (req,res) => {
    let {id} = req.params;
    let post = data1.find((p) => id === p.id);
    res.render("show.ejs", {post});
});
app.post("/posts" , (req,res) => {
    let {username , content} = req.body;
    let id = uuidv4();
    data1.push({id,username,content});
    res.redirect("/posts");
});

app.patch("/posts/id" ,(req,res) =>{
    let {id} = req.params;
    let post = data1.find((p) => id === p.id);
    let newContent = req.body.content;
    content = newContent;
});

app.get("/posts/:id/edit" , (req,res) => {
    let {id} = req.params;
    let post = data1.find((p) => id === p.id);
});
app.listen(port, () => {
    console.log(`port is listening on ${port}`);
});