const express = require("express");
const app = express();
const path =require("path");

port = 8080;

app.set("View engine", "ejs");
app.set("views", path.join(__dirname,"/views"));


app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/ig/:username", (req, res) =>{
    let { username } = req.params;
    const instaData = require("./data.json");
    let data = instaData[username];
    console.log(data);
    res.render("instagram.ejs", { data });
});

app.get("/rolldice", (req, res) => {
    let rollVal = Math.floor(Math.random() * 6 ) + 1;
    res.render("rolldice.ejs", {rollVal});
});

app.listen(port, () =>{
    console.log(`app listening on port ${port}`);
});