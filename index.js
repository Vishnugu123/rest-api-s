const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let data1 = [
    {
        username: "vishnu gupta",
        thougth: "i have to best version of myself"
    },
    {
        username: "vaibhav gupta",
        thougth: "nind nhii aati h mjhe when i work"
    },
    {
        username: "akshay gupta",
        thougth: "chije thk rkho bhau appne app sb thk hoga"
    },
];

app.get("/posts", (req, res) => {
    res.render("index.ejs", { data1 });
});

app.listen(port, () => {
    console.log(`port is listening on ${port}`);
});