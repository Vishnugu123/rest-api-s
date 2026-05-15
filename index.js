const express = require("express");
const app = express();
const path = require("path");
const port = 8080;

app.set("view engine" , "ejs");

app.set("views" , path_join(__dirname,"views"));
app.set(express.static(path_join(__dirname,"public")));

app.use(express.urlencoded({extended : true}));


app.listen(port , () => {
    console.log(`port is lisening on ${port}`);
})